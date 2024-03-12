import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage({ posts }) {
	return (
		<>
			<Head>
				<title>All Projects and Articles</title>
				<meta
					name="description"
					content="All my projects and article as a blog"
				/>
			</Head>
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
