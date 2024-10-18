import ActiveJobs from "@/components/ActiveJobs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WeAreHiring from "@/components/WeAreHiring";
import React from "react";

function Career() {
  return (
    <div>
      <Navbar />
      <WeAreHiring />
      <ActiveJobs />
      <Footer />
    </div>
  );
}

export default Career;
