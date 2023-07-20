import Navbar from '@/app/header/navbar';
import Search from '@/app/header/search';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetail = async ({ params: { slug } }: any) => {
  const response = await fetch(
    `https://api.spoonacular.com/food/products/${slug}?apiKey=${process.env.APIKEY}`
  );
  const products = await response.json();
  return (
    <div>
      <Search />
      <Link
        href={'/'}
        className="bg-gray-300 px-5 py-1.5 mx-10 my-5 inline-block hover:bg-gray-400 rounded-md"
      >
        Back
      </Link>
      <div className="max-w-5xl  mx-auto flex">
        <Image
          width={500}
          height={0}
          alt="image product-detail"
          src={products.image}
        />
        <div className="ml-10 mt-9">
          <p className="font-bold text-2xl font-sans">{products.title}</p>
          <ul className="mt-5 list-disc">
            <p className="font-sans font-semibold text-lg">
              Type: {products.breadcrumbs[1]}
            </p>
            <li className="font-mono text-base">
              Percent protein:{' '}
              {products.nutrition.caloricBreakdown.percentProtein}
            </li>
            <li className="font-mono text-base">
              Percent Fat: {products.nutrition.caloricBreakdown.percentFat}
            </li>
            <li className="font-mono text-base">
              Percent Carbs: {products.nutrition.caloricBreakdown.percentCarbs}
            </li>
            <li className="font-mono text-base">
              Calories: {products.nutrition.calories}
            </li>
            <li className="font-mono text-base">
              Fat: {products.nutrition.fat}
            </li>
            <li className="font-mono text-base">
              Protein: {products.nutrition.protein}
            </li>
            <li className="font-mono text-base">
              Carbs: {products.nutrition.carbs}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
