import Container from "@/components/common/Container";
import Layout from "@/components/common/Layout";
import Title from "@/components/common/Title";
import Card from "@/components/common/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { downloadCv } from "@/utils/downloadFile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    toast.loading("Downloading");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(email);
    console.log(form.current);
    if (isValid && form.current) {
      emailjs
        .send(
          "service_ua6wyak",
          "template_2d3kytx",
          {
            user_email: email,
            reply_to: "sofiaibarra415@gmail.com",
          },
          "VEyYzcHpXTzu8HCtK"
        )
        .then(
          (result) => {
            setDisabled(true);
            setEmail("");
            downloadCv("Sofia Ibarra - Resume.pdf");
            toast.dismiss();
          },
          (error) => {
            console.error(error.text);
          }
        );
    } else {
      toast.dismiss();
      toast.error("The email is invalid");
    }
  };

  return (
    <Layout>
      <Container id="home">
        <div className="text-center">
          <div
            style={{
              background: "linear-gradient(to right, #7AAEEA, #7AEABB)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="md:text-5xl text-4xl md:leading-snug font-black leading-tight p-6 md:p-4"
          >
            <p>Hi! My name is Sofía.</p>
            <p>I turn ideas into interactive realities</p>
          </div>
          <div className="p-6 text-grey md:px-60">
            <p>
              Welcome to my digital space. I specialize in crafting engaging and user-friendly web experiences, blending creativity with technical expertise to bring your ideas to life
            </p>
          </div>
          <div className="p-3 rounded-3xl w-36 block m-auto bg-grey">
            <Link href="/#projects">
              <div className="text-light">View Projects</div>
            </Link>
          </div>
        </div>
      </Container>
      <Container id="tech">
        <div>
          <Title title="My Tech Stack" subtitle="Technologies I work with" />
          <div>
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-8 gap-12 sm:gap-24 md:pt-12 md:gap-16">
                  <li>
                    <Image
                      src="/images/next.png"
                      alt="next"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/javascript.png"
                      alt="javascript"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/react.png"
                      alt="react"
                      width={70}
                      height={60}
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-8 gap-12 sm:gap-24 md:pt-12 md:gap-16">
                  <li>
                    <Image
                      src="/images/typescript.png"
                      alt="typescript"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/git.png"
                      alt="git"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/firebase.png"
                      alt="firebase"
                      width={50}
                      height={80}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-16">
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-8 gap-12 sm:gap-24 md:pt-12 md:gap-16">
                  <li>
                    <Image
                      src="/images/webflow.webp"
                      alt="Webflow"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/tailwind.png"
                      alt="tailwind"
                      width={70}
                      height={60}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/wordpress.png"
                      alt="wordpress"
                      width={70}
                      height={70}
                    />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row items-center justify-evenly pt-8 gap-12 sm:gap-24 md:pt-12 md:gap-16">
                  <li>
                    <Image
                      src="/images/node.png"
                      alt="node"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/css.png"
                      alt="css"
                      width={70}
                      height={70}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/figma.png"
                      alt="figma"
                      width={60}
                      height={60}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container id="about">
        <div className="mt-6">
          <Title title="About Me" subtitle="A bit about me" />
          <div className="md:pt-16 pt-8 flex flex-col items-center">
            <p className="text-center px-8 max-w-3xl">
              I have been studying the world of Front-End web development
              for 3 years. I am currently studying a Bachelors Degree in
              Computer Science, which gives me a solid foundation in programming
              fundamentals, algorithms and data structures. I finished my secondary
              studies last year, but I had the possibility of accessing different courses
              during my school years. This has allowed me to develop good skills in languages like
              Javascript and libraries such as React Js. I continue to complement my
              academic training with specialized courses in technologies such as React.js,
              JavaScript, Node.js and Angular.
            </p>
            <div>
              {disabled === false ? (
                <form
                  ref={form}
                  className="flex items-center flex-col pt-10 gap-5"
                >
                  <Input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(value) => setEmail(value)}
                  />
                  <Button label="Download CV" onClick={sendEmail} />
                </form>
              ) : (
                <div className="p-12">
                  <span
                    className="text-xl font-semibold"
                    style={{
                      background: "linear-gradient(to right, #7AAEEA, #7AEABB)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Successful Download
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Container id="projects">
        <div className="mt-6">
          <Title title="Proyects" subtitle="Things I’ve built so far" />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 justify-items-center pt-8 md:pt-16 px-6">
            <Card
              title="Crossfit Eccomerce"
              description="CrossFit Essentials App is a web application designed to offer users a wide variety of crossfit products. Users can browse and purchase high-quality items such as clothing, accessories, and specialized equipment. The platform ensures easy and secure navigation, providing a comfortable and efficient shopping experience for crossfit enthusiasts."
              img="images/crossfit.png"
              onLiveClick={() =>
                window.open("https://crossfit-essentials.vercel.app/")
              }
              onCodeClick={() =>
                window.open("https://github.com/sofiaibarra415/crossfit-essentials")
              }
            />
            <Card
              title="Sakura Sushi House"
              description="Sakura Sushi House brings the finest sushi directly to your doorstep. This web application allows users to explore an extensive menu of fresh sushi rolls. With user-friendly navigation and secure transactions, Sakura Sushi House ensures a delightful and hassle-free ordering experience for all sushi enthusiasts."
              img="images/sushi.svg"
              onLiveClick={() =>
                window.open("https://sakura-sushi-orcin.vercel.app/")
              }
              onCodeClick={() =>
                window.open(
                  "https://github.com/sofiaibarra415/sakura-sushi-house"
                )
              }
            />
            <Card
              title="An old Portfolio"
              description="This project showcases my skills in front-end development using JavaScript, CSS, and HTML. The website offers a seamless and engaging experience, allowing visitors to explore my professional background, view my portfolio projects, and get in touch with me easily."
              img="images/old-portfolio.svg"
              onLiveClick={() =>
                window.open("https://sofiaibarra.vercel.app/")
              }
              onCodeClick={() =>
                window.open("https://github.com/sofiaibarra415/PORTFOLIO")
              }
            />
            <Card
              title="Paloma Sansores"
              description="I contribute to the development of this web project where I played a role in frontend develop. Leveraging technologies such as Next.js, Tailwind CSS, and Firebase, we crafted an engaging user interface with a clean design and an intuitive user experience."
              img="images/paloma.png"
              onLiveClick={() =>
                window.open("https://www.palomasansores360.com/")
              }
              onCodeClick={() =>
                window.open(
                  "https://github.com/ezeagusibarra001/paloma-sansores"
                )
              }
            />
            <Card
              title="Técnica"
              description="I am the developer and designer behind this website. It is the start of a goggles e-commerce site. This site offers an eye-catching design for entering users. It was created with Webflow."
              img="images/tecnica.svg"
              onLiveClick={() => window.open("https://sofias-fresh-site-fc0c9f.webflow.io/")}
              onCodeClick={() => { }}
            />
            <Card
              title="Checkout Pro Integration"
              description="Checkout Pro is a solution that allows users to make purchases through Mercado Pago payment pages safely and quickly. This is a simple website with Mercado Pago integration to make payments according to the selected amount"
              img="images/mercado.png"
              onLiveClick={() =>
                window.open("https://coffee-mp-app.vercel.app/")
              }
              onCodeClick={() =>
                window.open("https://github.com/luespana/mp-app")
              }
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
