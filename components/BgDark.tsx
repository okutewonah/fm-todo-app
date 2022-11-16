import React from "react";

interface Props {}

const BgDark: React.FC<Props> = () => {
  return (
    <div className="bg-dark">
      <img className="bg-dark__img" src="/assets/images/bg-desktop-dark.jpg" alt="background-dark" />
      <div className="bg-dark__container">
        <div className="bg-dark__todo-top">
          <span className="bg-dark__title">TODO</span>
          <img src="/assets/images/icon-sun.svg" alt="sun icon" />
        </div>
      </div>
    </div>
  )
}

export default BgDark;