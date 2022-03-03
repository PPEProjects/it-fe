import React from "react";
import MasterLayout from "layouts/MasterLayout";
import { MenuPage } from "./MenuPage";
import { AllPage } from "./AllPage";

const HomePage = () => {
  return (
    <MasterLayout>
      <section className="!bg-[#F6F9FB]">
        <MenuPage />
        <AllPage />
      </section>
    </MasterLayout>
  );
};
export default HomePage;
