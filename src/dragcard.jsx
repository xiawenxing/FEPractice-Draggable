import React from "react";
import { Card } from "antd";

export default function DragCard(props) {
  function onDrag() {}
  return (
    <Card
      className="draggable-card"
      draggable
      onDrag={onDrag}
      style={{ width: "200px", height: "150px", backgroundColor: "pink" }}
    >
      xwx
    </Card>
  );
}
