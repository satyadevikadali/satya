import React from "react";

const RecipeTag = ({ cuisines }) => {
  return (
    <p className="recipe-tags">
      {cuisines.map((item, index) => {
        return (
          <span key={index} className="recipe-tag">
            {item}
          </span>
        );
      })}
    </p>
  );
};

export default RecipeTag;
