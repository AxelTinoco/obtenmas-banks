const Message = ({ error, success, children }) => {
  let textColorClass = "text-black";

  if (error) {
    textColorClass = "text-red-500";
  } else if (success) {
    textColorClass = "text-green-300";
  }

  return (
    <div
      className={"text-sm my-3 transition duration-200 ease-linear font-sans"}
    >
      <p className={`${textColorClass}`}>{children}</p>
    </div>
  );
};

export default Message;
