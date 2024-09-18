import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import "@testing-library/jest-dom"; 
import Button from "../Button.vue"; 

describe("Button", () => {
  test("renders the button with correct button text", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Button text",
      },
    });
    expect(wrapper.find('span').text()).toBe('Button text');
  });

  test("button is rendered", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Button text",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("button icon is rendered correctly", () => {
    const wrapper = mount(Button, {
      props: {
        iconName: "i-heroicons-trash",
      },
      
    });
    const icon = wrapper.find('[data-testid="button-icon"]')
    expect(icon.classes()).toEqual(expect.arrayContaining(['button-icon']))
  });

  test("button icon is not rendered if there is no icon name", () => {
    const wrapper = mount(Button, {
      props: {
        iconName: "",
      },
    });
    const icon = wrapper.find('[data-testid="button-icon"]')
  expect(icon.exists()).toBe(false)
  });
});
