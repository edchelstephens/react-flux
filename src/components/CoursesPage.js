import React, { useState, useEffect } from "react";

import { getCourses } from "../api/courseApi";

import CourseList from "./CourseList";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => setCourses(data));
  }, []);

  return (
    <>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
