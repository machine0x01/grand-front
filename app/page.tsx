import HeroHome from "./components/HeroHome";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GraphicDesignSection from "./components/GraphicDesgin";
import MotionGraphicsSection from "./components/MotionGraphic";
import MohoAnimationSection from "./components/MohoAnimation";
import Blender3DSection from "./components/BlinderSection";
import { StudentsComments } from "./components/Comments";
import CreationsShowcase from "./components/StudentShowCase";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SplashCursor />
      <HeroHome />
      <AboutSection />
      <GraphicDesignSection />
      <MotionGraphicsSection />
      <MohoAnimationSection />
      <Blender3DSection />
      <StudentsComments />
      <CreationsShowcase  />
      <Footer />
    </div>
  );
}
