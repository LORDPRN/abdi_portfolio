import React, { Suspense, lazy } from 'react';

// Importa el componente Spline usando lazy
const LazySpline = lazy(() => import('@splinetool/react-spline'));

const Computers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Renderiza el componente LazySpline */}
      <LazySpline scene="https://prod.spline.design/AmBis8JxDSKSYXCy/scene.splinecode" />
    </Suspense>
  );
}

export default Computers;
