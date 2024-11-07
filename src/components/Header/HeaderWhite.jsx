import LogoWhite from "./LogoWhite";
import SecondaryButton from "../Buttons/SecondaryButton";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ darkMode, setDarkMode }) {
  const VouviWord = (
    <svg width="" height="41" viewBox="0 0 1343 317" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.1665 286.389L2.70642 56.7986C-6.44358 32.5086 11.5164 6.55859 37.4764 6.55859H39.2765C55.0765 6.55859 69.1464 16.5485 74.3464 31.4685L151.376 252.159H116.226L194.466 31.3086C199.716 16.4786 213.746 6.56848 229.486 6.56848C255.506 6.56848 273.466 32.6285 264.206 56.9385L176.776 286.529C171.286 300.939 157.477 310.458 142.057 310.458H123.936C108.466 310.458 94.6165 300.879 89.1665 286.399V286.389Z" fill={darkMode ? "white" : "black"}/>
<path d="M452.691 316.018C429.261 316.018 407.691 312.018 387.971 304.018C368.251 296.018 351.041 284.878 336.321 270.588C321.601 256.308 310.101 239.518 301.821 220.228C293.531 200.938 289.391 180.148 289.391 157.868C289.391 135.588 293.461 114.938 301.611 95.9283C309.751 76.9283 321.111 60.2883 335.691 45.9983C350.261 31.7183 367.411 20.6483 387.121 12.7783C406.841 4.91832 428.411 0.988281 451.841 0.988281C475.271 0.988281 496.841 4.91832 516.561 12.7783C536.281 20.6383 553.421 31.7083 567.991 45.9983C582.561 60.2883 593.921 77.0083 602.071 96.1483C610.211 115.298 614.281 136.008 614.281 158.298C614.281 180.588 610.211 201.308 602.071 220.448C593.931 239.598 582.571 256.388 567.991 270.808C553.421 285.238 536.341 296.388 516.771 304.238C497.191 312.098 475.841 316.028 452.691 316.028V316.018ZM451.831 247.438C468.971 247.438 483.831 243.728 496.411 236.298C508.981 228.868 518.701 218.448 525.561 205.008C532.421 191.578 535.851 175.858 535.851 157.858C535.851 144.718 533.921 132.718 530.061 121.858C526.201 110.998 520.561 101.648 513.131 93.7883C505.701 85.9283 496.841 79.8582 486.561 75.5682C476.271 71.2782 464.701 69.1383 451.841 69.1383C434.701 69.1383 419.841 72.7782 407.261 80.0682C394.681 87.3582 384.971 97.7183 378.111 111.138C371.251 124.568 367.821 140.148 367.821 157.858C367.821 171.578 369.751 183.938 373.611 194.938C377.471 205.938 383.111 215.368 390.541 223.228C397.971 231.088 406.831 237.088 417.111 241.228C427.401 245.378 438.971 247.438 451.831 247.438Z" fill={darkMode ? "white" : "black"}/>
<path d="M777.997 312.811C752.277 312.811 729.627 307.451 710.057 296.741C690.477 286.021 675.267 271.101 664.407 251.951C653.547 232.811 648.117 211.091 648.117 186.801V42.361C648.117 21.291 665.197 4.21094 686.267 4.21094C707.337 4.21094 724.417 21.291 724.417 42.361V192.381C724.417 203.241 726.777 212.601 731.487 220.451C736.197 228.311 742.627 234.311 750.777 238.451C758.917 242.601 767.987 244.661 777.997 244.661C788.007 244.661 797.287 242.591 804.997 238.451C812.707 234.311 818.857 228.381 823.427 220.661C827.997 212.941 830.287 203.661 830.287 192.801V42.361C830.287 21.291 847.367 4.21094 868.437 4.21094H869.297C890.367 4.21094 907.447 21.291 907.447 42.361V187.231C907.447 211.521 902.017 233.171 891.157 252.171C880.297 271.181 865.227 286.031 845.937 296.751C826.647 307.471 803.997 312.821 777.997 312.821V312.811Z" fill={darkMode ? "white" : "black"}/>
<path d="M1036.2 277.9L953.361 57.9403C944.011 33.1003 962.361 6.57031 988.911 6.57031C1005.06 6.57031 1019.45 16.7904 1024.77 32.0404L1101.6 252.17H1066.45L1144.69 31.3203C1149.94 16.4903 1163.97 6.58032 1179.71 6.58032C1205.73 6.58032 1223.69 32.6403 1214.43 56.9503L1130.22 278.09C1122.8 297.59 1104.1 310.47 1083.24 310.47C1062.31 310.47 1043.57 297.5 1036.19 277.92L1036.2 277.9Z" fill={darkMode ? "white" : "black"}/>
<path d="M1265.76 272.089V44.9186C1265.76 23.7286 1282.93 6.55859 1304.12 6.55859C1325.31 6.55859 1342.48 23.7286 1342.48 44.9186V272.089C1342.48 293.279 1325.31 310.448 1304.12 310.448C1282.93 310.448 1265.76 293.279 1265.76 272.089Z" fill={darkMode ? "white" : "black"}/>
</svg>
  );

  return (
    <header className="relative m-auto flex w-[88%] items-center justify-between py-10">
      <LogoWhite
        Name={VouviWord}
        height={"66"}
        darkMode={darkMode}
      />
      <button
        className="ml-auto mr-5"
        onClick={() => {
          document.body.classList.toggle("dark");
          setDarkMode((dm) => !dm);
        }}
      >
        <Icon
          className="dark:text-white"
          width={"5rem"}
          icon={"tabler:sun-filled"}
        />
      </button>
      <Link to={"/login"}>
        <SecondaryButton
          color={
            "dark:hover:text-secondary-200 text-white dark:text-black dark:bg-white bg-black hover:text-secondary-300"
          }
          text={"Entrar"}
        />
      </Link>
    </header>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};

export default Header;
