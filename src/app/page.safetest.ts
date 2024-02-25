import { describe, it, expect } from "safetest/jest";
import { render } from "safetest/react";
 
describe("App", () => {
  it("renders without crashing", async () => {
    const { page } = await render();
    await expect(
      page.getByText("Get started by editing src/app/page.tsx")
    ).toBeVisible();
 
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});


