import localFont from "next/font/local";

export const dirooz = localFont({
  src: [
    {
      path: "./yekan.ttf",
      weight: "400",
      style: "normal",
    }
  ],
});

export const cinzel = localFont({
  src: [
    {
      path: "./cinzel.regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cinzel.bold.ttf",
      weight: "800",
      style: "normal",
    }
  ],
});
