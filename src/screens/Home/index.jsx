import DescriptionSection from "@/components/Home/DescriptionSection";
import Header from "@/components/Home/Header";
import SectionBanner from "@/components/Home/SectionBanner";
import SectionRange from "@/components/Home/SectionRange";
import FeatureListSection from "@/components/Home/FeatureSection/FeatureListSection";
import Footer from "@/components/Home/Footer/Footer";
import CardSection from "@/components/Home/CardSection";
import { CardContent } from "./style";
// import { useScreen } from "@/Context/MobileScreen";

const HomeScreen = () => {
  // const { isMobile } = useScreen();

  return (
    <>
      <Header />
      <SectionBanner />
      <section>
        <DescriptionSection
          title="Objetivo do Sistema"
          description="Nosso sistema foi desenvolvido para revolucionar o atendimento médico, 
          integrando tecnologia avançada com práticas médicas modernas."
        />

        <CardContent>
          <CardSection />
        </CardContent>

        <SectionRange />

        <DescriptionSection
          title="O que o sistema oferece?"
          description="Conheça as principais funcionalidades que tornam nosso sistema único no mercado médico."
        />

        <FeatureListSection />

        <Footer />
      </section>
    </>
  );
};

export default HomeScreen;
