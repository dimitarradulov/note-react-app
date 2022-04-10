import SingleNote from './SingleNote';

const AddedNotes = (props) => {
  return (
    <div className="added-notes">
      <ul className="added-notes__notes">
        {props.data.map((noteData) => (
          <SingleNote
            title={noteData.title}
            content={noteData.content}
            date={noteData.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddedNotes;
