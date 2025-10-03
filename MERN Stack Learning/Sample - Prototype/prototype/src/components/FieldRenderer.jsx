import React from "react";
import SignatureField from "./SignatureField";

const FieldRenderer = ({ field, register, errors }) => {
  const { id, label, type, options, placeholder } = field;

  switch (type) {
    case "text":
      return (
        <div className="form-group">
          <label>{label}</label>
          <input {...register(id)} placeholder={placeholder} />
          {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
      );
    case "radio":
      return (
        <div className="form-group">
          <label>{label}</label>
          {options.map((option) => (
            <label key={option}>
              <input type="radio" value={option} {...register(id)} />
              {option}
            </label>
          ))}
          {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
      );
    case "checkbox":
      return (
        <div className="form-group">
          <label>{label}</label>
          {options.map((option) => (
            <label key={option}>
              <input type="checkbox" value={option} {...register(id)} />
              {option}
            </label>
          ))}
          {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
      );
    case "dropdown":
      return (
        <div className="form-group">
          <label>{label}</label>
          <select {...register(id)}>
            <option value="">Select</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
      );
    case "signature":
      return (
        <div className="form-group">
          <label>{label}</label>
          <SignatureField id={id} register={register} />
          {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
      );
    default:
      return null;
  }
};

export default FieldRenderer;
