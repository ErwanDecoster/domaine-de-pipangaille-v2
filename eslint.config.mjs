// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "import/consistent-type-specifier-style": "off",
  },
  files: ["**/*.{ts,tsx}"],
});
