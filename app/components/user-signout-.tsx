'use client';
import { signOut } from 'next-auth/react';

export default function UserSignOut({ username, email }: any) {
  return (
    <div className="absolute top-[63px] z-10 right-16 border-2 border-gray-200 p-4 rounded-md">
      <p className="text-sm font-serif mb-1 font-bold">{username}</p>
      <p className="text-sm font-serif mb-2">{email}</p>
      <div className="bg-red-200 px-2 py-1 w-max">
        <button
          onClick={() => signOut()}
          className="text-red-500 font-bold hover:text-red-600 cursor-pointer"
        >
          SignOut
        </button>
      </div>
    </div>
  );
}
