import FAQSection from "@/components/home/FAQSection";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import HomeCTA from "@/components/home/HomeCTA";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import TrustStats from "@/components/home/TrustStats";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const PublicHomePage = () => {
  return (
    <>
      <Hero />
      <TrustStats />
      <FeaturedProperties />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <HomeCTA />
    </>
  );
};

export default PublicHomePage;
