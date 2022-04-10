import './NewNoteForm.css';

const NewNoteForm = (props) => {
  return (
    <form className="add-note">
      <label>Title:</label>
      <input
        type="text"
        className="add-note__title"
        placeholder="Some title..."
      />
      <label>Content:</label>
      <textarea
        className="add-note__content"
        placeholder="Write your note here..."
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
