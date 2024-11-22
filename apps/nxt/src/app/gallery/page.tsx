import { PageWrapper, Text } from "@/components";
import Album from "@/app/gallery/album";

export default function Page() {
  return (
    <PageWrapper>
      <Text as="h1" size="xl" variant="dark" className="mb-4">
        Hello, Gallery Page!
      </Text>

      <Album />
    </PageWrapper>
  );
}
