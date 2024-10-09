import BlogAndInsights from "@/components/BlogAndInsights";
import Hero from "@/components/Hero";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Builder Code | Mobile App Company</title>
      </Head>
      <Hero />
      <BlogAndInsights />
    </>
  );
}

export default Home;
