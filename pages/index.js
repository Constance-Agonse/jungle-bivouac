import Head from "next/head";

import { HomeSection } from "../components/HomeSection/HomeSection";
import { GetThereSection } from "../components/GetThereSection/GetThereSection";

export default function Home() {
  return (
    <div className="container">
      <HomeSection />
      <GetThereSection />
    </div>
  );
}
