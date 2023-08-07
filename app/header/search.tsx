import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import LoginPage from '../components/login-btn';
import Link from 'next/link';
import InputSearchProducts from './searchProduct';
export default function Search() {
  return (
    <div className="flex items-center border-2 border-gray-300 p-3 ">
      <Link href={'/'}>
        <BuildingStorefrontIcon className="w-8 h-8" />
      </Link>
      <InputSearchProducts />
      <LoginPage />
    </div>
  );
}
