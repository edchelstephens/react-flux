import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => setCourses(data));
  }, []);

  return (
    <>
      {renderHeader()}
      {renderTable()}
    </>
  );

  function renderHeader() {
    return <h2>Header</h2>;
  }

  function renderTableHead() {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Author Id</th>
          <th>Category</th>
        </tr>
      </thead>
    );
  }

  function renderTableBody() {
    return (
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  function renderTable() {
    return (
      <table className="table">
        {renderTableHead()}
        {renderTableBody()}
      </table>
    );
  }
};

export default CoursesPage;
