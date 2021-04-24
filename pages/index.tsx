import Head from "next/head";
import React from "react";
import DefenseSection from "../components/App/DefenseSection/Main";
import Hero from "../components/App/Hero/Main";
import useLandingPage from "../hooks/useLandingPage";
import AppLayout from "../layout/AppLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [globalLoadingState, setGlobalLoadingState] = React.useState<boolean>(
    false
  );

  const { menuList, navigableList } = useLandingPage([
    {
      label: "Hero",
      component: <Hero />,
      ref: null,
      hidden: false,
    },

    {
      label: "Defense section",
      component: <DefenseSection />,
      ref: null,
      hidden: false,
    },
  ]);

  return (
    <div>
      <Head>
        <title>Munay - Consórcios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout isGlobalLoading={globalLoadingState}>
        {navigableList.map((Component, index) => {
          return <React.Fragment key={index}>{Component}</React.Fragment>;
        })}
      </AppLayout>
    </div>
  );
}
