import React from "react";
import MasterLayout from "layouts/MasterLayout";
import { MenuPage } from "./MenuPage";
import { AllPage } from "./AllPage";

const HomePage = () => {
  return (
    <MasterLayout>
      <div className="!bg-[#F6F9FB]">
        <MenuPage />
        <AllPage />
      </div>
    </MasterLayout>
  );
};
export default HomePage;
