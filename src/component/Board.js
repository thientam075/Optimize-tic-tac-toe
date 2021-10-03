import Square from './Square'
import React from 'react';
/* Draw Square in i location (1-n^2)
@param winner: name of winner + squares[]
@param n, size of board
@param squares, array of square to draw
@return {JSX.element}
*/
function Board({n,winner,squares,onClick}){
    let rows = [];
      for(let i = 0;i < n;i++){
        rows = rows.concat([renderRow(i,n,winner,squares,onClick)]);
      }
      return (
        <div>
        {rows}
        </div>
    );
};
/* Draw Square in i location (1-n^2)
@param i location squares
@param winner: name of winner + squares[]
@param n, size of board
@return {JSX.element}
*/
function renderSquare(i,winner,squares,onClick) {
      let winningSquare = winner && winner.includes(i) ? true : false;
      return (
        <Square
          key = {i}
          value={squares[i]}
          onClick={() => onClick(i)}
          winningSquare = {winningSquare}
        />
      );
    };
// Draw row with support by renderSquare in i location (1-n)
// Same parameter
//@return {JSX.element}
function renderRow(i,n,winner,squares,onClick){
      let square = [];
      for(let j = 0; j < n;j++){
        square = square.concat([(renderSquare(i*n + j,winner,squares,onClick))]);
      }
      return (
      <div className = "board-row" key = {i}>
        {square}
      </div> 
      );
    }
export default Board;