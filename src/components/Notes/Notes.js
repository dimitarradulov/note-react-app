import './Notes.css';
import Wrapper from '../UI/Wrapper';
import NoNotes from './NoNotes';
import NotesFilter from './NotesFilter';
import AddedNotes from './AddedNotes';

const Notes = (props) => {
  let jsxContent = <NoNotes />;

  if (props.data.length !== 0) {
    jsxContent = (
      <div>
        <NotesFilter
          onTitleSort={props.onTitleSort}
          onDateSort={props.onDateSort}
        />
        <AddedNotes
          onDelete={props.onDelete}
          onViewDetails={props.onViewDetails}
          data={props.data}
        />
      </div>
    );
  }

  return (
    <div className="notes">
      <Wrapper>{jsxContent}</Wrapper>
    </div>
  );
};

export default Notes;
