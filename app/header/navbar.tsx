import {
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import LoginPage from '../components/login-btn';
import Banner from './banner';

export default function Navbar() {
  return (
    <div 
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210710/original/pngtree-yogurt-poster-banner-picture-image_1047396.jpg')",
        height: 'auto',
        objectFit: 'cover',
     
      }}
    >
      <div className="flex items-center border-2 border-gray-500 p-3">
        <BuildingStorefrontIcon className="w-8 h-8 text-white" />
        <div className="w-full max-w-8xl relative mr-10">
          <input
            type="text"
            placeholder="search recipe"
            className="border-2 border-gray-200 w-full max-w-8xl ml-5 h-9 px-2 rounded-sm focus:border-2 focus:border-gray-200"
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute top-1.5 right-1" />
        </div>
        <LoginPage />
      </div>
        <Banner/>
    </div>
  );
}
