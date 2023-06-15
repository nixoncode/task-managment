export const Input = ({
  label,
  type,
  id,
  placeholder,
  error,
  onChange = () => {},
  value,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="pr-2 pl-2 font-medium text-gray-600 capitalize"
        >
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className={`input input-bordered ${
          error ? "input-error" : "input-primary"
        }`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <span className="text-sm text-error text-left">{error}</span>}
    </div>
  );
};
