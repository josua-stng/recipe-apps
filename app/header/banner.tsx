import Image from 'next/image';

export default function Banner() {
  return (
    <div className="md:flex mt-20 pb-24 justify-around items-center">
      <div className="font-sans text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-4xl mb-2">
          SELECTION FOR A{' '}
        </h1>
        <h1 className="text-xl md:text-2xl text-yellow-600 font-bold font-serif mb-3">
          NEW DAY
        </h1>
        <p className="text-base md:text-lg font-bold text-purple-500 font-sans">
          Delicious Recipe- any real ,any time , anywhere
        </p>
      </div>
      <div className="mt-10">
        <Image
        unoptimized
          width={250}
          height={250}
          alt="image"
          className="mx-auto"
          src={
            'https://pharmeasy.in/conditions/wp-content/uploads/2021/10/Recipes-for-diabetes-vector.png'
          }
        />
      </div>
    </div>
  );
}
