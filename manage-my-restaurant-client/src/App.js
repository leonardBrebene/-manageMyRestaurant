import { useRef, useState } from 'react'
import useDraggable from "./useDraggable";
import './App.css';
import Sidebar from './components/Sidebar';
import DragableObject from './components/DragableObject';


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
    <div className="App" style={{ backgroundColor: 'red' }}>
     
      <DraggableCard/>

      {/* <DragableObject isDragable={isDragable}/> */}
      <Sidebar/>
      
      
     
      <button
        style={{ position: 'absolute', right: '5px', bottom: '5px', zIndex: '50' }}
        onClick={(() => { setIsDragable(!isDragable); console.log("setat") })}
      >{JSON.stringify(isDragable)}</button>


    </div>

  );
}

export default App;
