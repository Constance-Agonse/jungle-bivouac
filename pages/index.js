import Head from "next/head";

import { HomeSection } from "../components/HomeSection/HomeSection";
import { GetThereSection } from "../components/GetThereSection/GetThereSection";
import { TopMenu } from "../components/TopMenu/TopMenu";

export default function Home() {
  return (
    <div className="container">
      <TopMenu />
      <HomeSection />
      <GetThereSection />
    </div>
  );
}
