"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis } from "recharts";
import {
  Building2,
  GitPullRequest,
  Wallet,
  TrendingUp,
  BarChart3,
  Layers,
} from "lucide-react";

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
} from "@/components/ui/chart";

interface Props {
  totalProperties: number;
  activeRequests: number;
  totalEarnings: number;
}

const chartConfig = {
  properties: {
    label: "Properties",
    color: "#2563eb", // Solid Royal Blue
  },
  requests: {
    label: "Requests",
    color: "#d97706", // Solid Amber
  },
  earnings: {
    label: "Earnings",
    color: "#059669", // Solid Emerald
  },
} satisfies ChartConfig;

export default function LandlordStatsChart({
  totalProperties,
  activeRequests,
  totalEarnings,
}: Props) {
  // Log-normalization to ensure visual balance when values differ dramatically (e.g. 50,000 vs 3)
  const maxRawValue = Math.max(
    totalProperties,
    activeRequests,
    totalEarnings,
    1
  );
  const logMax = Math.log10(maxRawValue + 1);

  const normalizeBarHeight = (val: number) => {
    if (val <= 0) return 5;
    const logVal = Math.log10(val + 1);
    const percentage = (logVal / logMax) * 100;
    return Math.max(28, Math.min(100, percentage));
  };

  const chartData = [
    {
      category: "Properties",
      rawValue: totalProperties,
      displayHeight: normalizeBarHeight(totalProperties),
      color: "#2563eb",
      bgColor: "bg-blue-50/80 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800/60",
      textColor: "text-blue-700 dark:text-blue-400",
      formattedValue: `${totalProperties.toLocaleString()} Units`,
      badgeLabel: "Properties",
    },
    {
      category: "Requests",
      rawValue: activeRequests,
      displayHeight: normalizeBarHeight(activeRequests),
      color: "#d97706",
      bgColor: "bg-amber-50/80 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800/60",
      textColor: "text-amber-700 dark:text-amber-400",
      formattedValue: `${activeRequests.toLocaleString()} Pending`,
      badgeLabel: "Demands",
    },
    {
      category: "Earnings",
      rawValue: totalEarnings,
      displayHeight: normalizeBarHeight(totalEarnings),
      color: "#059669",
      bgColor: "bg-emerald-50/80 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800/60",
      textColor: "text-emerald-700 dark:text-emerald-400",
      formattedValue: `৳${totalEarnings.toLocaleString()}`,
      badgeLabel: "Revenue",
    },
  ];

  // Analytical Calculations
  const avgEarningsPerProperty =
    totalProperties > 0 ? Math.round(totalEarnings / totalProperties) : 0;
  const requestsPerProperty =
    totalProperties > 0 ? (activeRequests / totalProperties).toFixed(1) : "0";

  return (
    <Card className="w-full border shadow-sm bg-card overflow-hidden transition-all">
      {/* Header */}
      <CardHeader className="p-4 sm:p-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary shrink-0" />
              <CardTitle className="text-lg sm:text-xl font-black tracking-tight text-foreground">
                Landlord Analytics
              </CardTitle>
            </div>
            <CardDescription className="text-xs text-muted-foreground mt-1">
              Normalized comparative visualization across portfolio size, demand, and earnings
            </CardDescription>
          </div>

          <div className="self-start sm:self-auto flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Active Dashboard</span>
          </div>
        </div>

        {/* 3 Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          <div
            className={`flex items-center justify-between rounded-xl border p-3.5 transition-all hover:shadow-xs ${chartData[0].bgColor} ${chartData[0].borderColor}`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-600 p-2 text-white shadow-xs shrink-0">
                <Building2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Total Units
                </p>
                <p className="text-base font-black text-foreground">
                  {totalProperties.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-200/60 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 shrink-0">
              {chartData[0].badgeLabel}
            </span>
          </div>

          <div
            className={`flex items-center justify-between rounded-xl border p-3.5 transition-all hover:shadow-xs ${chartData[1].bgColor} ${chartData[1].borderColor}`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-600 p-2 text-white shadow-xs shrink-0">
                <GitPullRequest className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Active Requests
                </p>
                <p className="text-base font-black text-foreground">
                  {activeRequests.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-200/60 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 shrink-0">
              {chartData[1].badgeLabel}
            </span>
          </div>

          <div
            className={`flex items-center justify-between rounded-xl border p-3.5 transition-all hover:shadow-xs ${chartData[2].bgColor} ${chartData[2].borderColor}`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-600 p-2 text-white shadow-xs shrink-0">
                <Wallet className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Total Income
                </p>
                <p className="text-base font-black text-emerald-700 dark:text-emerald-400">
                  ৳{totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-200/60 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 shrink-0">
              {chartData[2].badgeLabel}
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Chart Canvas */}
      <CardContent className="p-4 sm:p-6 pt-2">
        <ChartContainer
          config={chartConfig}
          className="h-65 sm:h-75 w-full"
        >
          <BarChart
            data={chartData}
            margin={{ top: 32, right: 20, left: 20, bottom: 8 }}
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
              tickMargin={12}
              className="text-xs font-bold text-foreground"
            />

            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-xl border bg-popover/95 p-3 shadow-md backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-2 font-bold">
                        <span
                          className="h-2.5 w-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: data.color }}
                        />
                        <span className="text-foreground">{data.category}</span>
                      </div>
                      <p className="text-sm font-black text-foreground pt-0.5">
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
              radius={[8, 8, 0, 0]}
              maxBarSize={80}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="formattedValue"
                position="top"
                className="fill-foreground font-black text-xs sm:text-sm"
                offset={10}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      {/* Footer Metrics */}
      <CardFooter className="px-4 sm:px-6 py-3 border-t bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary shrink-0" />
          <span>
            Demand Density:{" "}
            <strong className="text-foreground font-bold">
              {requestsPerProperty} requests
            </strong>{" "}
            / property
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>Avg Revenue / Property:</span>
          <span className="font-black text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            ৳{avgEarningsPerProperty.toLocaleString()}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}