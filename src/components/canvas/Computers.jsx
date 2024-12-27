import React, { useEffect } from "react";

const Computers = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <spline-viewer url="https://prod.spline.design/AmBis8JxDSKSYXCy/scene.splinecode"></spline-viewer>
  );
};

export default Computers;
