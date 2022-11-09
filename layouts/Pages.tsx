import React from "react";
import Header from "../components/Head";

interface Props {
  children: any
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div id="page">
      <Header />
    </div>
  )
}