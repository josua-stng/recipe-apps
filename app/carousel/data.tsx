import SwipperFood from './swipper';
import Dessert from '../components/dessert.recipe';
import { CakeSlice, Cookie, Leaf } from 'lucide-react';
import Footer from '../components/footer';
type RandomRecipe={
  id:string,
  image:string,
  title:string
}

type DessertRecipe={
  id:string,
  image:string,
  title:string
}

type VegetarianRecipe={
  id:string,
  image:string,
  title:string
}


export default async function DataSwipper() {
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

  const vegetarianRecipe = async () => {
    const res = await fetch(
      `${process.env.baseURL}/recipes/complexSearch?apiKey=${process.env.APIKEY}&vegetarian=true&number=9`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const randomRecipes = await randomRecipe();
  const desertRecipes = await dessertRecipe();
  const vegetarianRecipes = await vegetarianRecipe();

  return (
    <div>
      <SwipperFood />
      <div className="max-w-7xl mx-auto mb-32 p-5">
        <div className="flex items-center ml-3 mb-5">
          <Cookie className="w-10 h-10 bg-gray-500 text-white px-2 rounded-md" />
          <div className="ml-3">
            <h1 className="font-bold text-xl text-center font-sans">
              Random Recipe
            </h1>
            <p>Try random recipe</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {randomRecipes &&
            randomRecipes.recipes.map((recipes: RandomRecipe) => {
              return (
                <div key={recipes.id} className="mx-auto">
                  <Dessert
                    id={recipes.id}
                    image={recipes.image}
                    title={recipes.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-32 p-5">
        <div className="flex items-center ml-3 mb-5">
          <Leaf className="w-10 h-10 bg-gray-500 text-white px-2 rounded-md" />
          <div className="ml-3">
            <h1 className="font-bold text-xl text-center font-sans">
              The Vegetarian Food
            </h1>
            <p>Better for diet</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {vegetarianRecipes &&
            vegetarianRecipes.results.map((recipes: VegetarianRecipe) => {
              return (
                <div key={recipes.id} className="mx-auto">
                  <Dessert
                    id={recipes.id}
                    image={recipes.image}
                    title={recipes.title}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-32 p-5">
        <div className="flex items-center ml-3 mb-5">
          <CakeSlice className="w-10 h-10 bg-gray-500 text-white px-2 rounded-md" />
          <div className="ml-3">
            <h1 className="font-bold text-xl text-center font-sans">
              The Dessert Food
            </h1>
            <p>Nice Dessert</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {desertRecipes &&
            desertRecipes.results.map((recipes: DessertRecipe) => {
              return (
                <div key={recipes.id} className="mx-auto">
                  <Dessert
                    id={recipes.id}
                    image={recipes.image}
                    title={recipes.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
