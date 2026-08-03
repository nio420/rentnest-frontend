import { PropertyTableProps } from "@/lib/adminTypes";
import StatusBadge from "../shared/StatusBadge";

const PropertyTable = ({ properties }: PropertyTableProps) => {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden w-full overflow-x-auto rounded-lg border md:block">
        <div className="min-w-225">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted">
              <tr>
                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Landlord</th>

                <th className="p-4 text-left">Category</th>

                <th className="p-4 text-left">Rent Price</th>

                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b">
                  <td className="p-4">
                    <p className="font-medium">{property.title}</p>

                    <p className="text-xs text-muted-foreground">
                      {property.location}
                    </p>
                  </td>

                  <td className="p-4">
                    <p className="font-medium">{property.landlord.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {property.landlord.email}
                    </p>
                  </td>

                  <td className="p-4">{property.category.name}</td>

                  <td className="p-4">৳ {property.rentPrice}</td>

                  <td className="p-4">
                    <StatusBadge status={property.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="space-y-4 md:hidden">
        {properties.map((property) => (
          <div
            key={property.id}
            className="rounded-lg border bg-background p-5 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Property</p>

                <p className="font-semibold">{property.title}</p>

                <p className="text-sm text-muted-foreground">
                  {property.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Landlord</p>

                <p className="font-medium">{property.landlord.name}</p>

                <p className="break-all text-sm text-muted-foreground">
                  {property.landlord.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Category</p>

                <p>{property.category.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Rent Price</p>

                <p className="font-medium">৳ {property.rentPrice}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Status</p>

                <StatusBadge status={property.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyTable;
