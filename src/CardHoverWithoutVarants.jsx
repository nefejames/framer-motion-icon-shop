import React from "react";
import { CardBox, IconBox } from "./Styles";

const IconVariants = {
  beforeHover: {
    opacity: 0,
    y: -50,
  },
  onHover: {
    opacity: 1,
    y: 0,
    scale: 1.5,
    transition: {
      type: "tween",
    },
  },
};

const Card = ({ icon }) => {
  console.log(icon);
  return (
    <CardBox whileHover={{ scale: 1.1 }}>
      <IconBox
        initial="beforeHover"
        variants={IconVariants}
        whileHover="onHover"
      >
        {icon}
      </IconBox>
    </CardBox>
  );
};

export default Card;


//in this one when the same variants aren't used, we have to hover directly over the icons before the hover effect takes place. However, if variants are used, framer links the hover transition effects for us such that when we hover over the parent (CardBox), the child hover effect gets triggered also. Always use variants. Use this to explain 2 types of hovers, what I call DEPENDENT AND INDEPENDENT ones  