export type Features = Array<{
  label: string;
  content: {
    img: {
      src: string;
      alt: string;
    };
    title: string;
    desc: string;
  };
}>;
