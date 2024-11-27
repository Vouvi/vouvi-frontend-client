import LogoWhite from "../Header/LogoWhite";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  const VouviWord = (
    <svg
      className="hidden xs:block xs:h-4 md:h-6 lg:h-10"
      viewBox="0 0 1343 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.1665 286.389L2.70642 56.7986C-6.44358 32.5086 11.5164 6.55859 37.4764 6.55859H39.2765C55.0765 6.55859 69.1464 16.5485 74.3464 31.4685L151.376 252.159H116.226L194.466 31.3086C199.716 16.4786 213.746 6.56848 229.486 6.56848C255.506 6.56848 273.466 32.6285 264.206 56.9385L176.776 286.529C171.286 300.939 157.477 310.458 142.057 310.458H123.936C108.466 310.458 94.6165 300.879 89.1665 286.399V286.389Z"
        fill={darkMode ? "white" : "white"}
      />
      <path
        d="M452.691 316.018C429.261 316.018 407.691 312.018 387.971 304.018C368.251 296.018 351.041 284.878 336.321 270.588C321.601 256.308 310.101 239.518 301.821 220.228C293.531 200.938 289.391 180.148 289.391 157.868C289.391 135.588 293.461 114.938 301.611 95.9283C309.751 76.9283 321.111 60.2883 335.691 45.9983C350.261 31.7183 367.411 20.6483 387.121 12.7783C406.841 4.91832 428.411 0.988281 451.841 0.988281C475.271 0.988281 496.841 4.91832 516.561 12.7783C536.281 20.6383 553.421 31.7083 567.991 45.9983C582.561 60.2883 593.921 77.0083 602.071 96.1483C610.211 115.298 614.281 136.008 614.281 158.298C614.281 180.588 610.211 201.308 602.071 220.448C593.931 239.598 582.571 256.388 567.991 270.808C553.421 285.238 536.341 296.388 516.771 304.238C497.191 312.098 475.841 316.028 452.691 316.028V316.018ZM451.831 247.438C468.971 247.438 483.831 243.728 496.411 236.298C508.981 228.868 518.701 218.448 525.561 205.008C532.421 191.578 535.851 175.858 535.851 157.858C535.851 144.718 533.921 132.718 530.061 121.858C526.201 110.998 520.561 101.648 513.131 93.7883C505.701 85.9283 496.841 79.8582 486.561 75.5682C476.271 71.2782 464.701 69.1383 451.841 69.1383C434.701 69.1383 419.841 72.7782 407.261 80.0682C394.681 87.3582 384.971 97.7183 378.111 111.138C371.251 124.568 367.821 140.148 367.821 157.858C367.821 171.578 369.751 183.938 373.611 194.938C377.471 205.938 383.111 215.368 390.541 223.228C397.971 231.088 406.831 237.088 417.111 241.228C427.401 245.378 438.971 247.438 451.831 247.438Z"
        fill={darkMode ? "white" : "white"}
      />
      <path
        d="M777.997 312.811C752.277 312.811 729.627 307.451 710.057 296.741C690.477 286.021 675.267 271.101 664.407 251.951C653.547 232.811 648.117 211.091 648.117 186.801V42.361C648.117 21.291 665.197 4.21094 686.267 4.21094C707.337 4.21094 724.417 21.291 724.417 42.361V192.381C724.417 203.241 726.777 212.601 731.487 220.451C736.197 228.311 742.627 234.311 750.777 238.451C758.917 242.601 767.987 244.661 777.997 244.661C788.007 244.661 797.287 242.591 804.997 238.451C812.707 234.311 818.857 228.381 823.427 220.661C827.997 212.941 830.287 203.661 830.287 192.801V42.361C830.287 21.291 847.367 4.21094 868.437 4.21094H869.297C890.367 4.21094 907.447 21.291 907.447 42.361V187.231C907.447 211.521 902.017 233.171 891.157 252.171C880.297 271.181 865.227 286.031 845.937 296.751C826.647 307.471 803.997 312.821 777.997 312.821V312.811Z"
        fill={darkMode ? "white" : "white"}
      />
      <path
        d="M1036.2 277.9L953.361 57.9403C944.011 33.1003 962.361 6.57031 988.911 6.57031C1005.06 6.57031 1019.45 16.7904 1024.77 32.0404L1101.6 252.17H1066.45L1144.69 31.3203C1149.94 16.4903 1163.97 6.58032 1179.71 6.58032C1205.73 6.58032 1223.69 32.6403 1214.43 56.9503L1130.22 278.09C1122.8 297.59 1104.1 310.47 1083.24 310.47C1062.31 310.47 1043.57 297.5 1036.19 277.92L1036.2 277.9Z"
        fill={darkMode ? "white" : "white"}
      />
      <path
        d="M1265.76 272.089V44.9186C1265.76 23.7286 1282.93 6.55859 1304.12 6.55859C1325.31 6.55859 1342.48 23.7286 1342.48 44.9186V272.089C1342.48 293.279 1325.31 310.448 1304.12 310.448C1282.93 310.448 1265.76 293.279 1265.76 272.089Z"
        fill={darkMode ? "white" : "white"}
      />
    </svg>
  );

  return (
    <footer className="w-12/12 m-auto mt-60 flex items-center justify-around bg-primary-200 py-8 lg:px-0 lg:p-8 xl:p-12">
      <div className="hidden md:block">
        <LogoWhite darkMode={"white"} Name={VouviWord} width={"66"} />
      </div>
      <p className="text-center text-[12px] sm:text-sm lg:text-[20px] xl:text-[24px] font-light text-white">
        © 2024 Vouvi.<br className="xs:hidden block"/> <strong className="hidden md:block">Todos os direitos reservados.</strong>
      </p>
      <div className="flex">
        {/* Insta */}
        <svg
          className="mx-1 md:mx-2 lg:mx-3 h-7 md:h-8 lg:h-10 xl:h-12"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4679 0C29.1679 0.00719983 30.5382 0.0215995 31.7214 0.0551987L32.187 0.0719982C32.7246 0.0911977 33.255 0.115197 33.8957 0.143996C36.4493 0.263993 38.1916 0.667184 39.7204 1.25997C41.3044 1.86955 42.6387 2.69513 43.9731 4.0271C45.1939 5.22643 46.1383 6.67777 46.7402 8.2798C47.333 9.80856 47.7362 11.5509 47.8562 14.1069C47.885 14.7452 47.909 15.2756 47.9282 15.8156L47.9426 16.2812C47.9786 17.462 47.993 18.8323 47.9978 21.5323L48.0002 23.3226V26.4666C48.0061 28.2171 47.9876 29.9676 47.945 31.7176L47.9306 32.1832C47.9114 32.7232 47.8874 33.2536 47.8586 33.892C47.7386 36.4479 47.3306 38.1879 46.7402 39.719C46.1383 41.3211 45.1939 42.7724 43.9731 43.9717C42.7738 45.1926 41.3224 46.1369 39.7204 46.7389C38.1916 47.3317 36.4493 47.7348 33.8957 47.8548L32.187 47.9268L31.7214 47.9412C30.5382 47.9748 29.1679 47.9916 26.4679 47.9964L24.6776 47.9988H21.536C19.7847 48.005 18.0334 47.9866 16.2826 47.9436L15.817 47.9292C15.2473 47.9077 14.6777 47.8829 14.1082 47.8548C11.5547 47.7348 9.81233 47.3317 8.28117 46.7389C6.68 46.1366 5.2295 45.1923 4.03087 43.9717C2.80917 42.7726 1.86398 41.3213 1.26134 39.719C0.668549 38.1903 0.265359 36.4479 0.145361 33.892L0.0733633 32.1832L0.0613639 31.7176C0.0171234 29.9676 -0.00287824 28.2171 0.00136508 26.4666V21.5323C-0.00527771 19.7818 0.0123237 18.0312 0.054164 16.2812L0.0709635 15.8156C0.090163 15.2756 0.114162 14.7452 0.142962 14.1069C0.262959 11.5509 0.666149 9.81096 1.25893 8.2798C1.86299 6.67711 2.80983 5.22572 4.03327 4.0271C5.23121 2.80685 6.68085 1.86253 8.28117 1.25997C9.81233 0.667184 11.5523 0.263993 14.1082 0.143996C14.7466 0.115197 15.2794 0.0911977 15.817 0.0719982L16.2826 0.0575984C18.0326 0.0149581 19.7831 -0.00344319 21.5336 0.00239977L26.4679 0ZM24.0008 11.9997C20.8183 11.9997 17.7661 13.264 15.5157 15.5143C13.2653 17.7647 12.0011 20.8169 12.0011 23.9994C12.0011 27.1819 13.2653 30.2341 15.5157 32.4845C17.7661 34.7349 20.8183 35.9991 24.0008 35.9991C27.1833 35.9991 30.2355 34.7349 32.4859 32.4845C34.7362 30.2341 36.0005 27.1819 36.0005 23.9994C36.0005 20.8169 34.7362 17.7647 32.4859 15.5143C30.2355 13.264 27.1833 11.9997 24.0008 11.9997ZM24.0008 16.7996C24.9463 16.7994 25.8825 16.9855 26.7561 17.3472C27.6297 17.7089 28.4235 18.2391 29.0922 18.9075C29.7609 19.576 30.2913 20.3696 30.6533 21.2431C31.0153 22.1165 31.2017 23.0527 31.2018 23.9982C31.202 24.9437 31.0159 25.88 30.6542 26.7536C30.2925 27.6271 29.7623 28.4209 29.0939 29.0896C28.4254 29.7583 27.6318 30.2888 26.7583 30.6507C25.8849 31.0127 24.9487 31.1991 24.0032 31.1992C22.0937 31.1992 20.2624 30.4407 18.9121 29.0905C17.5619 27.7402 16.8034 25.9089 16.8034 23.9994C16.8034 22.0899 17.5619 20.2586 18.9121 18.9084C20.2624 17.5581 22.0937 16.7996 24.0032 16.7996M36.6029 8.3998C35.8073 8.3998 35.0442 8.71586 34.4816 9.27845C33.919 9.84105 33.603 10.6041 33.603 11.3997C33.603 12.1954 33.919 12.9584 34.4816 13.521C35.0442 14.0836 35.8073 14.3997 36.6029 14.3997C37.3985 14.3997 38.1616 14.0836 38.7242 13.521C39.2867 12.9584 39.6028 12.1954 39.6028 11.3997C39.6028 10.6041 39.2867 9.84105 38.7242 9.27845C38.1616 8.71586 37.3985 8.3998 36.6029 8.3998Z"
            fill="#280B3D"
          />
        </svg>
        {/* Facebook */}
        <svg
          className="mx-1 md:mx-2 lg:mx-3 h-7 md:h-8 lg:h-10 xl:h-12"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.1681 24.0602C48.1681 10.7789 37.4161 0 24.1681 0C10.9201 0 0.168091 10.7789 0.168091 24.0602C0.168091 35.7053 8.42409 45.4015 19.3681 47.6391V31.2782H14.5681V24.0602H19.3681V18.0451C19.3681 13.4015 23.1361 9.62406 27.7681 9.62406H33.7681V16.8421H28.9681C27.6481 16.8421 26.5681 17.9248 26.5681 19.2481V24.0602H33.7681V31.2782H26.5681V48C38.6881 46.797 48.1681 36.5474 48.1681 24.0602Z"
            fill="#280B3D"
          />
        </svg>
        {/* Linkedin */}
        <svg
          className="mx-1 md:mx-2 lg:mx-3 h-7 md:h-8 lg:h-10 xl:h-12"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.8348 0C44.2492 0 45.6058 0.561903 46.606 1.5621C47.6062 2.56229 48.1681 3.91885 48.1681 5.33333V42.6667C48.1681 44.0812 47.6062 45.4377 46.606 46.4379C45.6058 47.4381 44.2492 48 42.8348 48H5.50142C4.08694 48 2.73038 47.4381 1.73019 46.4379C0.729994 45.4377 0.168091 44.0812 0.168091 42.6667V5.33333C0.168091 3.91885 0.729994 2.56229 1.73019 1.5621C2.73038 0.561903 4.08694 0 5.50142 0H42.8348ZM41.5014 41.3333V27.2C41.5014 24.8944 40.5855 22.6832 38.9552 21.0529C37.3249 19.4226 35.1137 18.5067 32.8081 18.5067C30.5414 18.5067 27.9014 19.8933 26.6214 21.9733V19.0133H19.1814V41.3333H26.6214V28.1867C26.6214 26.1333 28.2748 24.4533 30.3281 24.4533C31.3182 24.4533 32.2678 24.8467 32.968 25.5468C33.6681 26.2469 34.0614 27.1965 34.0614 28.1867V41.3333H41.5014ZM10.5148 14.8267C11.7029 14.8267 12.8424 14.3547 13.6826 13.5145C14.5228 12.6743 14.9948 11.5348 14.9948 10.3467C14.9948 7.86667 12.9948 5.84 10.5148 5.84C9.31952 5.84 8.17323 6.31481 7.32806 7.15997C6.4829 8.00514 6.00809 9.15142 6.00809 10.3467C6.00809 12.8267 8.03476 14.8267 10.5148 14.8267ZM14.2214 41.3333V19.0133H6.83476V41.3333H14.2214Z"
            fill="#280B3D"
          />
        </svg>
        {/* Twitter */}
        <svg
          className="mx-1 md:mx-2 lg:mx-3 h-7 md:h-8 lg:h-10 xl:h-12"
          viewBox="0 0 49 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.9681 0.249023H45.3292L29.2492 18.6742L48.1681 43.7507H33.3567L21.7475 28.545L8.47895 43.7507H1.11095L18.3087 24.0365L0.168091 0.252452H15.3567L25.8344 14.1485L37.9681 0.249023ZM35.3795 39.3347H39.4595L13.1281 4.43531H8.75323L35.3795 39.3347Z"
            fill="#280B3D"
          />
        </svg>
        {/* Info */}
        <Link to={"/about"}>
          <svg
            className="mx-1 md:mx-2 lg:mx-3 h-7 md:h-8 lg:h-10 xl:h-12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0L42 0C43.5913 0 45.1174 0.632141 46.2426 1.75736C47.3679 2.88258 48 4.4087 48 6V42C48 43.5913 47.3679 45.1174 46.2426 46.2426C45.1174 47.3679 43.5913 48 42 48H6C4.4087 48 2.88258 47.3679 1.75736 46.2426C0.632141 45.1174 0 43.5913 0 42V6ZM26.79 19.764L19.92 20.625L19.674 21.765L21.024 22.014C21.906 22.224 22.08 22.542 21.888 23.421L19.674 33.825C19.092 36.516 19.989 37.782 22.098 37.782C23.733 37.782 25.632 37.026 26.493 35.988L26.757 34.74C26.157 35.268 25.281 35.478 24.699 35.478C23.874 35.478 23.574 34.899 23.787 33.879L26.79 19.764ZM24 16.5C24.7956 16.5 25.5587 16.1839 26.1213 15.6213C26.6839 15.0587 27 14.2956 27 13.5C27 12.7044 26.6839 11.9413 26.1213 11.3787C25.5587 10.8161 24.7956 10.5 24 10.5C23.2044 10.5 22.4413 10.8161 21.8787 11.3787C21.3161 11.9413 21 12.7044 21 13.5C21 14.2956 21.3161 15.0587 21.8787 15.6213C22.4413 16.1839 23.2044 16.5 24 16.5Z"
              fill="#280B3D"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  darkMode: PropTypes.bool,
};

export default Footer;
