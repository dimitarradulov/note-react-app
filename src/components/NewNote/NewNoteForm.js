import { useState } from 'react';
import uniqid from 'uniqid';

import './NewNoteForm.css';

const NewNoteForm = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!title.trim()) return;
    if (!content.trim()) return;

    const noteData = {
      id: uniqid(),
      title,
      content,
      date: new Date(),
    };

    localStorage.setItem(noteData.id, JSON.stringify(noteData));

    props.onSaveNoteData(noteData);

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={formSubmitHandler} className="add-note">
      <label>Title:</label>
      <input
        type="text"
        className="add-note__title"
        placeholder="Some title..."
        onChange={titleHandler}
        value={title}
      />
      <label>Content:</label>
      <textarea
        className="add-note__content"
        placeholder="Write your note here..."
        onChange={contentHandler}
        value={content}
      ></textarea>
      <div className="add-note__btns">
        <button
          onClick={props.onCancelForm}
          type="button"
          className="btn btn--cancel"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn--add-note">
          Add
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
