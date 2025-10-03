import React from "react";
import PageRenderer from "./PageRenderer";
import "../styles/formStyles.css";

const FormRenderer = ({ packet, theme }) => {
  const themeStyle = {
    "--primary-color": theme?.primaryColor || "#007bff",
    "--font-family": theme?.fontFamily || "Arial",
    "--border-style": theme?.borderStyle || "solid",
  };

  return (
    <div className="form-container" style={themeStyle}>
      <h2>{packet.name}</h2>
      {packet.forms.map((form) => (
        <PageRenderer key={form.formId} form={form} />
      ))}
    </div>
  );
};

export default FormRenderer;
