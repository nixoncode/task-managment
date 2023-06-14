export const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="flex flex-col w-full join join-vertical">
      <div className="flex justify-between join-item">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className="input input-bordered input-error join-item"
        placeholder={placeholder}
      />
      <span class="text-sm text-error join-item text-left">
        These credentials do not match our records
      </span>
    </div>
  );
};
