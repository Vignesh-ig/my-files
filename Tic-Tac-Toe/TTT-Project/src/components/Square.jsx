const Square = ({ handleClick, input }) => {
  return (
    <div className="p-16 cursor-pointer" onClick={handleClick}>
      {input}
    </div>
  );
};

export default Square;
