/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blanc: '#FFFFFF',
        gris1: '#E5E5E5',
        gris2: '#C3C3C3',
        gris3: '#7E7E7E',
        noir: '#1D1D1D',
        vert: '#2D5C43',
        bleu: '#393158',
        bleu2: '#2A5259',
        jaune: '#706947'
      },
      fontFamily: {
        // la configuration Tailwindcss pour la police CHILLAX

        'chillax-extralight': ['Chillax-Extralight', 'sans-serif'],
        'chillax-light': ['Chillax-Light', 'sans-serif'],
        'chillax-regular': ['Chillax-Regular', 'sans-serif'],
        'chillax-medium': ['Chillax-Medium', 'sans-serif'],
        'chillax-semibold': ['Chillax-Semibold', 'sans-serif'],
        'chillax-bold': ['Chillax-Bold', 'sans-serif'],
        'chillax-variable': ['Chillax-Variable', 'sans-serif'],

        // la configuration Tailwindcss pour la police ARCHIVO
        'archivo-thin': ['Archivo-Thin', 'sans-serif'],
        'archivo-thin-italic': ['Archivo-ThinItalic', 'sans-serif'],
        'archivo-extra-light': ['Archivo-ExtraLight', 'sans-serif'],
        'archivo-extra-light-italic': ['Archivo-ExtraLightItalic', 'sans-serif'],
        'archivo-light': ['Archivo-Light', 'sans-serif'],
        'archivo-light-italic': ['Archivo-LightItalic', 'sans-serif'],
        'archivo-regular': ['Archivo-Regular', 'sans-serif'],
        'archivo-italic': ['Archivo-Italic', 'sans-serif'],
        'archivo-medium': ['Archivo-Medium', 'sans-serif'],
        'archivo-medium-italic': ['Archivo-MediumItalic', 'sans-serif'],
        'archivo-semi-bold': ['Archivo-SemiBold', 'sans-serif'],
        'archivo-semi-bold-italic': ['Archivo-SemiBoldItalic', 'sans-serif'],
        'archivo-bold': ['Archivo-Bold', 'sans-serif'],
        'archivo-bold-italic': ['Archivo-BoldItalic', 'sans-serif'],
        'archivo-extra-bold': ['Archivo-ExtraBold', 'sans-serif'],
        'archivo-extra-bold-italic': ['Archivo-ExtraBoldItalic', 'sans-serif'],
        'archivo-black': ['Archivo-Black', 'sans-serif'],
        'archivo-black-italic': ['Archivo-BlackItalic', 'sans-serif'],
        'archivo-variable': ['Archivo-Variable', 'sans-serif'],
        'archivo-variable-italic': ['Archivo-VariableItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
