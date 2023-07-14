import DataSwipper from './carousel/data';
import Navbar from './header/navbar';

export default async function Home() {
  // https://api.spoonacular.com/food/products/search?query=pizza&number=20&process.env.APIKEY => mencari produk berdasarkan querry pizza dan number untuk menunjukkan berapa data yg akan muncul

  // https://api.spoonacular.com/food/products/192386?process.env.APIKEY => product detail

  // const getData = async () => {
  //   const res = await fetch(
  //     'https://api.spoonacular.com/recipes/716429/information?apiKey=013ce5402fe84f44a62e3d3bbee25cbe&includeNutrition=true'
  //   );
  //   if (!res.ok) {
  //     throw new Error('Failed fetch data');
  //   }
  //   return res.json();
  // };
  // const data = await getData();
  return (
    <div>
      <Navbar />
      <DataSwipper/>
    </div>
  );
}
