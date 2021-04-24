import Head from "next/head";
import React from "react";
import Advantages from "../components/App/Advantages/Main";
import Posts from "../components/App/BlogList/Main";
import Contact from "../components/App/Contact/Main";
import DefenseSection from "../components/App/DefenseSection/Main";
import Hero from "../components/App/Hero/Main";
import PromotionSection from "../components/App/PromotionSection/Main";
import Testimonials from "../components/App/Testimonials/Main";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
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
    {
      label: "Promotional section",
      component: <PromotionSection />,
      ref: null,
      hidden: false,
    },

    {
      label: "Advantages",
      component: <Advantages />,
      ref: null,
      hidden: false,
    },

    {
      label: "Depoimentos",
      component: <Testimonials />,
      ref: null,
      hidden: false,
    },

    {
      label: "Blog",
      component: <Posts blogPosts={[]} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Contato",
      component: <Contact loadingFn={() => console.log("loading")} />,
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
