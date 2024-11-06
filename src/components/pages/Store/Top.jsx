import CatBanner from "../../../assets/images/cat-banner-store.svg";
import PrimaryButton from "../../Buttons/PrimaryButton";
import StoreButton from "../../Buttons/StoreButton";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Top() {
  const [btnColor, setBtnColor] = useState(0);

  const activeButton = (index) => {
    setBtnColor(index);
  };

  return (
    <>
      <section className="m-auto mt-24 flex w-11/12 justify-between rounded-md bg-primary-100 px-10 pt-10 outline outline-[26px] outline-[#7C20BE33]">
        <div className="ml-5 mt-5 w-3/6 text-primary-200">
          <h1 className="text-xl font-bold">Seja Premium</h1>
          <p className="mt-6 text-lg font-light">
            Energia infinita, ferramentas avançadas, e relatórios em PDF, para
            toda a família.
          </p>
          <div className="relative mt-14 w-fit pb-10">
            <PrimaryButton text={"Assinar agora!"} />
          </div>
        </div>
        <img src={CatBanner} alt="" />
      </section>

      <hr className="m-auto mb-14 mt-20 w-10/12 rounded-md bg-[#F5F5F442] p-1" />

      <section className={`m-auto w-11/12`}>
        <div className="mb-6 flex items-center justify-between">
          <div className="mr-20 text-base leading-[1] text-white">
            <h1 className={`font-medium`}>Personalize!</h1>
            <p className="font-light">Gaste vcoins!</p>
          </div>

          <div onClick={() => setBtnColor(0)}>
            <StoreButton
              color={
                btnColor === 0
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Todos"}
            >
              <Icon icon={"solar:star-shine-bold"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(1)}>
            <StoreButton
              color={
                btnColor === 1
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Olhos"}
            >
              <Icon icon={"mingcute:eye-fill"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(2)}>
            <StoreButton
              color={
                btnColor === 2
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Pelos"}
            >
              <Icon icon={"icon-park-outline:texture"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(3)}>
            <StoreButton
              color={
                btnColor === 3
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Coleiras"}
            >
              <Icon icon={"carbon:circle-dash"} />
            </StoreButton>
          </div>

          <div onClick={() => setBtnColor(4)}>
            <StoreButton
              color={
                btnColor === 4
                  ? "bg-white text-black"
                  : "bg-[#1F1F1F] text-white"
              }
              text={"Pingente"}
            >
              <Icon icon={"mdi:necklace"} />
            </StoreButton>
          </div>

          <div onClick={() => activeButton(5)}>
            <StoreButton
              color={`${btnColor === 5 ? "bg-white text-[#02020b]" : ""}`}
              text={"Fundos"}
            >
              <Icon icon={"mynaui:square-solid"} />
            </StoreButton>
          </div>
        </div>
      </section>
    </>
  );
}
export default Top;
