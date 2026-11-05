import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
export default function NotFound() {
  return <><Nav /><main className="wrap case" id="content"><header className="case-header"><p className="eyebrow">404 / Page not found</p><h1>Let’s find your way.</h1><p className="lede">This page may have moved. Explore the selected work or return to the portfolio.</p><div className="actions"><Link className="button button-primary" href="/">Return home</Link><Link className="button button-secondary" href="/#projects">Explore selected work</Link></div></header></main><Footer /></>;
}
