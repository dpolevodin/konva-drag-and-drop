import React, {FC} from 'react';
import { Stage, Layer, Star, Text, Image } from 'react-konva';
import useImage from "use-image";

// function generateShapes() {
//   return [...Array(10)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     rotation: Math.random() * 180,
//     isDragging: false,
//   }));
// }
//
// const INITIAL_STATE = generateShapes();

export const Layout: FC = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  // const [stars, setStars] = React.useState(INITIAL_STATE);
  const [isImageDragging, setIsImageDragging] = React.useState(false);

  const handleDragImage = () => {
    setIsImageDragging(!isImageDragging)
  };
  //
  // const handleDragStart = (e: any) => {
  //   const id = e.target.id();
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: star.id === id,
  //       };
  //     })
  //   );
  // };
  //
  // const handleDragEnd = (e: any) => {
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: false,
  //       };
  //     })
  //   );
  // };


  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image
          image={image}
          draggable={true}
          scaleX={isImageDragging ? 1.1 : 1}
          scaleY={isImageDragging ? 1.1 : 1}
          shadowOffsetX={isImageDragging ? 10 : 5}
          shadowOffsetY={isImageDragging ? 10 : 5}
          onDragStart={handleDragImage}
          onDragEnd={handleDragImage}
          shadowBlur={10}
          shadowOpacity={0.6}
        />
        <Text text="Try to drag a lion" />
        {/*{stars.map((star) => (*/}
        {/*  <Star*/}
        {/*    key={star.id}*/}
        {/*    id={star.id}*/}
        {/*    x={star.x}*/}
        {/*    y={star.y}*/}
        {/*    numPoints={5}*/}
        {/*    innerRadius={20}*/}
        {/*    outerRadius={40}*/}
        {/*    fill="#89b717"*/}
        {/*    opacity={0.8}*/}
        {/*    draggable*/}
        {/*    rotation={star.rotation}*/}
        {/*    shadowColor="black"*/}
        {/*    shadowBlur={10}*/}
        {/*    shadowOpacity={0.6}*/}
        {/*    shadowOffsetX={star.isDragging ? 10 : 5}*/}
        {/*    shadowOffsetY={star.isDragging ? 10 : 5}*/}
        {/*    scaleX={star.isDragging ? 1.2 : 1}*/}
        {/*    scaleY={star.isDragging ? 1.2 : 1}*/}
        {/*    onDragStart={handleDragStart}*/}
        {/*    onDragEnd={handleDragEnd}*/}
        {/*  />*/}
        {/*))}*/}
      </Layer>
    </Stage>
  );
}