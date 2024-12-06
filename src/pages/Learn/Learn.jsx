import Header from "../../components/Header/HeaderIntern";
import HeaderMobile from "../../components/Header/HeaderMobile";
import TopSection from "../../components/Learn/TopSection";
import Trail from "./Trail";
import AvatarBasic from "../../components/Header/AvatarBasic";

import trailImage1 from "../../assets/images/learning-trail-1.svg";

import { useState, useEffect } from "react";

function Learn() {
  const stages = [
    {
      id: 0,
      icon: "ic:round-menu-book",
      iconWidth: 50,
      top: 1,
      left: 0.5,
      finished: true,
    },
    {
      id: 1,
      icon: "iconoir:heart-solid",
      iconWidth: 50,
      top: 27,
      left: 2,
      finished: true,
    },
    {
      id: 2,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 51,
      left: 5,
      finished: false,
    },
    { id: 3, top: 80, left: 15, finished: false },
    { id: 4, top: 80, left: 23, finished: false },
    { id: 5, top: 70, left: 30, finished: false },
    { id: 6, top: 56, left: 35, finished: false },
    { id: 7, top: 40, left: 38, finished: false },
    { id: 8, top: 28, left: 45, finished: false },
    { id: 9, top: 28, left: 54, finished: false },
    {
      id: 10,
      icon: "bi:phone-fill",
      iconWidth: 50,
      top: 45,
      left: 61,
      finished: false,
    },
    {
      id: 11,
      top: 73,
      left: 70,
      finished: false,
    },
    {
      id: 12,
      top: 85,
      left: 78,
      finished: false,
    },
    {
      id: 13,
      top: 80,
      left: 86,
      finished: false,
    },
    {
      id: 14,
      top: 65,
      left: 91,
      finished: false,
    },
  ];

 
  const [levelUser, setLevelUser] = useState(1);
  const [xp, setXp] = useState(0);
  const [vcoin, setVcoin] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setXp(userData.xp);
      setVcoin(userData.vcoin);
      setLevelUser(Math.floor(xp / 100) + 1);
    }
  }, []);
  return (
    <>
      <Header>
        <AvatarBasic />
      </Header>

      <main className="relative flex w-[100vw] flex-col items-center justify-center px-0 md:px-[1vw] xl:px-[7vw]">
        {/* Heading */}
        <TopSection
          section={1}
          sectionName={"Fundamentos"}
          playerCoins={vcoin}
          playerLevel={levelUser}
          playerXP={xp}
          progressionBar={(xp / (levelUser * 100)) * 100}
        />

        {/* Trail 1 */}
        <div className="relative h-full w-full">
          <Trail stages={stages} bg={trailImage1} />
        </div>
      </main>

      <div className="fixed bottom-0 w-screen">
        <HeaderMobile iconId={0} />
      </div>
    </>
  );
}

export default Learn;
