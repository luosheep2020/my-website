import type { Blog } from "@/types";
import { person } from "./person";

export const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to content/blog
  // All posts will be listed on the /blog route
};
