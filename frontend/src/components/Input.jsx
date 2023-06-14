export const Input = ({
  label,
  type,
  id,
  placeholder,
  hasError,
  error,
  onChange,
  value,
}) => {
  function handleChange(event) {
    console.log(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        {/* <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label> */}
      </div>
      <input
        id={id}
        type={type}
        className={`input input-bordered ${
          hasError ? "input-error" : "input-primary"
        }`}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {hasError && (
        <span className="text-sm text-error text-left">{error}</span>
      )}
    </div>
  );
};
