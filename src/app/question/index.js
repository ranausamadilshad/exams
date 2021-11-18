/** @format */

import React from "react";
import QuestionScreen from "../../ui/question/layout";
import "../../ui/question/question.css";
import Header from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";

const Question = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <QuestionScreen />
    </>
  );
};

export default Question;
