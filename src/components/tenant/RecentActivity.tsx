import { CreditCard, Home, Star } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: "payment" | "rental" | "review";
  date?: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  const icons = {
    payment: {
      icon: CreditCard,
      style: "bg-green-100 text-green-600",
    },

    rental: {
      icon: Home,
      style: "bg-blue-100 text-blue-600",
    },

    review: {
      icon: Star,
      style: "bg-yellow-100 text-yellow-600",
    },
  };

  return (
    <div className="mt-10 rounded-xl border bg-background p-5 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold sm:text-2xl">Recent Activity</h2>

        <p className="text-sm text-muted-foreground">
          Your latest rental activities and payments
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">No recent activity found.</p>
        </div>
      ) : (
        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-5 top-5 hidden h-[85%] w-px bg-border sm:block" />

          {activities.map((activity) => {
            const ActivityIcon = icons[activity.icon];

            return (
              <div key={activity.id} className="relative flex gap-4">
                {/* Icon */}
                <div
                  className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${ActivityIcon.style}`}
                >
                  <ActivityIcon.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border p-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold">{activity.title}</h3>

                    {activity.date && (
                      <span className="text-xs text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
