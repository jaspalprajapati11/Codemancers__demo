import Notes from './Components/Notes';
import NoteState from '../src/Context/NoteState'

function App() {
  return (
    <>
    <NoteState>
      <Notes/>
    </NoteState>
    </>
  );
}

export default App;
