import { useState } from 'react';
import moment from 'moment';
import Moment from 'react-moment';

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

  return (
    <div>
      <Header />
      <NewNote onSaveNoteData={saveNoteData} />
      <Notes data={notes} onDelete={deleteNoteData} />
    </div>
  );
};

export default App;
