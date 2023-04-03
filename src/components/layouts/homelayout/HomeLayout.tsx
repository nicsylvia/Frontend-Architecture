import React from "react";
import { Footer, Header } from "../../blocks";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default HomeLayout;
