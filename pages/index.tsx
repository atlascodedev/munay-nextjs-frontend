import axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import {
  BlogPostType,
  CardProduct,
  LandingProps,
  PartnerType,
  TestimonialsType,
} from "../@types";
import Advantages from "../components/App/Advantages/Main";
import Posts from "../components/App/BlogList/Main";
import Contact from "../components/App/Contact/Main";
import DefenseSection from "../components/App/DefenseSection/Main";
import Hero from "../components/App/Hero/Main";
import Partners from "../components/App/Partners/Main";
import PromotionSection from "../components/App/PromotionSection/Main";
import Testimonials from "../components/App/Testimonials/Main";
import scrollIntoView from "../helper/scrollIntoView";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
import AppLayout from "../layout/AppLayout";

export default function Home({
  blog,
  cards,
  partners,
  testimonials,
}: LandingProps) {
  console.log(blog);

  const [globalLoadingState, setGlobalLoadingState] = React.useState<boolean>(
    false
  );

  const toggleGlobalLoading = (loading: boolean): void => {
    setGlobalLoadingState(loading);
  };

  const promotionalSectionRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLDivElement>(null);

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
      component: (
        <PromotionSection action={() => scrollIntoView("Hero", heroRef)} />
      ),
      ref: promotionalSectionRef,
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
      component: <Posts blogPosts={blog} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Contato",
      component: <Contact loadingFn={toggleGlobalLoading} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Representações",
      component: <Partners />,
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

      <AppLayout
        scrollTopButton
        hideOnScroll
        items={menuList}
        isGlobalLoading={globalLoadingState}
      >
        {navigableList.map((Component, index) => {
          return <React.Fragment key={index}>{Component}</React.Fragment>;
        })}
      </AppLayout>
    </div>
  );
}

export const getStaticProps: GetStaticProps<LandingProps> = async (context) => {
  let testimonialsRequest: AxiosResponse<TestimonialsType[]> = await axios.get(
    "https://us-central1-munay-nextjs-hefesto.cloudfunctions.net/api/collections/entries/testimonials"
  );
  let partnersRequest: AxiosResponse<PartnerType[]> = await axios.get(
    "https://us-central1-munay-nextjs-hefesto.cloudfunctions.net/api/collections/entries/partners"
  );
  let blogRequest: AxiosResponse<BlogPostType[]> = await axios.get(
    "https://us-central1-munay-nextjs-hefesto.cloudfunctions.net/api/collections/entries/portalBlog"
  );

  let cardsRequest: AxiosResponse<CardProduct[]> = await axios.get(
    "https://us-central1-munay-nextjs-hefesto.cloudfunctions.net/api/collections/entries/cartas"
  );

  const testimonaislData: TestimonialsType[] = testimonialsRequest.data;

  const partnersData: PartnerType[] = partnersRequest.data;
  const blogData: BlogPostType[] = blogRequest.data;
  const cardsData: CardProduct[] = cardsRequest.data;

  return {
    props: {
      testimonials: testimonaislData,
      blog: blogData,
      partners: partnersData,
      cards: cardsData,
    },
  };
};
