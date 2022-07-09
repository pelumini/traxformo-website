import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutUs, Masthead } from 'src/components';
import styles from 'src/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TraxFormo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
    </div>
  );
};

export default Home;
