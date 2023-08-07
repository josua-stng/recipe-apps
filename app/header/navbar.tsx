import Banner from './banner';
import Search from './search';

export default function Navbar() {
  return (
    <div
    className='bg-gradient-to-r from-gray-300 to-blue-400'
    >
      <Search/>
      <Banner />
    </div>
  );
}
