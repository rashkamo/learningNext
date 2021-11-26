import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>About page</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          numquam ipsum quam voluptas enim harum molestiae, natus tempora labore
          architecto maxime vel aspernatur perspiciatis commodi nesciunt,
          voluptate nobis facere atque.
        </p>
      </div>
    </>
  );
};

export default About;
