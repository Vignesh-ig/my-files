import * as yup from "yup";

export const generateYupSchema = (fields) => {
  const shape = {};

  fields.forEach((field) => {
    if (field.required) {
      switch (field.type) {
        case "text":
        case "dropdown":
        case "radio":
          shape[field.id] = yup.string().required(`${field.label} is required`);
          break;
        case "checkbox":
          shape[field.id] = yup
            .array()
            .min(1, `Please select at least one option for ${field.label}`);
          break;
        case "signature":
          shape[field.id] = yup.string().required(`${field.label} is required`);
          break;
        default:
          break;
      }
    }
  });

  return yup.object().shape(shape);
};
