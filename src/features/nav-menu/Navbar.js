import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, selectColor } from './NavbarSlice';
import { pixelSave } from '../board/PixelboardSlice';
import { selectCellPixelX, selectCellPixelY } from '../board/PixelboardSlice';

export function Navbar() {
    const dispatch = useDispatch();
    const color = useSelector(selectColor);
    const x = useSelector(selectCellPixelX);
    const y = useSelector(selectCellPixelY);

    return (
        <div className="Nav-container">
            <div className='div-container'>
                <span>Color: </span>
                <input type='color' value={color} onChange={e => dispatch(changeColor(e.target.value))} />
                <span id='hidden' className='Pixel-gap'>Strength: </span>
                <input id='hidden' type='number' min="0.01" step="0.01" />
            </div>
            <div className='div-container'>
                <span>Send: </span>
                <input type='text' readOnly />
                <span className='Pixel-gap'>To: </span> 
                <input type='text' value='ban_1iajki6yxax4hr8dqudsgjor3oayzhgpqub3htoicfrb8eu8hykc9y7z3xsn' readOnly />
                <span id='hidden' className='Pixel-gap'>X-axis </span> 
                <input id='hidden' type='text' value={x} readOnly />
                <span id='hidden' className='Pixel-gap'>Y-axis </span> 
                <input id='hidden' type='text' value={y} readOnly />
            </div>
            <button onClick={() => dispatch(pixelSave(true))}>Save</button>
        </div>
    );
}