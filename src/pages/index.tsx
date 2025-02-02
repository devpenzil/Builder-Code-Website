import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Builder Code | Digital Agency</title>
      </Head>
      <Hero />
      <Description />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
