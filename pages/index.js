import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-utils";

function HomePage({ posts }) {
	return (
		<>
			<Head>
				<title>Welcome to Themis portfolio</title>
				<meta
					name="description"
					content="An aspiring web developer portfolio in blog format"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export default HomePage;

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 300,
	};
}
