import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => {
  return (
    <div className="jumbotron">
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {renderTable()}
    </div>
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
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>{" "}
              </td>
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

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
