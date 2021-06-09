import DragableObject from "./DragableObject";
import './dropDownMenu.css'
import cub from '../images/cubul.png'
import con from '../images/cone.png'
import piramid from '../images/piramid.png'

const DropDownMenu = () => {



    return (
        <div className='dropDownMenu'>
            <div className='dropDownItem'> <DragableObject isDragable={true} furnitureObject={cub} id='1' />  </div>
            <div className='dropDownItem'> <DragableObject isDragable={true} furnitureObject={con} id='2' /></div>
            <div className='dropDownItem'> <DragableObject isDragable={true} furnitureObject={piramid} id='3' /></div>
        </div>
    );
}

export default DropDownMenu;