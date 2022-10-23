import { Star, StarHalf } from "@mui/icons-material";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <Star className="star" key={index} />
      ))}
      {!Number.isInteger(rating) && (
        <StarHalf className="star-half-alt" />
      )}
    </div>
  );
};

export default Rating;
