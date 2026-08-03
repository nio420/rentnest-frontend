import { Users, Home, Clock, CheckCircle } from "lucide-react";

interface AdminStatsProps {
  stats: {
    totalUsers: number;
    totalProperties: number;
    pendingRequests: number;
    completedRentals: number;
  };
}

const AdminStats = ({ stats }: AdminStatsProps) => {
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
    },
    {
      title: "Total Properties",
      value: stats.totalProperties,
      icon: Home,
    },
    {
      title: "Pending Requests",
      value: stats.pendingRequests,
      icon: Clock,
    },
    {
      title: "Completed Rentals",
      value: stats.completedRentals,
      icon: CheckCircle,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border bg-background p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-muted-foreground">{card.title}</p>

              <Icon className="h-5 w-5 text-primary" />
            </div>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default AdminStats;
