import Head from "next/head";

import { HomeSectionAlternative } from "../components/HomeSectionAlternative/HomeSectionAlternative";
import { ContentSection } from "../components/ContentSection/ContentSection";
import { TopMenu } from "../components/TopMenu/TopMenu";
import { ExplanationSection } from "../components/ExplanationSection";
import { LineUpSection } from "../components/LineUpSection/LineUpSection";

export default function Home() {
  return (
    <div className="container">
      <TopMenu />
      <div id="home">
        <HomeSectionAlternative />
      </div>
      <div id="content">
        <ContentSection />
      </div>
      <div id="explanation">
        <ExplanationSection />
      </div>
      <div id="lineup">
        <LineUpSection />
      </div>
    </div>
  );
}
