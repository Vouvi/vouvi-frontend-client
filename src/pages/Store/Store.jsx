import Top from "./Top";
import Low from "./Low";

import HeaderIntern from "../../components/Header/HeaderIntern";
import Footer from "../../components/Footer/Footer";
import AvatarFull from "../../components/Header/AvatarFull";
import HeaderMobile from "../../components/Header/HeaderMobile";

import { useState } from "react";

function Store() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );
  return (
    <>
      <HeaderIntern
        iconActiveNumber={3}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull />
      </HeaderIntern>
      <Top />
      <Low />
      <Footer />
      <HeaderMobile iconId={3}/>
    </>
  );
}
export default Store;
