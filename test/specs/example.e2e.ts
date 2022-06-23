import * as path from "path";

describe("test accept", () => {
  it("can upload file with wav", async () => {
    await browser.url(`https://roomy-towering-mare.glitch.me/`);
    await browser.waitUntil(async () => {
      const el = await $(`input[accept="audio/*"]`);
      return Boolean(el);
    });

    const filePath = path.resolve(__dirname, "../fixtures/sample.wav");
    const input = await $(`input[accept="audio/*"]`);
    await input.setValue(filePath);

    expect(await input.getValue()).toBe(`C:\\fakepath\\sample.wav`);
  });

  it("can upload file with wav", async () => {
    await browser.url(`https://roomy-towering-mare.glitch.me/`);
    await browser.waitUntil(async () => {
      const el = await $(`input[accept="audio/wav"]`);
      return Boolean(el);
    });

    const filePath = path.resolve(__dirname, "../fixtures/sample.wav");
    const input = await $(`input[accept="audio/wav"]`);
    await input.setValue(filePath);

    expect(await input.getValue()).toBe(`C:\\fakepath\\sample.wav`);
  });

  it("upload file with png", async () => {
    await browser.url(`https://roomy-towering-mare.glitch.me/`);

    const filePath = path.resolve(__dirname, "../fixtures/sample.png");
    const input = await $(`input[accept="image/png"]`);
    await input.setValue(filePath);

    expect(await input.getValue()).toBe(`C:\\fakepath\\sample.png`);
  });

  it("upload file with wildcard extension", async () => {
    await browser.url(`https://roomy-towering-mare.glitch.me/`);

    const filePath = path.resolve(__dirname, "../fixtures/sample.png");
    const input = await $(`input[accept="image/*"]`);
    await input.setValue(filePath);

    expect(await input.getValue()).toBe(`C:\\fakepath\\sample.png`);
  });
});
