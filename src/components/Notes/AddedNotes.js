import SingleNote from './SingleNote';

const AddedNotes = (props) => {
  return (
    <div className="added-notes">
      <ul className="added-notes__notes">
        {props.data.map((noteData) => (
          <SingleNote
            key={noteData.id}
            id={noteData.id}
            title={noteData.title}
            content={noteData.content}
            date={noteData.date}
            onDelete={props.onDelete}
            onViewDetails={props.onViewDetails}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddedNotes;
