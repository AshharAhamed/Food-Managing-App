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
      <p>{title}</p>
      <button>Add to Favourite</button>
    </div>
  );
};

export default RecipeItem;
