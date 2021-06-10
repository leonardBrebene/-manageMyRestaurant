import noShaddow from '../images/320px-HD_transparent_picture.png'
import './dragableObject.css'
import { useRef, useState } from 'react'

const DragableObject = ({ furnitureObject, isDragable, id }) => {
  const [dragableClassname,setDragableClassname]=useState('dragableObject')



  function clearShaddow(e) {
    const img = new Image();
    img.src = noShaddow;
    const drag = e.dataTransfer;
    drag.setDragImage(img, 0, 0);

    const mobilier = document.getElementById('cub' + id)
    mobilier.style.cursor = "pointer"

    // console.log(e.view.outerWidth)
    // console.log(e.clientX)
    // console.log(mobilier.getBoundingClientRect())
    // console.log((e.clientX - (mobilier.style.width / 2)) / e.view.outerWidth * 100)
  }


  function updatePosition(e) {
    if (isDragable === true && e.clientX % 2 === 0) {
      const mobilier = document.getElementById('cub' + id)

      mobilier.style.cursor = "pointer"
      mobilier.style.left = `${e.clientX - mobilier.clientWidth / 2}px`
      mobilier.style.top = `${e.clientY - mobilier.clientHeight / 2}px`
    }
  }

  return (
    <div
      id={`cub${id}`} draggable={true}
      className={`${dragableClassname}`}
      onMouseDown={(() => { const mobilier = document.getElementById('cub' + id); mobilier.style.position = 'fixed' })}
      onDragStart={(e => { clearShaddow(e) })}
      onDragOver={(e => { updatePosition(e); })}
      onDragEnd={(() => {
        const mobilier = document.querySelector('#cub' + id); 
        const randomContainer=document.querySelector('.randomContainer')  //<div>ul care reprezinta spatiul restaurantului
        randomContainer.appendChild(mobilier) //mobilier devine nod catre spatiul restaurantuli
        setDragableClassname('randomItem')
        mobilier.style.position='absolute'
      })}
      
    >
      <img src={furnitureObject} alt='alternativa'
        className='imaginea'
      ></img>
    </div>);
}

export default DragableObject;

