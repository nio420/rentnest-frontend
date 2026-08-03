import ReviewForm from "@/components/tenant/ReviewForm";
import Container from "@/components/shared/Container";

interface Props {
  params: Promise<{
    propertyId: string;
  }>;
}

const ReviewPage = async ({ params }: Props) => {
  const { propertyId } = await params;

  return (
    <Container>
      <div className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Review Property</h1>

        <ReviewForm propertyId={propertyId} />
      </div>
    </Container>
  );
};

export default ReviewPage;

