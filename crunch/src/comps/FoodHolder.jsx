import "../css/FoodHolder.css";
import { baked_goods } from "../data/baked_goods";

export default function FoodHolder() {
  let rec = baked_goods();

  return (
    <>
      <div className="mainFoodHolderDiv">
        <div className="FoodHolderGridItem">
          <div id="food-name">
            <h3 id="rec_name">{rec.garlic_bread.name}</h3>
          </div>

          <img
            id="food_image"
            src={rec.garlic_bread.image}
            alt={rec.garlic_bread.image_alt}
          />
          <div id="food-desc">
            <p>{rec.garlic_bread.desc}</p>
          </div>
          <div id="rec_steps">
            {<rec.garlic_bread.steps />}
            {<rec.garlic_bread.rec />}
          </div>
        </div>
      </div>
    </>
  );
}
