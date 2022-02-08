import React, { useEffect, useState } from "react";
import "./board.css";
import Square from "./Square";
import PlayerForm from "./PlayerForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

function Board(props) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [symbol, setSymbol] = useState(true);
  const [winnerText, setWinnerText] = useState("");
  const [clickDisable, setClickDisable] = useState(false);
  const [reset, setReset] = useState(false);

  const status = symbol ? props.firstPlayer : props.secondPlayer;

  const resetClick = () => {
    props.setShowBoard(false);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={square[i]}
        onClick={() => handleClick(i)}
        clickDisable={clickDisable}
      />
    );
  };

  const handleClick = (i) => {
    if (square[i] === null) {
      square[i] = symbol ? props.firstPlayerSign : props.secondPlayerSign;

      setSquare(square);

      setSymbol(!symbol);
      const winner = calculateWinner(square);
      if (winner == props.firstPlayerSign) {
        setWinnerText(`Winner: ${props.firstPlayer}`);
        setClickDisable(true);
      } else if (winner == props.secondPlayerSign) {
        setWinnerText(`Winner: ${props.secondPlayer}`);
        setClickDisable(true);
      } else if (!winner && !square.includes(null)) {
        setWinnerText("It's a tie");
        setClickDisable(true);
      }
    } else {
      alert("Not possible to change");
    }
  };

  function calculateWinner(s) {
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
    for (const line of lines) {
      const [a, b, c] = line;
      if (s[a] && s[a] === s[b] && s[a] === s[c]) {
        return s[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="board mb-4">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {winnerText && <span className="blink mr-3">{winnerText}</span>}
      <Button variant="secondary" onClick={resetClick}>
        Reset
      </Button>
      {!props.showBoard && <PlayerForm />}
      {!winnerText && <h5 className="mt-3">Turn : {status}</h5>}
    </>
  );
}

export default Board;