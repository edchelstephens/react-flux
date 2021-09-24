import React, { useState } from "react";

import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChage({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  function isFormValid() {
    const form_errors = {};

    if (!course.title) {
      form_errors.title = "Title is required";
    }
    if (!course.authorId) {
      form_errors.authorId = "Author is required";
    }
    if (!course.category) {
      form_errors.category = "Category is required";
    }

    setErrors(form_errors);

    let no_errors = Object.keys(form_errors).length === 0;

    return no_errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Success! Course saved!");
    });
  }

  return (
    <div className="jumbotron">
      <h2> Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChage}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default ManageCoursePage;
