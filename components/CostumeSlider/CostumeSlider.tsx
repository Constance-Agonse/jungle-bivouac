import React, { useEffect, useRef } from "react";

type Props = {
  imageUrls: string[];
  speed?: 'low' | 'medium' | 'high';
}

export const CostumeSlider = ({ imageUrls, speed = 'medium' }: Props) => {
  const ref = useRef(null);
  const itemWidth = 70;
  const rowWidth = itemWidth * imageUrls.length;

  let speedMs = 200;
  switch (speed) {
    case "high":
      speedMs = 10;
      break;
    case "medium":
      speedMs = 30;
      break;
    case "low":
    default:
      speedMs = 200;
      break;
  }

  const runAnimation = () => {
    let xPosition = 0;
    let interval;
    if (ref.current) {
      const interval = setInterval(() => {
        if (Math.abs(xPosition) >= rowWidth) {
          xPosition = 0;
        }
        ref.current.style = `transform: translate(${xPosition--}px, 0)`;
      }, speedMs);
    }
    return () => { clearInterval(interval) }
  }

  useEffect(() => {
    // runAnimation();
  }, []);

  const imageElements = imageUrls.map((imageUrl) => {
    return (
      <div className="CostumeSlider__image-item" style={{ width: itemWidth }}>
        <img key={imageUrl} src={imageUrl} />
      </div>
    )
  });

  return (
    <div className="CostumeSlider">

      <div className="wrapper" ref={ref}>
        {imageElements}
        {imageElements}
        {imageElements}
        {imageElements}
      </div>
    </div>
  )
}
