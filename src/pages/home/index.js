import React from "react";
import MasterLayout from "layouts/MasterLayout";
import { MenuPage } from "./MenuPage";
import { AllPage } from "./AllPage";

const HomePage = () => {
  return (
    <MasterLayout>
      <div className="!bg-[#E5E5E5]">
        <MenuPage />
        <AllPage />
      </div>
    </MasterLayout>
  );
};
export default HomePage;
