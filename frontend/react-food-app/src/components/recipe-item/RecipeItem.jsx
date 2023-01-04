import React from "react";
import "./style.css";

const RecipeItem = (props) => {
  //   console.log(props);
  const { id, title, image } = props.item;
  console.log(id);
  console.log(title);
  console.log(image);

  return (
    <div key={id} className="recipe-item">
      <div>
        <img src={image} alt="" />
      </div>

      <tr>{id}</tr>
      <p>{title}</p>
    </div>
  );
};

export default RecipeItem;
