import Head from "next/head";
import PostContent from "../../components/posts/post-details/post-content";
import { getFileData, getPostsData } from "../../lib/posts-utils";

function PostPage({ post }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.summary} />
			</Head>
			<PostContent post={post} />
		</>
	);
}

export default PostPage;

export function getStaticProps({ params }) {
	const fileName = params.slug;
	const postData = getFileData(fileName);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const fileNames = getPostsData();

	const slugs = fileNames.map((fileName) => fileName.replace(".md", ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
