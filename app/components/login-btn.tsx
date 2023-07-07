import Link from 'next/link';
import { getServerSession } from 'next-auth';
import UserLogin from './user-login';
export default async function LoginPage() {
  const server = await getServerSession();
  //   console.log(server);
  return (
    <div>
      {server ? (
        <>
          <UserLogin
            userImage={server.user?.image}
            username={server.user?.name}
            email={server.user?.email}
          />
        </>
      ) : (
        <Link
          href={'/authentication'}
          className="bg-gray-200 font-serif px-3 py-2 rounded-sm hover:bg-gray-300"
        >
          Login
        </Link>
      )}
    </div>
  );
}
