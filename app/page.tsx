import Header from "@/components/header";
import HomePage from "@/components/homepage";
import AboutMe from "@/components/aboutme";
import Portfolio from "@/components/portfolio";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}
