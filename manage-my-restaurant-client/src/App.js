import noShaddow from './images/320px-HD_transparent_picture.png'
import cub from './images/cubul.png'

import { useRef, useState } from 'react'
import useDraggable from "./useDraggable";
import './App.css';


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
  const [ceva, setceva] = useState(false);
  const [ceva2, setceva2] = useState(false);

  function clearShaddow(e) {

    let img = new Image();
    img.src = noShaddow;
    const drag = e.dataTransfer;
    drag.setDragImage(img, 0, 0);

    const cubul = document.getElementById('cub')
    console.log(e.view.outerWidth)
    console.log(e.clientX)
    console.log(cubul.getBoundingClientRect())

    console.log((e.clientX - (cubul.style.width / 2)) / e.view.outerWidth * 100)
  }


  function updatePosition(e) {
    if (ceva === true && ceva2 === true && e.clientX % 2 === 0) {
      const cubul = document.getElementById('cub')

      console.log("positionchanged")
      cubul.style.left = `${e.clientX - cubul.clientWidth / 2}px`
      cubul.style.top = `${e.clientY - cubul.clientHeight / 2}px`
    }
  }



  return (
    <div className="App" style={{ backgroundColor: 'red' }}>
      <p>Scrie ceva aici</p>
      <DraggableCard>Card 1</DraggableCard>
      <div
        id='cub' draggable={true}
        style={{ position: 'absolute', textAlign: 'center', border: '5px dotted black', justifyContent: 'center', display: '' }}

        onDragStart={(e => { setceva(true); clearShaddow(e) })}
        onDragOver={(e => { updatePosition(e) })}>
        <img src={cub} alt='alternativa'
          className='imaginea'
          style={{ position: 'relative', textAlign: 'center', border: '5px dotted black' }}
        ></img>
      </div>
      <button
        style={{ position: 'absolute', right: '5px', bottom: '5px', zIndex: '50' }}
        onClick={(() => { setceva2(!ceva2); console.log("setat") })}
      >{JSON.stringify(ceva2)}</button>


    </div>

  );
}

export default App;
