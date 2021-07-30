import Head from "next/head";

import { HomeSectionAlternative } from "../components/HomeSectionAlternative/HomeSectionAlternative";
import { ContentSection } from "../components/ContentSection/ContentSection";
import { TopMenu } from "../components/TopMenu/TopMenu";

export default function Home() {
  return (
    <div className="container">
      <TopMenu />
      <HomeSectionAlternative />
      <ContentSection />
    </div>
  );
}
