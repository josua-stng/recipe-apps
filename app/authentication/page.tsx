'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Authentication() {
  return (
    <div>
      <Link
        href={'/'}
        className="border-2 border-gray-600 inline-block px-4 py-1 rounded-md bg-gray-200 m-5 hover:bg-gray-300"
      >
        Back
      </Link>
      <div className="flex justify-center items-center h-[60vh]">
        <div className="border-2 items-center border-gray-300 rounded-md w-max max-w-lg">
          <h1 className="text-center pt-4 font-bold text-xl font-sans">
            Login
          </h1>
          <div className="px-20 py-8">
            <div
              className="flex mb-5 bg-gray-800 text-white px-14 py-2 rounded-md cursor-pointer hover:bg-gray-700"
              onClick={() =>
                signIn('github', { callbackUrl: 'http://localhost:3000/' })
              }
            >
              <p className="mr-2">Github</p>
              <button>
                <FaGithub className="w-5 h-5" />
              </button>
            </div>
            <div className="flex mb-5 bg-gray-600 text-white px-14 py-2 rounded-md cursor-pointer hover:bg-gray-500"
             onClick={() =>
                signIn('google', { callbackUrl: 'http://localhost:3000/' })
              }
            >
              <p className="mr-2">Google</p>
              <button>
                <FcGoogle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
