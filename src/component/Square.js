function Square({onClick,winningSquare,value}) {
    return (
      <button 
      className="square" 
      onClick={onClick}
      style = {winningSquare ? {backgroundColor:'cyan'} : null }>
        {value}
      </button>
    );
  };
export default Square;