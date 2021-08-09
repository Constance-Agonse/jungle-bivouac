import React, { useEffect, useState } from "react";

import { HomeSectionAlternative } from "../components/HomeSectionAlternative/HomeSectionAlternative";
import { ContentSection } from "../components/ContentSection/ContentSection";
import { TopMenu } from "../components/TopMenu/TopMenu";
import { ExplanationSection } from "../components/ExplanationSection";
import { CostumesSection } from "../components/CostumesSection/CostumesSection";
import { LineUpSection } from "../components/LineUpSection/LineUpSection";
import { FooterSection } from "../components/FooterSection/FooterSection";

export const ResponsiveContext = React.createContext();

export default function Home() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, []);

  return (
    <ResponsiveContext.Provider value={width}>
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
        <div id="costumes">
          <CostumesSection />
        </div>
        <div id="lineup">
          <LineUpSection />
        </div>
        <div id="footer">
          <FooterSection />
        </div>
      </div>
    </ResponsiveContext.Provider>
  );
}
