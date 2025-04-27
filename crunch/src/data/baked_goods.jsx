export function baked_goods() {
  const food = {
    garlic_bread: {
      name: "Cheesy Garlic Bread",
      desc: " A Warm cheesy garlic bread that you are sure to love!",
      cook_time: "30mins",
      prep_time: "5 mins",
      steps: () => {
        return (
          <div id="steps-card">
            <h4>Steps</h4>
            <ul>
              <li>add flour</li>
              <li>add yeast</li>
              <li>mix ingredients</li>
            </ul>
          </div>
        );
      },
      rec: () => {
        return (
          <div id="recipe-card">
            <h4>Recipe</h4>

            <ul>
              <li>Basil</li>
              <li>Garlic Powder</li>
              <li>Cheese</li>
            </ul>
          </div>
        );
      },
      price: "$5",
      user_likes: true,
      image:
        "https://thecozyapron.com/wp-content/uploads/2023/04/cheesy-garlic-bread_thecozyapron_1.jpg",
      image_alt: "picture of food",
    },
  };
  return food;
}
