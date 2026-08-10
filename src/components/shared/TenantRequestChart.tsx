"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Props {
  pending: number;
  approved: number;
  rejected: number;
  completed: number;
}

const chartConfig = {
  requests: {
    label: "Requests",
  },
  approved: {
    label: "Approved",
    color: "#10b981", // Emerald
  },
  completed: {
    label: "Completed",
    color: "#3b82f6", // Royal Blue
  },
  pending: {
    label: "Pending",
    color: "#f59e0b", // Amber
  },
  rejected: {
    label: "Rejected",
    color: "#f43f5e", // Rose
  },
} satisfies ChartConfig;

export default function TenantRequestChart({
  pending,
  approved,
  rejected,
  completed,
}: Props) {
  const totalRequests = pending + approved + rejected + completed;

  const statusMetrics = [
    {
      status: "approved",
      label: "Approved",
      value: approved,
      color: "#10b981",
    },
    {
      status: "completed",
      label: "Completed",
      value: completed,
      color: "#3b82f6",
    },
    {
      status: "pending",
      label: "Pending",
      value: pending,
      color: "#f59e0b",
    },
    {
      status: "rejected",
      label: "Rejected",
      value: rejected,
      color: "#f43f5e",
    },
  ];

  const chartData = statusMetrics
    .filter((item) => item.value > 0)
    .map((item) => ({
      ...item,
      fill: item.color,
    }));

  const positiveRate =
    totalRequests > 0
      ? Math.round(((approved + completed) / totalRequests) * 100)
      : 0;

  return (
    <Card className="flex flex-col h-full border shadow-xs">
      {/* Tightened Header */}
      <CardHeader className="p-4 pb-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold tracking-tight">
            Rental Request Analytics
          </CardTitle>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
            Live Status
          </span>
        </div>
        <CardDescription className="text-xs text-muted-foreground mt-0.5">
          Breakdown of your submitted requests
        </CardDescription>
      </CardHeader>

      {/* Tightened Content & Reduced Chart Height */}
      <CardContent className="flex-1 p-4 pt-2 pb-3">
        {totalRequests === 0 ? (
          <div className="flex h-45 w-full flex-col items-center justify-center gap-1 rounded-lg border border-dashed text-muted-foreground">
            <p className="text-xs font-medium">No request data available</p>
            <p className="text-[11px] text-muted-foreground/70">
              Submitted requests will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Compact Donut Chart */}
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-42.5"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  strokeWidth={2}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-2xl font-black tracking-tight"
                            >
                              {totalRequests.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 16}
                              className="fill-muted-foreground text-[10px] font-bold uppercase tracking-wider"
                            >
                              Total
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>

            {/* Compact 2-Column Legend Grid */}
            <div className="grid grid-cols-2 gap-1.5">
              {statusMetrics.map((item) => {
                const percentage =
                  totalRequests > 0
                    ? Math.round((item.value / totalRequests) * 100)
                    : 0;

                return (
                  <div
                    key={item.status}
                    className="flex items-center justify-between rounded-md border bg-muted/20 px-2.5 py-1.5 text-xs transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium text-muted-foreground truncate text-[11px]">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="font-bold text-foreground text-xs">
                        {item.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium">
                        ({percentage}%)
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>

      {/* Ultra-compact Footer */}
      {totalRequests > 0 && (
        <CardFooter className="px-4 py-2 border-t text-xs text-muted-foreground mt-auto bg-muted/10">
          <div className="flex w-full items-center justify-between text-[11px]">
            <span className="font-bold">Success Rate</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              {positiveRate}%
            </span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}