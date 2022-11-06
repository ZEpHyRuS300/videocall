import { useState } from  'react';
import './App.css';
import { VideoRoom} from './components/VideoRoom'
function App() {
  const [joined, setJoined]=useState(false)
  return (
    <div className="App">
      <h1> SU VIRTUAL CALL</h1>
    {!joined && (
    <button onClick={() => setJoined(true)}>join room</button>
    )}

    {joined && (
      <VideoRoom />
    )}
    </div>
  );
}

export default App;
