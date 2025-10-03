import React from "react";
import FormRenderer from "./FormRenderer";

const FormPacketRenderer = ({ packet }) => {
  return (
    <div className="form-packet">
      <h1>{packet.name}</h1>
      {packet.forms.map((form) => (
        <FormRenderer key={form.formId} form={form} />
      ))}
    </div>
  );
};

export default FormPacketRenderer;
