import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  renderHeader() {
    return <h2>Courses</h2>;
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
    );
  }

  renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  renderTable() {
    return (
      <table className="table">
        {this.renderTableHead()}
        <tbody>{this.state.courses.map(this.renderRow)}</tbody>
      </table>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        {this.renderTable()}
      </>
    );
  }
}

export default CoursesPage;
