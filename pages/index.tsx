import Head from "next/head";
import React from "react";
import AppLayout from "../layout/AppLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [globalLoadingState, setGlobalLoadingState] = React.useState<boolean>(
    false
  );

  return (
    <div>
      <Head>
        <title>Munay - Consórcios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout isGlobalLoading={globalLoadingState}>
        <div>children goes here</div>
      </AppLayout>
    </div>
  );
}
