import { Donut } from 'lucide-react';
import DataSearch from './dataSearch';
import Search from '../header/search';

type SearchPageProps = {
  searchParams: { q?: string };
};

export default async function SearchDataProduct({
  searchParams,
}: SearchPageProps) {
  const productData = async () => {
    const res = await fetch(
      `${process.env.baseURL}/recipes/complexSearch?apiKey=${process.env.APIKEY}&number=200`
    );
    if (!res.ok) {
      return new Error(`Failed to fetch data`);
    }
    return res.json();
  };
  const dataProduct = await productData();
  const query = searchParams.q?.toLowerCase();
  const filterData = dataProduct.results.filter((dataProducts: any) => {
    return dataProducts.title.toLowerCase().includes(query);
  });

  const queryNotFound = filterData.length === 0;

  return (
    <div>
      <Search />
      {queryNotFound ? (
        <h1 className="font-mono font-bold text-center text-3xl mt-36">
          Recipes not found
        </h1>
      ) : (
        <div className="max-w-7xl mx-auto mb-32 p-5">
          <div className="flex items-center ml-3 mb-5">
            <Donut className="w-10 h-10 bg-gray-500 text-white px-2 rounded-md" />
            <div className="ml-3">
              <h1 className="font-bold text-xl text-center font-sans">
                All Recipes
              </h1>
              <p>Recipe for you</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2  lg:grid-cols-3 justify-center gap-10">
            {filterData &&
              filterData.map((recipes: any) => {
                return (
                  <div key={recipes.id} className="mx-auto">
                    <DataSearch
                      id={recipes.id}
                      image={recipes.image}
                      title={recipes.title}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
