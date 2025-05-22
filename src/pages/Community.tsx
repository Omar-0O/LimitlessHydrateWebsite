
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunityHero from "@/components/CommunityHero";
import WeeklyHydrationGuide from "@/components/WeeklyHydrationGuide";
import SeasonalHydration from "@/components/SeasonalHydration";
import HydrationInsights from "@/components/HydrationInsights";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CommunityHero />
        <WeeklyHydrationGuide />
        <SeasonalHydration />
        <HydrationInsights />
      </div>
      <Footer />
    </div>
  );
};

export default Community;
