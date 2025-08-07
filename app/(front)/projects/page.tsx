import ProjectsPage from "@/components/projects-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Worked On By Clancy Ssekisambu",
  description: "Explore a showcase of web development projects built by Clancy Ssekisambu – from business websites to powerful web apps using React.js, Next.js, and Tailwind CSS.",
  keywords: "Clancy Ssekisambu, web developer in Uganda, website designer Uganda, full stack web developer Uganda, freelance web developer Uganda, React developer Uganda, Next.js developer Uganda, Tailwind CSS developer, web developer near me, website developer Kampala, web development Uganda, affordable website design Uganda, website design near me, hire a web developer Uganda, custom websites Uganda, professional web development Uganda, mobile-friendly websites Uganda, SEO-friendly websites Uganda"
};

export default function Projects() {
  return <ProjectsPage />
}
 