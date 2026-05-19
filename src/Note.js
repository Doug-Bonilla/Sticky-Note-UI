import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  const clickDelete = () => {
    props.removeNote(props.note.id);
  };
  return (
    <li className="note">
      <input
        type="text"
        aria-label="Title"
        placeholder="ToDo Today"
        className="note__title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        aria-label="Description"
        placeholder="Take a nap!"
        className="note__description"
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
