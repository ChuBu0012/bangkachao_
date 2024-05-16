const ChoiceBtn = ({ choice, isSelected, onClick, className, hl }) => {
  return (
    <button
      className={` outline-none py-[10.5px] rounded-lg text-center ${
        isSelected ? "bg-green-200 text-white" : "bg-green-100"
      } ${hl ? "h-14" : "h-[45px] "} ${className}`}
      onClick={() => {
        onClick();
      }}
    >
      {choice}
    </button>
  );
};
export default ChoiceBtn;
