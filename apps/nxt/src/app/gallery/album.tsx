"use client";

import Image from "next/image";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components";
import { fetchAlbum } from "@/app/api/fetchAlbum";

export default function Album() {
  const nextPage = useRef(0);

  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["gallery"],
      queryFn: fetchAlbum,
      initialPageParam: 0,
      getNextPageParam: () => nextPage.current,
    });

  const { ref, inView } = useInView({ delay: 10000, threshold: 1 });

  console.log(data);

  useEffect(() => {
    if (inView) {
      nextPage.current = nextPage.current + 10;
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return status === "pending" ? (
    <div className="flex items-center">
      <Spinner /> <div className="pl-2">Loading...</div>
    </div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div>
      <div>
        {data?.pages.map((page, i) => (
          <div key={i} className="mb-2">
            {page.data.monsters.map((monster) => (
              <div key={monster.index} className="mb-2">
                <Link href={`gallery/${monster.index}`}>
                  <div className="relative">
                    <div className="z-10 absolute p-1 bg-slate-700 text-white text-sm">
                      {monster.name}
                    </div>
                    {monster.image ? (
                      <Image
                        width={1024}
                        height={1024}
                        src={`${process.env.NEXT_PUBLIC_DND_API_URL}${monster.image}`}
                        alt={monster.index}
                        className="object-cover w-full max-w-[1024px] h-36 cursor-pointer transition-opacity hover:opacity-70"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
                      />
                    ) : (
                      <div className="bg-slate-500 w-full max-w-[1024px] h-36 cursor-pointer transition-opacity hover:opacity-70"></div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div ref={ref}>
        {isFetchingNextPage && (
          <div className="flex items-center">
            <Spinner /> <div className="pl-2">Loading...</div>
          </div>
        )}
      </div>
    </div>
  );
}
