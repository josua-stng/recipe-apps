import Search from '@/app/header/search';
import Image from 'next/image';
import parse from 'html-react-parser';

export default async function RecipeDetail({ params: { slug } }: any) {
  const response = await fetch(
    `${process.env.baseURL}/recipes/${slug}/information?apiKey=${process.env.APIKEY}`
  );
  const products = await response.json();

  return (
    <div>
      <Search />
      <div className='border-2 border-gray-200 max-w-6xl mx-auto px-2 mt-10'>
      <h1 className="text-center font-bold font-sans text-2xl  mb-10">{products.title}</h1>
      <div className="flex justify-center mx-auto items-center mb-10">
        <Image
          width={430}
          height={400}
          alt="recipes-image-product"
          src={products.image}
          className='rounded-lg'
          style={{ objectFit: 'cover' }}
        />
        <div className="ml-5 ">
         
          <p className="mt-2 max-w-2xl ">{parse(products.summary)}</p>
        </div>
      </div>
      </div>
      {products.extendedIngredients &&
        products.extendedIngredients.map((products: any) => {
          return (
            <div key={products.id}>
              <Image
                alt="recipes-image"
                width={100}
                height={100}
                src={`https://spoonacular.com/cdn/ingredients_100x100/${products.image}`}
              />
              <p>{products.original}</p>
            </div>
          );
        })}
    </div>
  );
}
