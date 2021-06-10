import { useRef, useState } from 'react'
import useDraggable from "./useDraggable";
import './App.css';
import Sidebar from './components/Sidebar';


const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      {children}
    </div>
  );
};

function App() {
  const [isDragable, setIsDragable] = useState(false);

  return (
    <div className="App">
      <div className='randomContainer'>
        randomContainer
        <div className='randomItem'>
        </div>
      </div>

      <DraggableCard />

      <Sidebar />
      <button
        style={{ position: 'absolute', right: '5px', bottom: '5px', zIndex: '50' }}
        onClick={(() => { setIsDragable(!isDragable); console.log("setat") })}
      >{JSON.stringify(isDragable)}</button>
    </div>

  );
}

export default App;
