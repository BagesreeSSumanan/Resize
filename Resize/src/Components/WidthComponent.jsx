import React, { useState, useEffect } from 'react';
function WidthComponent(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
   window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <div style={{ width: width }}>
      Window width: {width}
    </div>
  );
}
export default WidthComponent