"use client";

type dashboardHeaderProps = {
  title: string;
};

const LandlordHeader = ({ title }: dashboardHeaderProps) => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
};

export default LandlordHeader;
