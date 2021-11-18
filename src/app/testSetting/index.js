/** @format */

import React from "react";
import TestSettingScreen from "../../ui/testSetting/layout";
import Sidebar from "../../app/dashboard/sidebar/index";
import Header from "../dashboard/header/index";
import "../../ui/testSetting/testsetting.css";

const TestSetting = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <TestSettingScreen />
    </>
  );
};

export default TestSetting;
