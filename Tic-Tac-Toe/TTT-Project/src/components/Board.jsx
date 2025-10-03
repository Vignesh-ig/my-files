import { useState } from "react";
import Square from "./Square";

const Board = ({ setIsDisable }) => {
  const values = [null, "x", "o"];

  const [input, SetInput] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [lock, setLock] = useState(false);
  let [val, setVal] = useState(1);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (lock || input[index] != null) {
      return;
    }

    const newInput = [...input];
    newInput[index] = val % 2 === 0 ? values[1] : values[2];

    SetInput(newInput);
    setVal((prevVal) => prevVal + 1);

    checkWon();
  };

  const checkWon = () => {
    if (input[0] != null && input[0] == input[1] && input[1] == input[2]) {
      won(input[0]);
    } else if (
      input[3] != null &&
      input[3] == input[4] &&
      input[4] == input[5]
    ) {
      won(input[3]);
    } else if (
      input[6] != null &&
      input[6] == input[7] &&
      input[7] == input[8]
    ) {
      won(input[6]);
    } else if (
      input[0] != null &&
      input[0] == input[3] &&
      input[3] == input[6]
    ) {
      won(input[0]);
    } else if (
      input[1] != null &&
      input[1] == input[4] &&
      input[4] == input[7]
    ) {
      won(input[1]);
    } else if (
      input[2] != null &&
      input[2] == input[5] &&
      input[5] == input[8]
    ) {
      won(input[2]);
    } else if (
      input[2] != null &&
      input[2] == input[4] &&
      input[4] == input[6]
    ) {
      won(input[2]);
    } else if (
      input[0] != null &&
      input[0] == input[4] &&
      input[4] == input[8]
    ) {
      won(input[0]);
    }
  };

  const won = (winner) => {
    setWinner(winner);
    setLock(true);
    setIsDisable(true);
  };

  return (
    <div className="grid grid-cols-3 gap-3 bg-teal-600 rounded-3xl p-6 shadow-2xl">
      {input.map((val, idx) => (
        <section key={idx} className="custom-square">
          <Square key={idx} handleClick={() => handleClick(idx)} input={val} />
        </section>
      ))}
    </div>
  );
};

export default Board;
