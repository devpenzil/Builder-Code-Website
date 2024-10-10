import BlogAndInsights from "@/components/BlogAndInsights";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Builder Code | Mobile App Company</title>
      </Head>
      <Hero />
      <Projects />
      <BlogAndInsights />
      <Testimonials />
    </>
  );
}

export default Home;
