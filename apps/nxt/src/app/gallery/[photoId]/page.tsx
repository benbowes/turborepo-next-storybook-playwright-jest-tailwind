"use client";

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

  return (
    <PageWrapper>
      <Text as="h1" size="xl" variant="dark" className="mb-4">
        {data.title}
      </Text>
      <img key={data.id} src={data.url} alt={data.title} className="" />
    </PageWrapper>
  );
}
