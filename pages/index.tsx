import type { NextPage } from "next";
import Head from "next/head";
import Link from "../src/components/Link/index";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next APP </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alura cases - Home</h1>
        <Link href="/faq">Ir para o Faq</Link>
      </main>
    </div>
  );
};

export default Home;
