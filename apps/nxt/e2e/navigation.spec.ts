import { test, expect } from "@playwright/test";

test("Navigation", async ({ page }) => {
  // Setup mock API's
  await page.route(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
    async (route) => {
      const json = [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
      ];
      await route.fulfill({ json });
    }
  );

  await page.route(
    "https://jsonplaceholder.typicode.com/photos/2",
    async (route) => {
      const json = {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
      };
      await route.fulfill({ json });
    }
  );

  await page.goto("http://localhost:3000");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Welcome/);

  await page.getByRole("link", { name: "Gallery" }).click();

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Gallery/);

  await expect(page.getByRole("link").first()).toBeVisible();

  await page
    .getByRole("link", { name: "reprehenderit est deserunt velit ipsam" })
    .click();
});
