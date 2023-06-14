import React, { useRef, useEffect } from 'react';
import './Slider.scss';

export const Slider = () => {
  // <div className="slider">
  //   slider
  // </div>
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const animation = container.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }],
      {
        duration: 5000, // Duration of the animation in milliseconds
        iterations: Infinity, // Repeat the animation infinitely
        easing: 'linear', // Linear easing for smooth scrolling
      },
    );

    // Pause the animation when the component unmounts
    return () => {
      animation.pause();
    };
  }, []);

  return (
    <div className="slider">
      <div
        className="image"
        ref={containerRef}
        style={{ backgroundColor: 'brown' }}
      />
      <div
        className="image"
        ref={containerRef}
        style={{ backgroundColor: 'red' }}
      />
      {/* <div
        className="image"
        style={{ backgroundColor: 'blue' }}
        ref={containerRef}
      /> */}
      {/* <div
        className="image"
        style={{ background: 'yellow' }}
        ref={containerRef}
      /> */}
    </div>
  );
};
