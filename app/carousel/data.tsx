import SwipperFood from './swipper';
import RandomRecipes from '../components/random-recipes';
import Dessert from '../components/dessert.recipe';

export default async function DataSwipper() {
  const informationProducts = async () => {
    const res = await fetch(
      `${process.env.baseURL}/food/menuItems/search?query=burger&number=30&apiKey=${process.env.APIKEY}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const randomRecipe = async () => {
    const res = await fetch(
      `${process.env.baseURL}/recipes/random?apiKey=${process.env.APIKEY}&number=9`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const dessertRecipe = async () => {
    const res = await fetch(
      `${process.env.baseURL}/recipes/complexSearch?query=dessert&apiKey=${process.env.APIKEY}&number=9`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const randomRecipes = await randomRecipe();
  const desertRecipes = await dessertRecipe();
  const dataInformation = await informationProducts();
  const slide = dataInformation.menuItems
    ? dataInformation.menuItems.map((item: any) => item.image)
    : [];
  const titles = dataInformation.menuItems
    ? dataInformation.menuItems.map((item: any) => item.title)
    : [];
  const id = dataInformation.menuItems
    ? dataInformation.menuItems.map((item: any) => item.id)
    : [];

  return (
    <div>
      <SwipperFood slides={slide} title={titles} productId={id} />
      <h1 className="font-bold text-2xl text-center mt-20 mb-10 font-sans">
        Random Recipes Food
      </h1>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {randomRecipes &&
            randomRecipes.recipes.map((recipes: any) => {
              return (
                <div key={recipes.id} className="mx-auto">
                  <RandomRecipes
                    id={recipes.id}
                    title={recipes.title}
                    image={recipes.image}
                    summary={recipes.summary}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <h1 className="font-bold text-2xl text-center mt-20 mb-10 font-sans">
        Dessert Land
      </h1>
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {desertRecipes &&
            desertRecipes.results.map((recipes: any) => {
              return (
                <div key={recipes.id} className="mx-auto">
                  <Dessert
                    id={recipes.id}
                    image={recipes.image}
                    title={recipes.title}
                  />
                  {/* <RandomRecipes
                    id={recipes.id}
                    title={recipes.title}
                    image={recipes.image}
                    summary={recipes.summary}
                  /> */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
