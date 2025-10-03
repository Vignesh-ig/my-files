const Reset = ({ isDisable }) => {
  console.log(isDisable);
  return (
    <>
      <button
        className={`p-3 rounded-2xl ${
          isDisable
            ? "bg-violet-700 text-amber-50 cursor-pointer"
            : "bg-violet-500 text-amber-50"
        }`}
        disabled={isDisable}
      >
        Reset
      </button>
    </>
  );
};

export default Reset;
