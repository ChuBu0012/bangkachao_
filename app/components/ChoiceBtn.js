const ChoiceBtn = ({ choice, isSelected, onClick,className}) => {
  return (
    <button
      className={`${className} outline-none py-[10.5px] rounded-lg text-center h-[45px] ${
        isSelected ? "bg-green-200 text-white" : "bg-green-100"
      }`}
      onClick={() => {
        onClick();
      }}
    >
      {choice}
    </button>
  );
};
export default ChoiceBtn;
