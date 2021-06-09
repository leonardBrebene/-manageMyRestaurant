import DragableObject from './DragableObject';
import { useRef, useState } from 'react'
import useDraggable from "../useDraggable";
import './sideBar.css'
import DropDownMenu from './DropDownMenu';

const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div className="card" ref={cardRef}>
        {children}
      </div>
    );
  };


const Sidebar = () => {
    const [open, setOpen] = useState(false)
   


    return (
        <div
            className='sideBar'
        >
            <button
                onClick={() => setOpen(!open)}>Lista derulanta
            </button>
            

            {open&&<DropDownMenu/>}
            

        </div>
    );
}

export default Sidebar;