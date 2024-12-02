import { PageWrapper, Text } from "@/components";
import ContactForm from "@/app/contact/contactForm";

export default function Page() {
  return (
    <PageWrapper>
      <Text as="h1" size="xl" variant="dark" className="mb-4">
        Contact Us
      </Text>

      <ContactForm />
    </PageWrapper>
  );
}
