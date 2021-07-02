import React from "react";
import DragCard from "./dragcard";
export default function ListView(props) {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <DragCard></DragCard>
      ))}
    </>
  );
}
