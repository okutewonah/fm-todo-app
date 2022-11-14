import React from "react";
import BgDark from "../components/BgDark";
import Footer from "../components/Footer";
import Header from "../components/Head";

interface Props {
  children: any
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div id="page">
      <Header />
        <BgDark />
      <Footer />
    </div>
  )
}

export default Page