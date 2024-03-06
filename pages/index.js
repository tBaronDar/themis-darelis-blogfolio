import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "rourou",
    date: "2027-5-6",
    image: "getting-started-nextjs.png",
    summary:
      "dfsdsdfs there is no quiqui like a true quiqui and the rest is history.",
    slug: "a-slug",
  },
  {
    title: "troutri",
    date: "2023-12-6",
    image: "getting-started-nextjs.png",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "an-other-slug",
  },
  {
    title: "troutri",
    date: "2023-11-6",
    image: "getting-started-nextjs.png",
    summary: "dfsdsdfs",
    slug: "an-other-slug1",
  },
  {
    title: "troutri",
    date: "2023-7-16",
    image: "getting-started-nextjs.png",
    summary: "dfsdsdfs",
    slug: "an-other-slug2",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
