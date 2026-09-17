import type { Person } from "@/types";
import avatarImage from "../../public/images/avatar.jpg";

export const person: Person = {
  firstName: "WENJIE",
  lastName: "LUO",
  name: `WENJIE LUO`,
  role: "Software Engineer",
  avatar: avatarImage.src,
  email: "",
  location: "Asia/Tokyo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "日本語","中文"], // optional: Leave the array empty if you don't want to display languages
  skills: ["Java","Spring", "Go","React","Vue"], // Leave empty to hide skill tags
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};
