const InputField = ({ placeholder, type, onChange, required }) => {
  return (
    <div className="inp-cont">
      <input
        type={type}
        className="form-inp"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
