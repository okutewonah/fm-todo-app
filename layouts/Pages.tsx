import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Head";

interface Props {
  children: any
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div id="page">
      <Header />

      <Footer />
    </div>
  )
}