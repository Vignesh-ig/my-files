import React, { useRef, useEffect } from "react";
import SignaturePad from "signature_pad";

const SignatureField = ({ id, register }) => {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      signaturePadRef.current = new SignaturePad(canvasRef.current);
    }
  }, []);

  const clearSignature = () => {
    signaturePadRef.current.clear();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={300}
        height={100}
        className="signature-pad"
      />
      <input
        type="hidden"
        {...register(id)}
        value={signaturePadRef.current?.toDataURL() || ""}
      />
      <button type="button" onClick={clearSignature}>
        Clear
      </button>
    </div>
  );
};

export default SignatureField;
