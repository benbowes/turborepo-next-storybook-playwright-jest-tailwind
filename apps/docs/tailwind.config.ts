// /** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;

module.exports = {
  content: ["./storybook-static/**/*.{html,js}"],
  theme: {
    extend: {},
  },
};
