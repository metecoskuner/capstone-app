import React from "react";
import CallToAction from "../sections/callToActions";
import Specials from "../sections/specials";
import CustomersSay from "../sections/customersSay";
import Chicago from "../sections/chicago";

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default HomePage;
