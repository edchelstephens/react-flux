import React from "react";

const CourseForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={props.course.title}
            onChange={props.onTitleChange}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value=""></option>
            <option value="1">Edchel Stephen</option>
            <option value="2">Robert Martin</option>
            <option value="3">Cory House</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={props.course.category}
          ></input>
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary"></input>
    </form>
  );
};

export default CourseForm;
