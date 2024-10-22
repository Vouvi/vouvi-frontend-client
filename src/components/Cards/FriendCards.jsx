import { Icon } from '@iconify/react';
import Vicon from '../../assets/images/vcoins-icon.svg'
function Friends({icon,name,level,xp,vcoin}){
    return(
        <div className="bg-[#3c3c3c] font-medium text-base p-2 rounded-md flex justify-between mt-5">
            <div className="flex items-center">
                <Icon icon="solar:user-circle-bold-duotone" width="80px" color={icon} />
                <div className="flex flex-col ml-3 leading-[1]">
                    <h2>{name}</h2>
                    <p className="text-md font-light">Nível {level}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex mx-4 bg-[#1F1F1F] p-2 rounded-[14px]'>
                    <h1 className=" text-[#014085] px-2 font-bold text-[30px]">XP</h1>
                    <p>{xp}</p>
                </div>
                <div className='flex bg-[#1F1F1F] p-2 rounded-[14px] items-center'>
                    <img width={"38px"} src={Vicon} alt="" />
                    <p className='px-2'>{vcoin}</p>
                </div>
            </div>
        </div>
    )
}
export default Friends