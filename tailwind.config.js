import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */

export default withMT({
  content:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
});