import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage({ posts }) {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 300,
  };
}
