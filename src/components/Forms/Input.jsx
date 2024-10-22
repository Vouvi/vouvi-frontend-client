import PropTypes from "prop-types";

function Input({
  type = "text",
  max,
  min,
  maxLength,
  value,
  onChange,
  name = "",
  id = "",
  isRequired = false,
  isReadOnly = false,
}) {
  const defaultChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      className={`bg-black bg-opacity-15 p-1 w-full h-fit border-b-4 ${
        isReadOnly === true
          ? "border-b-black"
          : "border-b-secondary-200 hover:border-b-primary-200 focus:border-b-primary-200"
      } focus:outline-none outline-primary-200 transition-all text-base`}
      type={type}
      max={max || ""}
      min={min || ""}
      maxLength={maxLength || ""}
      name={name}
      id={id}
      value={value || ""}
      onChange={onChange || ((e) => defaultChange(e))}
      required={isRequired}
      readOnly={isReadOnly}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  maxLength: PropTypes.number,
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  isReadOnly: PropTypes.bool,
};

export default Input;