import { useState } from 'react';

import Header from './components/Header/Header';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';

const DUMMY_NOTES = [
  {
    title: 'Home WiFi Password',
    content: 'The password for the wifi at home: ILovePizza332$Aligator',
    date: new Date(),
  },
  {
    title: 'My Blog Article I Have To Post',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    date: new Date(),
  },
];

const App = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);

  return (
    <div>
      <Header />
      <NewNote />
      <Notes data={notes} />
    </div>
  );
};

export default App;
