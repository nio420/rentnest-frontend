interface Props {
  title: string;
  value: string | number;
}

const DashboardCard = ({ title, value }: Props) => {
  return (
    <div className="rounded-xl border bg-background p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
};

export default DashboardCard;