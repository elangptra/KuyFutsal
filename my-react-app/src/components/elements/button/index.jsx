const Button = (props) => {
  const {
    type = "button",
    onClick = () => {},
    children = "...",
    classname,
  } = props;
  return (
    <>
      <button
        className={`md:h-10 h-8 md:px-6 px-4 font-semibold rounded-md ${classname} `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
