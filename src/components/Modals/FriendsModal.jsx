import { Icon } from "@iconify/react";
import Friends from "../Cards/FriendCards";
function FriendsModal({ closeModal, openModal }) {
  return (
    <section className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center overflow-y-hidden bg-white/50 backdrop-blur-[25px] dark:bg-black/50">
      <div className="flex h-[90vh] w-11/12 md:w-10/12 lg:w-8/12 flex-col rounded-md bg-white p-6 shadow-2xl shadow-black dark:bg-[#1B1B1B]">
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="text-right text-[32px] font-medium dark:text-white">
            Amigos: 3
          </h1>

          <div className="flex items-center justify-between w-full sm:w-fit gap-5">
            <div
              onClick={openModal}
              className="flex cursor-pointer flex-row-reverse sm:flex-row items-center rounded-xl sm:border-4 border-black md:px-2 text-[20px] md:text-[32px] dark:border-white dark:text-white"
            >
              <Icon icon="typcn:plus" />
              <p className="sm:mx-3 mr-2 sm:mr-0">Adicionar amigo</p>
            </div>
            <Icon
              onClick={closeModal}
              className="relative right-[1px] cursor-pointer text-black opacity-35 dark:text-white"
              icon="carbon:close-filled"
              width="3rem"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll">
          <Friends
            icon={"red"}
            name={"Débora paixão"}
            level={"999"}
            xp={"999"}
            vcoin={"999"}
          />
          <Friends
            icon={"blue"}
            name={"Pipoca"}
            level={"999"}
            xp={"5.000"}
            vcoin={"5.000"}
          />
          <Friends
            icon={"red"}
            name={"PetiGatão"}
            level={"999"}
            xp={"7.000"}
            vcoin={"5.000"}
          />
        </div>
      </div>
    </section>
  );
}
export default FriendsModal;
