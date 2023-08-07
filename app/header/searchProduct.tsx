'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
export default function InputSearchProducts() {
  const router = useRouter();
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const handleDataSearch = (event: any) => {
    event.preventDefault();
    router.push(`/search?q=${query}`);
  };
  return (
    <form
      className="w-full max-w-8xl relative mr-10"
      onSubmit={handleDataSearch}
    >
      <input
        type="text"
        ref={ref}
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="search recipe"
        className="border-2 border-gray-200 w-full max-w-8xl ml-5 h-9 px-2 rounded-sm"
      />
      <MagnifyingGlassIcon className="w-5 h-5 absolute top-1.5 right-1" />
    </form>
  );
}
