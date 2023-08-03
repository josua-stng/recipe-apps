import SwipperFood from './swipper';
import RandomRecipes from '../components/random-recipes';
import Dessert from '../components/dessert.recipe';
import {CakeSlice, Cookie, Leaf } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto mb-32 p-5">
        <div className="flex items-center ml-3 mb-5">
          <Cookie className='w-10 h-10 bg-gray-500 text-white px-2 rounded-md'/>
          <div className='ml-3'>
            <h1 className="font-bold text-xl text-center font-sans">
              Random Recipe
            </h1>
            <p>Try random recipe</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {randomRecipes &&
            randomRecipes.recipes.map((recipes: any) => {
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
          <Leaf className='w-10 h-10 bg-gray-500 text-white px-2 rounded-md'/>
          <div className='ml-3'>
            <h1 className="font-bold text-xl text-center font-sans">
              The Vegetarian Food
            </h1>
            <p>Better for diet</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
          {vegetarianRecipes &&
            vegetarianRecipes.results.map((recipes: any) => {
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
          <CakeSlice className='w-10 h-10 bg-gray-500 text-white px-2 rounded-md'/>
          <div className='ml-3'>
            <h1 className="font-bold text-xl text-center font-sans">
              The Dessert Food
            </h1>
            <p>Nice Dessert</p>
          </div>
        </div>
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
