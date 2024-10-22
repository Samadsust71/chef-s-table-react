import PropTypes from "prop-types";
const Recipe = ({ recipe,handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div>
      <div className="rounded-xl space-y-6 bg-base-100 border p-6">
        <figure>
          <img
            src={recipe_image}
            alt="food recipe"
            className="rounded-xl h-[200px] object-cover w-full"
          />
        </figure>
        <div className=" space-y-6">
          <h2 className="text-xl text-gray-800 font-semibold">{recipe_name}</h2>
          <p className="text-gray-400">{short_description}</p>
          <hr />

          <div>
            <h3 className="text-[18px] font-medium text-gray-800">
              Ingradients : {ingredients.length}
            </h3>
            <ul className="list-disc pl-6">
              {ingredients.map((ingrad, idx) => (
                <li key={idx}>{ingrad}</li>
              ))}
            </ul>
          </div>
          <hr />

          <div className="flex gap-6 items-center">
            <div className="flex gap-1 items-center">
            <i className="fa-regular fa-clock text-xl"></i>
              <p>{preparing_time} Minutes</p>
            </div>
            <div className="flex gap-1 items-center">
            <i className="fa-solid fa-fire-flame-curved text-xl"></i>
              <p>{calories} Calories</p>
            </div>
          </div>

          <div className="card-actions">
            <button onClick={()=>{handleWantToCook(recipe)}} className="btn bg-[#0BE58A] rounded-full">
              Want To Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
Recipe.propTypes = {
  recipe: PropTypes.object,
  recipe_image: PropTypes.string,
  recipe_id: PropTypes.string,
  recipe_name: PropTypes.string,
  short_description: PropTypes.string,
  ingredients: PropTypes.array,
  preparing_time: PropTypes.number,
  calories: PropTypes.number,
  handleWantToCook:PropTypes.func
};
