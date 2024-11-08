import { Icon } from "@iconify/react";
function AvatarBasic({ openModal }) {
  return (
    <>
      <div onClick={openModal} className="flex cursor-pointer items-center">
        <div className="mr-3 flex flex-col leading-[1.1]">
          <h1 className="text-right text-[32px] font-medium dark:text-[#8D8D8D]">
            Ajustes
          </h1>
        </div>
        <div className="group flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-black dark:bg-white">
          <Icon
            className="relative right-[1px] text-white transition-transform duration-[800ms] group-hover:translate-x-[2px] group-hover:rotate-[180deg] dark:text-black"
            icon="solar:settings-bold"
            width="3rem"
          />
        </div>
      </div>
    </>
  );
}
export default AvatarBasic;
