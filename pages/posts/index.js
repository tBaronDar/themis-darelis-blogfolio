import AllPosts from "../../components/posts/all-posts";

function AllPostsPage() {
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
      title: "t3ggd",
      date: "2023-12-6",
      image: "getting-started-nextjs.png",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "an-other-slug",
    },
    {
      title: "t34t34",
      date: "2023-11-6",
      image: "getting-started-nextjs.png",
      summary: "dfsdsdfs",
      slug: "an-other-slug1",
    },
    {
      title: "43t34t3",
      date: "2023-7-16",
      image: "getting-started-nextjs.png",
      summary: "dfsdsdfs",
      slug: "an-other-slug2",
    },
  ];

  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default AllPostsPage;
