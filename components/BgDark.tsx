import React from "react";

interface Props {}

const BgDark: React.FC<Props> = () => {
  return (
    <div className="bg-dark">
      <img src="public/assets/images/bg-desktop-dark.jpg" alt="background-dark" />
    </div>
  )
}

export default BgDark;