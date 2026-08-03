import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import HomeCTA from "@/components/home/HomeCTA";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const PublicHomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
};

export default PublicHomePage;