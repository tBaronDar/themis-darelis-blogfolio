import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), "content/posts");

export function getFileData(fileName) {
  const postSlug = fileName.replace(".md", "");

  const filePath = path.join(postsDirPath, postSlug + ".md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    ...data,
    slug: postSlug,
    content,
  };

  return postData;
}

export function getPostsData() {
  return fs.readdirSync(postsDirPath);
}

export function getAllPosts() {
  const postFiles = getPostsData();

  const allPosts = postFiles.map((file) => {
    return getFileData(file);
  });

  const sortedPosts = allPosts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  const sortedPosts = featuredPosts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );

  return sortedPosts;
}
