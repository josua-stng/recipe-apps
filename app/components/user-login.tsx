'use client';
import Image from 'next/image';
import { useState } from 'react';
import UserSignOut from './user-signout-';

export default function UserLogin({ userImage, username, email }: any) {
  const [isUserAction, setIsUserAction] = useState(false);

  const userAction = () => {
    setIsUserAction((value) => !value);
  };
  return (
    <div>
      <div className="cursor-pointer" onClick={userAction}>
        <Image
          src={userImage}
          width={35}
          height={35}
          className="rounded-full mr-10"
          alt="github_image"
        />
      </div>

      {isUserAction && <UserSignOut username={username} email={email} />}
    </div>
  );
}
