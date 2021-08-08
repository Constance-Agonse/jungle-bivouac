import React, { useEffect, useRef } from "react";

type Props = {
  imageUrls: string[];
}

export const CostumeSlider = ({ imageUrls }: Props) => {
  const ref = useRef(null);
  let xPosition = 0;

  useEffect(() => {
    let interval;
    if (ref.current) {
      const interval = setInterval(() => {
        ref.current.style = `transform: translate(${xPosition--}px, 0)`;

      }, 10);
    }

    return () => { clearInterval(interval) }
  }, []);

  const imageElements = imageUrls.map((imageUrl) => {
    return (
      <img key={imageUrl} src={imageUrl} />

    )
  });

  return (
    <div className="CostumeSlider">

      <div className="wrapper" ref={ref}>
        {imageElements}
        {imageElements}
        {imageElements}
        {imageElements}
        {imageElements}
        {imageElements}
        {imageElements}
      </div>
    </div>
  )
}