import Image from 'next/image';

import Link from 'next/link';
import SwipperFood from './swipper';

export default async function DataSwipper() {
  const getData = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=burger&number=30&apiKey=${process.env.APIKEY}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const data = await getData();
  const slide = data.menuItems
    ? data.menuItems.map((item: any) => item.image)
    : [];
  const titles = data.menuItems
    ? data.menuItems.map((item: any) => item.title)
    : [];
  const id = data.menuItems ? data.menuItems.map((item: any) => item.id) : [];

  return (
    <div>
      <SwipperFood slides={slide} title={titles} productId={id} />
      {data.menuItems &&
        data.menuItems.map((datas: any) => {
          return (
            <Link
              href={`/product-detail/${datas.id}`}
              key={datas.id}
              className="flex"
            >
              <div>
                <Image
                  width={100}
                  height={100}
                  alt="image-data"
                  src={datas.image}
                  //slide={datas.id}
                />
              </div>
            </Link>
          );
        })}

      <p>Data swiper</p>
      {/* 
      {data.map((datas)=>{
        return(
           <Biasa
        key={datas.id}
        image={datas.image}
        title={datas.title}      
      /> 
        )
      })}
     */}
    </div>
  );
}
