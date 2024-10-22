import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import { addData, removedData } from "./localStorageData";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantCook, setWantCook] = useState([]);
  const [prepareCook, setPrepareCook] = useState([]);
  const [totaltime, setTotalTime] = useState(0);
  const [totalcalories, setTotalCalories] = useState(0);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    const isExist = wantCook.find(
      (item) => item.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      const totalRecipes = [...wantCook, recipe];
      setWantCook(totalRecipes);
      addData(recipe.recipe_id);
    } else {
      return alert(`${recipe.recipe_name} already exist`);
    }
  };

  const handlePrepareCook = (item) => {
    setPrepareCook([...prepareCook, item]);
  };

  const handleClearPrepCook = (id) => {
    const remaingPrepCook = wantCook.filter((item) => item.recipe_id !== id);
    setWantCook(remaingPrepCook);
    removedData(id);
  };

  const handleTotalTimeAndCalories = (time, calorie) => {
    setTotalTime(totaltime + time);
    setTotalCalories(totalcalories + calorie);
  };

  return (
    <div className="w-11/12 mx-auto my-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2 ">
      <div className="lg:col-span-2 grid lg:grid-cols-2 gap-6">
        {recipes.map((recipe, idx) => (
          <Recipe
            key={idx}
            handleWantToCook={handleWantToCook}
            recipe={recipe}
          ></Recipe>
        ))}
      </div>
      <div className="space-y-6 border rounded-xl w-full">
        <div>
          <h1 className="text-center text-2xl text-gray-800 font-semibold border-b-2 lg:m-8 pb-3">
            Want To Cook : {wantCook.length}{" "}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              {wantCook.map((item, idx) => (
                <tbody key={idx}>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>{idx + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <td>
                      <button
                        onClick={() => {
                          handlePrepareCook(item),
                            handleClearPrepCook(item.recipe_id),
                            handleTotalTimeAndCalories(
                              item.preparing_time,
                              item.calories
                            );
                        }}
                        className="px-2 py-1 bg-[#0BE58A] rounded-full"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl text-gray-800 font-semibold border-b-2 lg:m-8 pb-3">
            Currently Cooking : {prepareCook.length}{" "}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              {prepareCook.map((item, idx) => (
                <tbody key={idx}>
                  {/* row 1 */}
                  <tr className="hover">
                    <th>{idx + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                  </tr>
                </tbody>
              ))}
              <tfoot>
                <tr className="text-gray-800 font-semibold">
                  <th></th>
                  <th></th>
                  <th>
                    Total Time =<br /> {totaltime} Minutes
                  </th>
                  <th>
                    Total calories = <br /> {totalcalories} Calories
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
