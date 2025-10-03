import React from "react";
import FieldRenderer from "./FieldRenderer";

const PageRenderer = ({ page, register, errors }) => {
  return (
    <div className="page">
      <h3>{page.pageTitle}</h3>
      {page.fields &&
        page.fields.map((field) => (
          <FieldRenderer
            key={field.id}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
      {page.insuranceDetails &&
        page.insuranceDetails.map((section, index) => (
          <div key={`insurance-${index}`} className="insurance-section">
            <h4>{section.insuranceTitle}</h4>
            {section.fields.map((field) => (
              <FieldRenderer
                key={field.id}
                field={field}
                register={register}
                errors={errors}
              />
            ))}
          </div>
        ))}

      {page.pharmacyDetails &&
        page.pharmacyDetails.map((section, index) => (
          <div key={`pharmacy-${index}`} className="pharmacy-section">
            {section.fields.map((field) => (
              <FieldRenderer
                key={field.id}
                field={field}
                register={register}
                errors={errors}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default PageRenderer;
