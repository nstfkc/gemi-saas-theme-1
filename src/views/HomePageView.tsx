import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { GetStarted } from "@/components/GetStarted";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sandwich } from "@/components/Sandwich";
import { Testimonials } from "@/components/Testimonials";
export const HomePageView = () => {
  return (
    <>
      <Header />
      <div className="h-16 md:h-32" />
      <Hero />
      <div className="h-32" />
      <Sandwich />
      <div className="h-32" />
      <Features />
      <div className="h-32" />
      <GetStarted />
      <div className="h-32" />
      <Testimonials />
      <div className="h-32" />
      <FAQ />
      <div className="h-32" />
      <FinalCTA />
      <div className="h-32" />
      <Footer />
      <div className="h-24 sm:h-16" />
    </>
  );
};
