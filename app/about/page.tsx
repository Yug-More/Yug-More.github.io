import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { ResearchExplorer } from "@/components/interactive/ResearchExplorer";
import { EngineeringTimeline } from "@/components/interactive/EngineeringTimeline";
export const metadata={title:"Background & research connections — Yug More",alternates:{canonical:"/about/"}};
export default function AboutPage(){return <><Nav/><main id="content"><header className="wrap case-header"><p className="eyebrow">Background</p><h1>Teaching, engineering & research.</h1><p>Experience and technical interests behind the selected work.</p></header><About/><Education/><Experience/><Leadership/><Skills/><ResearchExplorer/><EngineeringTimeline/></main><Footer/></>}
