"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPhoto } from "@/app/api/fetchAlbum";
import { Spinner, PageWrapper, Text } from "@/components";

export default function Page() {
  const params = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["photo", params?.photoId],
    queryFn: () => fetchPhoto(params?.photoId as string),
  });

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isPending) {
    return (
      <PageWrapper>
        <Spinner />
      </PageWrapper>
    );
  }

  const monster = data.data.monster;

  return (
    <PageWrapper>
      <Text as="h1" size="xl" variant="dark" className="mb-4">
        {data.data.monster.name}
      </Text>
      {monster.image ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_DND_API_URL}${monster.image}`}
          alt={monster.index}
          className=""
          width="1024"
          height="1024"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
        />
      ) : (
        <div className="bg-slate-500 w-full max-w-[1024px] h-36"></div>
      )}

      <Text as="h2" size="lg" variant="dark" className="my-4">
        Characteristics
      </Text>
      <div className="grid gap-2 grid-cols-2">
        <div>Type</div>
        <div>{monster.type}</div>
        <div>Languages</div>
        <div>{monster.languages}</div>
      </div>
    </PageWrapper>
  );
}
