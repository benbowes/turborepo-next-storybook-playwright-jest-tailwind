import { PageWrapper, Text } from "@/components";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <PageWrapper>
      <main>
        <Button className="mb-12">
          Button consummed locally via the ui workspace
        </Button>
        <Text as="h1" size="xl" variant="dark" className="mb-4">
          Welcome
        </Text>
        <Text as="p" size="base">
          Turborepo, Storybook, NextJS, TailwindCSS
        </Text>
      </main>
    </PageWrapper>
  );
}
