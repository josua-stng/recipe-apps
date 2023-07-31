import Image from 'next/image';
import Link from 'next/link';

export default function RandomRecipes({ title, image, summary, id }: any) {
  return (
    <Link href={`/recipe-detail/${id}`} className="hover:shadow-2x">
      <div className="bg-white rounded-lg shadow-xl cursor-pointer hover:shadow-2xl max-w-xs md:max-w-sm md:mx-3">
        <Image
          src={image}
          alt="random-recipe-image"
          width={500}
          height={250}
          className="rounded-md justify-center"
          style={{ objectFit: 'cover' }}
        />
        <div className="p-5">
          <p className="font-serif font-bold text-clip overflow-hidden ...">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
