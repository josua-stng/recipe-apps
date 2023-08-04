import DataSwipper from './carousel/data';
import Navbar from './header/navbar';

export default async function Home() {
 return (
    <div>
      <Navbar />
      <DataSwipper/>
    </div>
  );
}
