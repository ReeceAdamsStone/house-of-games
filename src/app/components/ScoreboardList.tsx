// components/ScoreboardList.js
import { Reorder } from "framer-motion";
import { useState } from "react";

function ScoreboardList() {
  const [items, setItems] = useState(["Amy and Luke", "Holly and Anthony", "April and Ben"]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          <div
            style={{
              width: "500px",
              height: "150px",
              backgroundColor: "#be743d",
              margin: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "1.5rem", // Adjust the font size as needed
            }}
          >
            {item}
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default ScoreboardList;
