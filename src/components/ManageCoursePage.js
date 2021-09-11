import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  return (
    <>
      <h2> Manage Course</h2>
      <Prompt when={true} message="Sure you want to leave?" />
    </>
  );
};

export default ManageCoursePage;
