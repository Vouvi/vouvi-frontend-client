import SecondaryButton from "../../Buttons/SecondaryButton";
import { useState } from "react";
import { Link } from "react-router-dom";

function AvatarColors({ Eyes, Necklace, Pendant, Texture, Background }) {
  const Border = "outline outline-[6px] outline-white";
  const [IconBorder, NoBorder] = useState(0);

  const Bg = ["#002952", "#A30000", "#067D00", "#390062", "#784000", "#610132"];
  const [BgColor, NoBgColor] = useState();
  const Color = [
    "#007FFF",
    "#FF2D2D",
    "#37FF2D",
    "#7C20BE",
    "#FF8800",
    "#FF0084",
  ];
  const [IconColor, NoIconColor] = useState(0);

  const IconStates = (index) => {
    NoBorder(index); // Atualiza o estado IconBorder para o índice do ícone clicado
    NoBgColor(Bg[index]);
    NoIconColor(Color[index]);
  };

  const fillColor = Texture || IconColor || "#007fff";
  const AvatarStyle = (
    <svg
      width="308"
      height="346"
      viewBox="0 0 308 346"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.229 50.5064C182.84 47.5291 194.266 45.9082 206.172 45.9082C218.008 45.9082 229.37 47.5102 239.928 50.4543C248.671 30.6513 268.348 13.8648 282.015 4.76306C283.105 4.03684 284.157 3.35954 285.163 2.73354C286.302 2.02403 287.381 1.38042 288.388 0.806152C288.756 1.90964 289.109 3.01323 289.447 4.11655L289.528 4.3815C298.506 33.8431 297.193 63.0866 293.132 84.8259C302.235 96.8178 307.468 110.849 307.468 125.845C307.468 152.198 291.308 175.572 266.383 190.134L266.432 190.917C268.533 224.029 273.848 255.07 278.738 283.606L278.801 283.973C284.896 319.547 290.374 351.521 287.682 378.195C286.323 391.654 282.877 403.915 276.297 414.705C269.705 425.515 260.068 434.683 246.58 442.09L245.879 442.475H166.268L165.567 442.09C152.079 434.683 142.442 425.515 135.85 414.705C132.658 409.472 130.204 403.892 128.367 397.997C128.311 397.999 128.254 398.002 128.197 398.004C115.383 398.454 97.8577 394.09 82.328 381.316C66.3537 368.176 53.6438 347.122 49.2418 316.223C42.4514 268.56 18.4501 256.143 14.5231 255.132C4.17811 252.467 -2.04836 241.921 0.615899 231.576C3.28015 221.231 13.8262 215.005 24.1712 217.669C46.6006 223.446 79.0793 251.379 87.5401 310.767C90.7647 333.402 99.3515 345.228 106.903 351.44C113.152 356.58 119.541 358.592 123.808 359.164C124.3 336.769 128.639 311.445 133.346 283.973L133.409 283.606C138.298 255.07 143.614 224.029 145.715 190.917L145.771 190.023C120.953 175.453 104.876 152.131 104.876 125.845C104.876 110.941 110.044 96.9906 119.044 85.0476C114.95 63.2857 113.598 33.9434 122.606 4.3815C122.969 3.18991 123.349 1.99797 123.747 0.806152C124.753 1.38042 125.832 2.02403 126.972 2.73354C140.588 11.2121 162.802 29.1002 172.229 50.5064ZM84.4248 378.766C99.0401 390.788 115.434 394.975 127.419 394.723L127.419 394.724C115.435 394.976 99.04 390.789 84.4245 378.767C69.1694 366.219 56.8107 345.953 52.5089 315.758C45.5744 267.083 20.842 253.351 15.3462 251.936C6.7662 249.726 1.60206 240.979 3.81175 232.399C3.88081 232.131 3.95624 231.867 4.03786 231.605C3.95638 231.866 3.88106 232.131 3.8121 232.398C1.60241 240.978 6.76654 249.725 15.3465 251.935C20.8424 253.35 45.5748 267.082 52.5093 315.757C56.811 345.952 69.1697 366.218 84.4248 378.766Z"
        className="transition-all duration-500"
        fill={fillColor}
      />
    </svg>
  );

  return (
    <div className="flex w-[520px] flex-col items-center rounded-md bg-[#C9C9C8] py-10 dark:bg-[#151515]">
      <div
        style={{
          backgroundImage: `url(${Background})`, // caminho para a imagem
          backgroundSize: "120%", // faz a imagem cobrir todo o contêiner
          backgroundPosition: "center", // centraliza a imagem
          backgroundRepeat: "no-repeat", // impede a repetição da imagem
          backgroundColor: Bg[IconBorder], // cor de fundo como fallback
        }}
        className={`flex w-10/12 rounded-md border-[10px] border-white pt-16 transition-all duration-500 dark:border-black`}
      >
        {AvatarStyle}
        <div className="absolute ml-[137px] mt-20">
          <img width="140px" src={Eyes} alt="" />
        </div>
        <div className="absolute ml-[137px] mt-[12rem]">
          <img width="140px" src={Necklace} alt="" />
        </div>
        <div className="absolute ml-[11.7rem] mt-[13rem]">
          <img width="40px" src={Pendant} alt="" />
        </div>
      </div>
      <div className="flex w-10/12 justify-around py-6">
        <div
          style={{ backgroundColor: IconBorder === 0 ? Bg[0] : "#007fff" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-secondary-200 transition-all duration-300 ${IconBorder === 0 ? Border : ""} `}
          onClick={() => IconStates(0)}
        ></div>
        <div
          style={{ backgroundColor: IconBorder === 1 ? Bg[1] : "#FF2D2D" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-[#FF2D2D] transition-all duration-300 ${IconBorder === 1 ? Border : ""} `}
          onClick={() => IconStates(1)}
        ></div>
        <div
          style={{ backgroundColor: IconBorder === 2 ? Bg[2] : "#37FF2D" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-[#37FF2D] transition-all duration-300 ${IconBorder === 2 ? Border : ""} `}
          onClick={() => IconStates(2)}
        ></div>
        <div
          style={{ backgroundColor: IconBorder === 3 ? Bg[3] : "#7C20BE" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-primary-200 transition-all duration-300 ${IconBorder === 3 ? Border : ""} `}
          onClick={() => IconStates(3)}
        ></div>
        <div
          style={{ backgroundColor: IconBorder === 4 ? Bg[4] : "yellow" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-yellow transition-all duration-300 ${IconBorder === 4 ? Border : ""} `}
          onClick={() => IconStates(4)}
        ></div>
        <div
          style={{ backgroundColor: IconBorder === 5 ? Bg[5] : "#FF0084" }}
          className={`h-14 w-14 cursor-pointer rounded-full bg-[#FF0084] transition-all duration-300 ${IconBorder === 5 ? Border : ""} `}
          onClick={() => IconStates(5)}
        ></div>
      </div>
      <Link className="flex w-full justify-center" to={"/profile"}>
        <SecondaryButton
          color={"w-9/12 hover:bg-opacity-100 hover:text-primary-200 bg-white"}
          text={"Pronto!"}
        />
      </Link>
    </div>
  );
}
export default AvatarColors;
