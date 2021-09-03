import React, { useState, useEffect } from "react";

import { getCourses } from "../api/courseApi";
import CourseList from "./common/CourseList";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => setCourses(data));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
