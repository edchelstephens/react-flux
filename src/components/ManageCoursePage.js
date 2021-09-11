import React from "react";

const ManageCoursePage = (props) => {
  return (
    <>
      <h2> Manage Course</h2>
      <b className="text-danger">{props.match.params.slug}</b>
    </>
  );
};

export default ManageCoursePage;
