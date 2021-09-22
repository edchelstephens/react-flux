import React from "react";
import TextInput from "./common/TextInput";

const CourseForm = (props) => {
  return (
    <form>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
      />

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

      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary"></input>
    </form>
  );
};

export default CourseForm;
