import Board from "./Board";
import React, {useState} from "react";

function Game(){
    const [size, setSize] = useState(5);
    const [history, setHistory] = useState([
        {
            squares: Array(size*size).fill(null),
            allLocations: null,
        }
    ]);

    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [ASCisNext, setASCisNext] = useState(true);
    
    const historyCurrent = history;
    const current = historyCurrent[stepNumber];
    const winner = calculateWinner5(current.squares,size);
    const moves = historyCurrent.map((step, move) => {
    const desc = move ?
          'Go to move #' + move:
          'Go to game start';
        return (
          <li key = {move}>
            <button 
            onClick={() => jumpTo(move)}
            style = {stepNumber === move ? {fontWeight : 'bold'} : {fontWeight: 'normal'}}>{desc}</button>
          </li>
        );
      });
      const locations = historyCurrent.map((step, move) => {
        let desc;
        if(move){
            desc = calculateLocation(step.allLocations,size);
        }else{
            return(<div key = {"NULL"}></div>);
        }
        return (
          <li key = {move}>
            <div
            style = { stepNumber === move ? {fontWeight : 'bold'} : {fontWeight: 'normal'}}>{desc}</div>
          </li>
        );
      });
      let status;
      if (winner) {
        status = 'Winner: ' + winner.namewinner;
      } else if(!checkNULL(current.squares)){
        alert("The match is draw !!!");
      }
      else {
        status = 'Next player: ' + ( xIsNext ? 'X' : 'O');
      }
    function handleClick(i) {
        const historyCurrent = history.slice(0, stepNumber + 1);
        const current = historyCurrent[historyCurrent.length - 1];
        const squares = current.squares.slice();
        if (squares[i] || calculateWinner5(squares,size)) {
          return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        
        setHistory(historyCurrent.concat([
            {
            squares: squares,
            allLocations: i,
            }
          ]));
          setStepNumber(historyCurrent.length);
          setXIsNext(!xIsNext)
    }
  function jumpTo(step) {
      setStepNumber(step);
      setXIsNext((step % 2) === 0);
  };
  function ResetState(){
    setHistory([
        {
            squares: Array(size*size).fill(null),
            allLocations: null,
        }
    ]);
  setStepNumber(0);
  setXIsNext(true);
  setASCisNext(true);
  }
  function HandleChange(e){
    let value = e.target.value;
    value = value < 5 ? 5 : value;
    value = value > 20 ? 20 : value;
    setSize(value);
    ResetState();
  }
  function Sort(){
      setHistory(history.reverse());
      setASCisNext(!ASCisNext);
  };
      let sort =  ASCisNext ? 'Ascending Order' : 'Descending Order';
      return (
        <div className="game">
        <div className = "game-info">
          <div className = "title" key = {"title"}>
            <div className = "title-item">Location: </div>
            <button className = "title-item" onClick = {() => Sort()}>{sort}</button>
          </div>
          <ol>{locations}</ol>
          </div>
          <div className="game-board">
            <div>
            <h3>Enter size of board:</h3>
            <input type="number" value={size} className= "status" onChange = {(e) => HandleChange(e)}/>
            <p>Change size to restart game</p>
            </div>
            
            <Board
              n = {size}
              squares={current.squares}
              onClick={(i) => handleClick(i)}
              winner = {winner && winner.winnerSquares}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          
        </div>
      );
}

  function calculateWinner3(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          namewinner: squares[a],
          winnerSquares: lines[i]
        };
      }
    }
    return null;
  }

  function calculateWinner5(squares,size) {
    if(squares)
    // Check row from 0 - (size - 1)
    for(let i=0;i<size;i++){
      for(let j=0;j<=size - 5;j++){
        if(squares[j+i*size] && squares[j+i*size] === squares[j+i*size+1] && squares[j+i*size+1] === squares[j+i*size+2] && squares[j+i*size+2] === squares[j+i*size+3]
          && squares[j+i*size+3] === squares[j+i*size+4])
          {
              const lines = [j+i*size,j+i*size+1,j+i*size+2,j+i*size+3,j+i*size+4];
              return {
                namewinner : squares[j+i*size],
                winnerSquares: lines
              }
          }
      };
    };
    // Check col from 0 - (size - 1)
    for(let j=0;j<size;j++){
      for(let i=0;i<=size - 5;i++){
        if(squares[j+i*size] && squares[j+i*size] === squares[j+(i+1)*size] && squares[j+(i+1)*size] === squares[j+(i+2)*size] 
          && squares[j+(i+2)*size] === squares[j+(i+3)*size]
          && squares[j+(i+3)*size] === squares[j+(i+4)*size])
          {
              const lines = [j+i*size,j+(i+1)*size,j+(i+2)*size,j+(i+3)*size,j+(i+4)*size];
              return {
                namewinner : squares[j+i*size],
                winnerSquares: lines
              }
          }
      };
    };
    // check diagonal line
    for(let j=0;j<size;j++){
      for(let i=0;i<=size;i++){
        if(squares[j+i*size] && (!checkFinalLineDiag(i,j,size)) 
        && squares[j+i*size] === squares[(j+1)+(i+1)*size] 
        && squares[(j+1)+(i+1)*size] === squares[(j+2)+(i+2)*size] 
        && squares[(j+2)+(i+2)*size] === squares[(j+3)+(i+3)*size]
        && squares[(j+3)+(i+3)*size] === squares[(j+4)+(i+4)*size])
          {
              const lines = [j+i*size,j+1+(i+1)*size,j+2+(i+2)*size,j+3+(i+3)*size,j+4+(i+4)*size];
              return {
                namewinner : squares[j+i*size],
                winnerSquares: lines
              }
          }
      };
    };
    // check reverse diagonal line
    for(let j=0;j<size;j++){
      for(let i=0;i<=size;i++){
        if(squares[j+(size - i - 1)*size] && (!checkFinalLineReverseDiag(i,j,size))
        && squares[j+(size - i - 1)*size] === squares[(j+1)+(size - (i+1) - 1)*size] 
        && squares[(j+1)+(size - (i+1) - 1)*size] === squares[(j+2)+(size - (i+2) - 1)*size] 
        && squares[(j+2)+(size - (i+2) - 1)*size] === squares[(j+3)+(size - (i+3) - 1)*size]
        && squares[(j+3)+(size - (i+3) - 1)*size] === squares[(j+4)+(size - (i+4) - 1)*size])
          {
              const lines = [j+(size - i - 1)*size,(j+1)+(size - (i+1) - 1)*size,
                (j+2)+(size - (i+2) - 1)*size,(j+3)+(size - (i+3) - 1)*size,
                (j+4)+(size - (i+4) - 1)*size];
              return {
                namewinner : squares[j+(size - i - 1)*size],
                winnerSquares: lines
              }
          }
      };
    };
    return null;
  }
  function calculateLocation(i,size){
    return `(Row: ${parseInt(i/size)} - Col: ${parseInt(i%size)})`;
  }
  function checkNULL(square){
    return square.includes(null);
  }
  function checkFinalLineDiag(i,j,size){
    return ((i)*size + (j) + 1 )%size === 0 
    || ((i+1)*size + (j+1) + 1)%size === 0
    || ((i+2)*size + (j+2) + 1 )%size === 0
    || ((i+3)*size + (j+3) + 1 )%size === 0;
  }
  function checkFinalLineReverseDiag(i,j,size){
    return (j+(size - i - 1)*size + 1)%size === 0 
    || ((j+1)+(size - (i+1) - 1)*size + 1)%size === 0
    || ((j+2)+(size - (i+2) - 1)*size + 1)%size === 0
    || ((j+2)+(size - (i+2) - 1)*size + 1)%size === 0;
  }
export default Game;  