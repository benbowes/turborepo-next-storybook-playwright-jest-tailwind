"use client";

import Image from "next/image";
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
      <div className="grid gap-2 grid-cols-1">
        {data?.data.monsters.map((monster) => (
          <Link key={monster.index} href={`gallery/${monster.index}`}>
            <Image
              width={1024}
              height={1024}
              src={`${process.env.NEXT_PUBLIC_DND_API_URL}${monster.image}`}
              alt={monster.index}
              className="object-cover w-full h-36 cursor-pointer hover:opacity-70"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
