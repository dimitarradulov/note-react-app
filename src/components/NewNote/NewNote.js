import { useState } from 'react';

import './NewNote.css';
import Wrapper from '../UI/Wrapper';
import NewNoteForm from './NewNoteForm';

const NewNote = () => {
  const [isAddingNote, setIsAddingNote] = useState(false);

  const btnHandler = () => {
    setIsAddingNote(true);
  };

  const cancelFormHandler = () => {
    setIsAddingNote(false);
  };

  let jsxContent = (
    <button onClick={btnHandler} className="btn btn--add">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5 5.33334L24.4167 2.25C24.1516 1.99732 23.7995 1.85635 23.4333 1.85635C23.0671 1.85635 22.715 1.99732 22.45 2.25L19.7083 5H4.99999C4.55797 5 4.13404 5.1756 3.82148 5.48816C3.50892 5.80072 3.33333 6.22464 3.33333 6.66667V25C3.33333 25.442 3.50892 25.866 3.82148 26.1785C4.13404 26.4911 4.55797 26.6667 4.99999 26.6667H23.3333C23.7754 26.6667 24.1993 26.4911 24.5118 26.1785C24.8244 25.866 25 25.442 25 25V9.80001L27.5 7.30001C27.7605 7.03908 27.9069 6.68541 27.9069 6.31667C27.9069 5.94793 27.7605 5.59427 27.5 5.33334V5.33334ZM15.6917 16.775L12.2 17.55L13.0333 14.0917L20.9917 6.11667L23.6833 8.80834L15.6917 16.775ZM24.5833 7.85834L21.8917 5.16667L23.4333 3.625L26.125 6.31667L24.5833 7.85834Z"
          fill="#FBFFFF"
        />
      </svg>
      <span>Add New Note</span>
    </button>
  );

  if (isAddingNote) {
    jsxContent = (
      <Wrapper>
        <NewNoteForm onCancelForm={cancelFormHandler} />
      </Wrapper>
    );
  }

  return <div className="add-note-container">{jsxContent}</div>;
};

export default NewNote;
