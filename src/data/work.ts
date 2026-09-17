import type { Work } from "@/types";
import { person } from "./person";

export const work: Work = {
  path: "/project",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to content/projects
  // All projects will be listed on the /project route
};
