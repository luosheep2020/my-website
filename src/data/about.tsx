import type { About } from "@/types";
import { person } from "./person";

export const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: "I’m a software engineer based in Tokyo, working across backend and frontend development with Java, Go, React, and Vue. My backend stack includes the Spring ecosystem, particularly Spring Boot, Spring MVC, Spring Security, and Spring Cloud. I enjoy building applications from end to end, connecting well-designed APIs and reliable backend services with clear, responsive user interfaces.",
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [],
  },
};
