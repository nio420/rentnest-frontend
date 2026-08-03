import Container from "@/components/shared/Container";
import CreatePropertyForm from "@/components/landlord/CreatePropertyForm";
import { getCategories } from "@/services/category/category.service";

export default async function NewPropertyPage() {
  const result = await getCategories();

  return (
    <Container>
      <div className="mx-auto max-w-5xl py-8">
        <h1 className="mb-6 text-3xl font-bold">
          Create Property
        </h1>

        <CreatePropertyForm categories={result.data} />
      </div>
    </Container>
  );
}