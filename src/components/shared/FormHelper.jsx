export const InputField = ({ label, name, type = "text", form, inputStyle, labelStyle, required = false }) => {
  const error = form.formState.errors[name];
  return (
    <div>
      <label className={labelStyle}>
        {label} {required && "*"}
      </label>
      <input
        className={`${inputStyle} ${error ? "border-red-500" : ""}`}
        type={type}
        {...form.register(name)}
      />
      {error && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  );
};
