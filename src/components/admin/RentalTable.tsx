import { RentalTableProps } from "@/lib/adminTypes";
import StatusBadge from "../shared/StatusBadge";

const RentalTable = ({ rentals }: RentalTableProps) => {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden w-full overflow-x-auto rounded-lg border md:block">
        <div className="min-w-275">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted">
              <tr>
                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Tenant</th>

                <th className="p-4 text-left">Move In Date</th>

                <th className="p-4 text-left">Duration</th>

                <th className="p-4 text-left">Amount</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-left">Payment</th>
              </tr>
            </thead>

            <tbody>
              {rentals.map((rental) => (
                <tr key={rental.id} className="border-b">
                  <td className="p-4">
                    <p className="font-medium">{rental.property.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {rental.property.location}
                    </p>
                  </td>

                  <td className="p-4">
                    <p className="font-medium">{rental.tenant.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {rental.tenant.email}
                    </p>
                  </td>

                  <td className="p-4">
                    {new Date(rental.moveInDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">{rental.rentalMonths} Months</td>

                  <td className="p-4">৳ {rental.totalAmount}</td>

                  <td className="p-4">
                    <StatusBadge status={rental.status} />
                  </td>

                  <td className="p-4">
                    {rental.payment ? (
                      <StatusBadge status="PAID" />
                    ) : (
                      <span className="text-muted-foreground">Unpaid</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="space-y-4 md:hidden">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="rounded-lg border bg-background p-5 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Property</p>

                <p className="font-semibold">{rental.property.title}</p>

                <p className="text-sm text-muted-foreground">
                  {rental.property.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Tenant</p>

                <p className="font-medium">{rental.tenant.name}</p>

                <p className="break-all text-sm text-muted-foreground">
                  {rental.tenant.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Move In Date</p>

                <p>{new Date(rental.moveInDate).toLocaleDateString()}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Duration</p>

                <p>{rental.rentalMonths} Months</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Amount</p>

                <p className="font-medium">৳ {rental.totalAmount}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Status</p>

                <StatusBadge status={rental.status} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Payment</p>

                {rental.payment ? (
                  <StatusBadge status="PAID" />
                ) : (
                  <span className="text-muted-foreground">Unpaid</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RentalTable;
