import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getCV() {
  const filePath = path.join(process.cwd(), "content", "CV", "europass.md");
  console.log(filePath);
  const CVfile = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(CVfile);

  const CVdata = {
    data,
    content,
  };

  return CVdata;
}
