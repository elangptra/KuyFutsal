import Input from "./input";
const InputForm = (props) => {
  const { name, type, placeholder, onChange } = props;
  return (
    <div className="mb-6 rounded-md bg-none " style={{ border: "1px solid #111" }}>
      <Input name={name} type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputForm;
