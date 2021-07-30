import Head from "next/head";

import { HomeSectionAlternative } from "../components/HomeSectionAlternative/HomeSectionAlternative";
import { GetThereSection } from "../components/GetThereSection/GetThereSection";
import { TopMenu } from "../components/TopMenu/TopMenu";

export default function Home() {
  return (
    <div className="container">
      <TopMenu />
      <HomeSectionAlternative />
      <GetThereSection />
    </div>
  );
}
