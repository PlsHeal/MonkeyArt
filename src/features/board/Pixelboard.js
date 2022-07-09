import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import './Pixelboard.css';
import { selectColor } from '../nav-menu/NavbarSlice';
//import { canvasSave } from './PixelboardSlice';
import { cellPixelX, cellPixelY, selectCellPixelX, selectCellPixelY } from './PixelboardSlice';

export function Pixelboard() {

  const color = useSelector(selectColor);
  const horizontal = useSelector(selectCellPixelX);
  const vertical = useSelector(selectCellPixelY);
  //const save = useSelector(canvasSave);
  const dispatch = useDispatch();

  const CELL_COUNT = 1000;
  const cellPixelLength = 1000 / CELL_COUNT;

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;
    
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = ctx;
  }

  const filterCanvas = () => {
    const cellX = Math.floor(horizontal / cellPixelLength);
    const cellY = Math.floor(vertical / cellPixelLength);
    const startX = cellX * cellPixelLength;
    const startY = cellY * cellPixelLength;

    contextRef.current.fillStyle = color;
    contextRef.current.fillRect(startX, startY, cellPixelLength, cellPixelLength);
  }

  const pixelCoordinates = (e) => {
    const canvasBoundingRect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - canvasBoundingRect.left;
    const y = e.clientY - canvasBoundingRect.top; 
    dispatch(cellPixelX(x));
    dispatch(cellPixelY(y));
  }

  useEffect(() => {
    prepareCanvas();
  }, []);

  return (
    <div className="gridBox">
      <canvas id='canvas' onMouseMove={pixelCoordinates} onMouseDown={filterCanvas} ref={canvasRef}/>
    </div>
  );
}
