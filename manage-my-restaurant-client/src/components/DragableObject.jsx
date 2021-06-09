import noShaddow from '../images/320px-HD_transparent_picture.png'
import './dragableObject.css'

const DragableObject = ({ furnitureObject, isDragable,id}) => {

  

  function clearShaddow(e) {
    const img = new Image();
    img.src = noShaddow;
    const drag = e.dataTransfer;
    drag.setDragImage(img, 0, 0);

    const cubul = document.getElementById('cub'+id)
    cubul.style.cursor="pointer"
    // console.log(e.view.outerWidth)
    // console.log(e.clientX)
    // console.log(cubul.getBoundingClientRect())
    // console.log((e.clientX - (cubul.style.width / 2)) / e.view.outerWidth * 100)
  }


  function updatePosition(e) {
    if ( isDragable === true && e.clientX % 2 === 0) {
      const cubul = document.getElementById('cub'+id)

      cubul.style.cursor="pointer"
      cubul.style.left = `${e.clientX - cubul.clientWidth / 2}px`
      cubul.style.top = `${e.clientY - cubul.clientHeight / 2}px`
    }
  }

    return (
        <div
            id={`cub${id}`} draggable={true}
            className='dragableObject'
            onDragStart={(e => { clearShaddow(e) })}
            onDragOver={(e => { updatePosition(e) })}>
            <img src={furnitureObject} alt='alternativa'
                className='imaginea'
            ></img>
        </div>);
}

export default DragableObject;

