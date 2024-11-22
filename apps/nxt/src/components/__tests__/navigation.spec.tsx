import { render, screen } from "@testing-library/react";
import Navigation from "@/components/navigation";

test("Navigation", async () => {
  render(<Navigation />);

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Gallery")).toBeInTheDocument();
});
