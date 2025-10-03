import { useState } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";

const Game = () => {
  const [isDisable, setIsDisable] = useState(false);
  return (
    <div className="h-screen w-full flex flex-row items-center justify-center bg-teal-800 gap-10">
      <section className="">
        <Board setIsDisable={setIsDisable} />
      </section>
      <section className="flex flex-col">
        <div>
          <Status />
        </div>
        <div className="">
          <Reset isDisable={isDisable} />
        </div>
      </section>
    </div>
  );
};

export default Game;
