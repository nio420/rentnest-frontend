"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";
import {
  Users,
  Building2,
  Clock3,
  CheckCircle2,
  BarChart3,
  Activity,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

interface Props {
  totalUsers: number;
  totalProperties: number;
  pendingRequests: number;
  completedRentals: number;
}

const chartConfig = {
  users: {
    label: "Users",
    color: "#2563eb",
  },
  properties: {
    label: "Properties",
    color: "#7c3aed",
  },
  pending: {
    label: "Pending Requests",
    color: "#d97706",
  },
  completed: {
    label: "Completed Rentals",
    color: "#059669",
  },
} satisfies ChartConfig;

export default function AdminStatsChart({
  totalUsers,
  totalProperties,
  pendingRequests,
  completedRentals,
}: Props) {
  const maxValue = Math.max(
    totalUsers,
    totalProperties,
    pendingRequests,
    completedRentals,
    1,
  );

  const normalizeBarHeight = (value: number) => {
    if (value <= 0) return 5;

    return Math.max(20, (value / maxValue) * 100);
  };

  const chartData = [
    {
      category: "Users",
      value: totalUsers,
      displayHeight: normalizeBarHeight(totalUsers),
      color: "#2563eb",
      formattedValue: totalUsers.toLocaleString(),
    },
    {
      category: "Properties",
      value: totalProperties,
      displayHeight: normalizeBarHeight(totalProperties),
      color: "#7c3aed",
      formattedValue: totalProperties.toLocaleString(),
    },
    {
      category: "Pending Requests",
      value: pendingRequests,
      displayHeight: normalizeBarHeight(pendingRequests),
      color: "#d97706",
      formattedValue: pendingRequests.toLocaleString(),
    },
    {
      category: "Completed Rentals",
      value: completedRentals,
      displayHeight: normalizeBarHeight(completedRentals),
      color: "#059669",
      formattedValue: completedRentals.toLocaleString(),
    },
  ];

  return (
    <Card className="mt-6 w-full overflow-hidden border shadow-sm">
      {/* Header */}
      <CardHeader className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <CardTitle className="text-xl font-black tracking-tight sm:text-2xl">
                    Platform Performance
                  </CardTitle>

                  <CardDescription className="mt-1 text-sm">
                    Real-time overview of RentNest platform activity
                  </CardDescription>
                </div>
              </div>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <Activity className="h-4 w-4" />

              <span>Live Analytics</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-h-26.25 items-center gap-4 rounded-2xl border border-blue-200 bg-blue-50/80 p-5 dark:border-blue-800 dark:bg-blue-950/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Total Users
                </p>

                <p className="mt-1 text-2xl font-black">
                  {totalUsers.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex min-h-26.25 items-center gap-4 rounded-2xl border border-violet-200 bg-violet-50/80 p-5 dark:border-violet-800 dark:bg-violet-950/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Properties
                </p>

                <p className="mt-1 text-2xl font-black">
                  {totalProperties.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex min-h-26.25 items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 dark:border-amber-800 dark:bg-amber-950/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white shadow-sm">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Pending Requests
                </p>

                <p className="mt-1 text-2xl font-black">
                  {pendingRequests.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex min-h-26.25 items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Completed Rentals
                </p>

                <p className="mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-400">
                  {completedRentals.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Chart */}
      <CardContent className="px-6 pb-8 sm:px-8 lg:px-10">
        <div className="rounded-2xl border bg-muted/10 p-5 sm:p-7">
          <div className="mb-5">
            <h3 className="text-sm font-bold">Platform Activity Overview</h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Comparative view of your current platform metrics
            </p>
          </div>

          <ChartContainer
            config={chartConfig}
            className="h-85 w-full sm:h-95"
          >
            <BarChart
              data={chartData}
              margin={{
                top: 35,
                right: 25,
                left: 10,
                bottom: 15,
              }}
              barCategoryGap="20%"
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                className="stroke-muted/40"
              />

              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={14}
                className="text-xs font-bold"
              />

              <ChartTooltip
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;

                    return (
                      <div className="rounded-xl border bg-popover px-4 py-3 shadow-lg">
                        <div className="flex items-center gap-2 font-bold">
                          <span
                            className="h-3 w-3 rounded-full"
                            style={{
                              backgroundColor: data.color,
                            }}
                          />

                          <span>{data.category}</span>
                        </div>

                        <p className="mt-1 text-sm font-black">
                          {data.formattedValue}
                        </p>
                      </div>
                    );
                  }

                  return null;
                }}
              />

              <Bar
                dataKey="displayHeight"
                radius={[12, 12, 4, 4]}
                maxBarSize={95}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}

                <LabelList
                  dataKey="formattedValue"
                  position="top"
                  offset={12}
                  className="fill-foreground text-xs font-black sm:text-sm"
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
