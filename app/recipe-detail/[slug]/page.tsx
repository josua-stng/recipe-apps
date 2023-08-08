import Search from '@/app/header/search';
import Image from 'next/image';
import parse from 'html-react-parser';
import { UtensilsCrossed } from 'lucide-react';
type PageProps={
  params:{slug:string}
}

export default async function RecipeDetail({ params: { slug } }: PageProps) {
  const response = await fetch(
    `${process.env.baseURL}/recipes/${slug}/information?apiKey=${process.env.APIKEY}`
  );
  const products = await response.json();

  return (
    <div>
      <Search />
      <div className="max-w-6xl mx-auto px-2 mt-10">
        <h1 className="text-center font-bold font-sans text-2xl mb-10 border-2">
          {products.title}
        </h1>
        <div className="grid md:flex  justify-center mx-auto items-center mb-10 max-w-5xl">
          <Image
            width={350}
            height={280}
            alt="recipes-image-product"
            src={products.image}
            className="rounded-lg mx-auto"
            style={{ objectFit: 'cover' }}
          />
          <div className="justify-center md:ml-4  ">
            <p className="max-w-md md:max-w-4xl text-xs md:text-sm mt-4 ">
              {parse(products.summary)}
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-400 max-w-xs md:max-w-xl lg:max-w-2xl grid p-5 mb-28  mx-auto rounded-md">
        <div className="flex justify-center mb-4 items-center">
          <UtensilsCrossed />
          <p className="pl-2 font-bold text-lg">Ingredients</p>
        </div>
        {products.extendedIngredients &&
          products.extendedIngredients.map((products: any) => {
            return (
              <div
                key={products.id}
                className="border-2 border-gray-300 mb-4 p-5 flex items-center rounded-md"
              >
                <Image
                  alt="recipes-image"
                  width={50}
                  height={50}
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${products.image}`}
                />
                <div className="pl-5 text-xs md:text-base">
                  <p className="mb-3 font-bold">{products.originalName}</p>
                  <p>{products.original}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
