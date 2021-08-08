import React, { useEffect, useRef } from "react";

type Props = {
  imageUrls: string[];
}

export const CostumeSlider = ({ imageUrls }: Props) => {
  const ref = useRef(null);
  const itemWidth = 70;
  const rowWidth = itemWidth * imageUrls.length;

  const runAnimation = () => {
    let xPosition = 0;
    let interval;
    if (ref.current) {
      const interval = setInterval(() => {
        if (Math.abs(xPosition) >= rowWidth) {
          xPosition = 0;
        }
        ref.current.style = `transform: translate(${xPosition--}px, 0)`;
      }, 10);
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
