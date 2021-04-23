import Head from "next/head";
import AppLayout from "../layout/AppLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Munay - Consórcios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <div>children goes here</div>
      </AppLayout>
    </div>
  );
}
