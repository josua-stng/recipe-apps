import Image from 'next/image';
import Link from 'next/link';

type VegetarianFood = {
  id: string;
  title: string;
  image: string;
};

export default function VegetarianRecipe({ title, image, id }: VegetarianFood) {
  return (
    <Link href={`/vegetarian-detail/${id}`} className="hover:shadow-2x">
      <div className="bg-white rounded-lg shadow-xl cursor-pointer md:max-w-sm md:mx-3 group max-w-max m-5">
        <Image
            unoptimized
          src={image}
          alt="random-recipe-image"
          width={500}
          height={250}
          className="rounded-md justify-center group-hover:scale-105"
          style={{ objectFit: 'cover' }}
        />
        <div className="p-5 pt-7 pb-7">
          <p className="font-serif font-bold  text-ellipsis line-clamp-1">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
