import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          obcaecati nulla omnis voluptatum fugit culpa recusandae dolorum
          reiciendis velit modi corporis blanditiis necessitatibus itaque dicta
          hic sed dignissimos unde asperiores tempora doloremque! Dolorum
          impedit ratione rem provident, sunt debitis mollitia dolorem dicta est
          assumenda maxime non dolores vitae quo? Ut totam laboriosam temporibus
          nostrum, illo alias minima vero tempora.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See all Ninjas</a>
        </Link>
      </div>
    </>
  );
}
