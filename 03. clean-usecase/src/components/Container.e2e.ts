import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Container from "./Container.vue";

describe("Container (browser)", () => {
  it("renderiza o slot corretamente", async () => {
    const screen = render(Container, {
      slots: {
        default: "<span data-testid='content'>Hello World</span>",
      },
    });

    const content = await screen.container.querySelector('[data-testid="content"]');
    expect(content).toBeTruthy();
    expect(content.textContent).toBe("Hello World");
  });

  it("aplica a classe container", async () => {
    const screen = render(Container);

    const container = await screen.container.querySelector(".container");
    expect(container).toBeTruthy();
  });
});
