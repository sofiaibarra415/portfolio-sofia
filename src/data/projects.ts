export type Project = {
  title: string;
  description: string;
  img: string;
  liveUrl: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Crossfit Eccomerce",
    description:
      "CrossFit Essentials App is a web application designed to offer users a wide variety of crossfit products. Users can browse and purchase high-quality items such as clothing, accessories, and specialized equipment. The platform ensures easy and secure navigation, providing a comfortable and efficient shopping experience for crossfit enthusiasts.",
    img: "/images/crossfit.png",
    liveUrl: "https://crossfit-essentials.vercel.app/",
    codeUrl: "https://github.com/sofiaibarra415/crossfit-essentials",
  },
  {
    title: "Sakura Sushi House",
    description:
      "Sakura Sushi House brings the finest sushi directly to your doorstep. This web application allows users to explore an extensive menu of fresh sushi rolls. With user-friendly navigation and secure transactions, Sakura Sushi House ensures a delightful and hassle-free ordering experience for all sushi enthusiasts.",
    img: "/images/sushi.svg",
    liveUrl: "https://sakura-sushi-orcin.vercel.app/",
    codeUrl: "https://github.com/sofiaibarra415/sakura-sushi-house",
  },
  {
    title: "An old Portfolio",
    description:
      "This project showcases my skills in front-end development using JavaScript, CSS, and HTML. The website offers a seamless and engaging experience, allowing visitors to explore my professional background, view my portfolio projects, and get in touch with me easily.",
    img: "/images/old-portfolio.svg",
    liveUrl: "https://sofiaibarra.vercel.app/",
    codeUrl: "https://github.com/sofiaibarra415/PORTFOLIO",
  },
  {
    title: "Paloma Sansores",
    description:
      "I contribute to the development of this web project where I played a role in frontend develop. Leveraging technologies such as Next.js, Tailwind CSS, and Firebase, we crafted an engaging user interface with a clean design and an intuitive user experience.",
    img: "/images/paloma.png",
    liveUrl: "https://www.palomasansores360.com/",
    codeUrl: "https://github.com/ezeagusibarra001/paloma-sansores",
  },
  {
    title: "Técnica",
    description:
      "I am the developer and designer behind this website. It is the start of a goggles e-commerce site. This site offers an eye-catching design for entering users. It was created with Webflow.",
    img: "/images/tecnica.svg",
    liveUrl: "https://sofias-fresh-site-fc0c9f.webflow.io/",
  },
  {
    title: "Checkout Pro Integration",
    description:
      "Checkout Pro is a solution that allows users to make purchases through Mercado Pago payment pages safely and quickly. This is a simple website with Mercado Pago integration to make payments according to the selected amount.",
    img: "/images/mercado.png",
    liveUrl: "https://coffee-mp-app.vercel.app/",
    codeUrl: "https://github.com/luespana/mp-app",
  },
];
