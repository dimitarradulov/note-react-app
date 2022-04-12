import React, { useState } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import ReactModal from 'react-modal';

import Header from './components/Header/Header';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';

const DUMMY_NOTES = [
  {
    id: '50cent',
    title: 'Home WiFi Password',
    content: 'The password for the wifi at home: ILovePizza332$Aligator',
    date: <Moment format="YYYY/MM/DD">{moment()}</Moment>,
  },
  {
    id: 'eminem',
    title: 'My Blog Article I Have To Post',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    date: <Moment format="YYYY/MM/DD">{moment()}</Moment>,
  },
];

const App = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [isViewingDetails, setIsViewingDetails] = useState({
    note: {},
    viewing: false,
  });

  const saveNoteData = (data) => {
    setNotes((prevNotes) => {
      return [data, ...prevNotes];
    });
  };

  const deleteNoteData = (targetNoteDataId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== targetNoteDataId);
    });
  };

  const viewDetailsHandler = (targetNoteDataId) => {
    const targetNote = notes.find((note) => note.id === targetNoteDataId);

    setIsViewingDetails({ note: targetNote, viewing: true });
  };

  const closeModalHandler = () => {
    setIsViewingDetails({ note: {}, viewing: false });
  };

  const titleSortHandler = () => {
    setNotes((prevNotes) => {
      return [...prevNotes].sort((a, b) => a.title.localeCompare(b.title));
    });
  };

  const dateSortHandler = () => {
    setNotes((prevNotes) => {
      return [...prevNotes].sort((a, b) => a.date - b.date);
    });
  };

  return (
    <div>
      <Header />
      <NewNote onSaveNoteData={saveNoteData} />
      <Notes
        data={notes}
        onDelete={deleteNoteData}
        onViewDetails={viewDetailsHandler}
        onTitleSort={titleSortHandler}
        onDateSort={dateSortHandler}
      />
      <ReactModal
        isOpen={isViewingDetails.viewing}
        onRequestClose={closeModalHandler}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingInline: '10px',
          },
          content: {
            width: '800px',
            maxWidth: '100%',
            position: 'relative',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
          },
        }}
      >
        <h3 style={{ marginBottom: '15px' }}>{isViewingDetails.note.title}</h3>
        <p style={{ lineHeight: '1.5' }}>{isViewingDetails.note.content}</p>
        <button
          onClick={closeModalHandler}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"
              fill="#111113"
            />
          </svg>
        </button>
      </ReactModal>
    </div>
  );
};

export default App;
