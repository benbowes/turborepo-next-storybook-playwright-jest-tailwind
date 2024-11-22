"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components";
import { fetchAlbum } from "@/app/api/fetchAlbum";

export default function Album() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchAlbum,
  });

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6">
        {data?.map((image) => (
          <Link key={image.id} href={`gallery/${image.id}`}>
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-36 cursor-pointer hover:opacity-70"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
