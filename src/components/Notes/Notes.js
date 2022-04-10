import './Notes.css';
import Wrapper from '../UI/Wrapper';
import NoNotes from './NoNotes';

const Notes = () => {
  return (
    <div className="notes">
      <Wrapper>
        <NoNotes />
      </Wrapper>
    </div>
  );
};

export default Notes;
