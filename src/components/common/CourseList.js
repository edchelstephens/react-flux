import React from "react";

const CourseList = (props) => {
  return (
    <>
      <h2>Header</h2>
      {renderTable()}
    </>
  );

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
        {props.courses.map((course) => {
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

export default CourseList;
