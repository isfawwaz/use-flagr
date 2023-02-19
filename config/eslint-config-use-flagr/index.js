module.exports = {
  extends: ["next", "turbo", "prettier"],
  ignorePatterns: ['**/*.test.js', '**/*.test.ts'],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
