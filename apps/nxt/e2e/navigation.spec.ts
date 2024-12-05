import { test, expect } from "@playwright/test";

test("Navigation", async ({ page }) => {
  // Setup mock API's
  await page.route(
    "https://www.dnd5eapi.co/graphql",
    async (route, ...rest) => {
      console.log(JSON.stringify(rest));
      const json = {
        data: {
          monsters: [
            { image: "/api/images/monsters/aboleth.png", index: "aboleth" },
            {
              image: "/api/images/monsters/adult-blue-dragon.png",
              index: "adult-blue-dragon",
            },
          ],
        },
      };
      await route.fulfill({ json });
    }
  );

  await page.goto("http://localhost:8080");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Welcome/);

  await page.getByRole("link", { name: "Gallery" }).click();

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Gallery/);

  await expect(page.getByRole("link").first()).toBeVisible();

  await page.getByRole("link", { name: "adult-blue-dragon" }).click();
});
