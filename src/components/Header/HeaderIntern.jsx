import LogoWhite from "./LogoWhite"
import Navigation from "./Navigation"
import AvatarBasic from './AvatarBasic'
import AvatarFull from "./AvatarFull"
import Settings from './Settings'
import { useState } from "react";

function HeaderIntern() {

    const animationFill = "transition-all duration-300 ease-in-out"
    // Background e cor do icone de cada SVG
    const bgFill = 'fill-[#003F7F]';
    const iconColor = 'fill-[#007fff]';

    // Estado para controlar qual ícone está ativo
    const [activeIcon, setActiveIcon] = useState(false);

    // Função para alternar estados dos ícones (icone ativo/inativo)
    const IconStates = (iconId) => {
        // Se o ícone clicado já está ativo, desativa-o. Caso contrário, ativa-o.
        if (activeIcon === iconId) {
            setActiveIcon(null); // Desativa o ícone se ele já estiver ativo
        } else {
            setActiveIcon(iconId); // Ativa o ícone clicado
        }
    };
    const Learn = <svg className="m-1 overflow-visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${animationFill} group-hover:fill-[#003F7F] ${activeIcon === 1 ? bgFill : ''}`} width="46" height="46" rx="23" fill="#007fff" />
        <path className={`${animationFill} group-hover:fill-[#007fff] ${activeIcon === 1 ? iconColor : ''}`} d="M9.66699 22.2713C9.66699 19.2193 9.66699 17.694 10.3603 16.43C11.051 15.1647 12.3163 14.3807 14.8457 12.81L17.5123 11.1553C20.1857 9.49535 21.523 8.66602 23.0003 8.66602C24.4777 8.66602 25.8137 9.49535 28.4883 11.1553L31.155 12.81C33.6843 14.3807 34.9497 15.1647 35.6417 16.43C36.3337 17.6953 36.3337 19.2193 36.3337 22.27V24.2993C36.3337 29.4993 36.3337 32.1007 34.771 33.7167C33.2083 35.3327 30.695 35.3327 25.667 35.3327H20.3337C15.3057 35.3327 12.791 35.3327 11.2297 33.7167C9.66833 32.1007 9.66699 29.5007 9.66699 24.2993V22.2713Z" fill="#014085" />
    </svg>

    const Planning = <svg className="m-1 overflow-visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${animationFill} group-hover:fill-[#003F7F] ${activeIcon === 2 ? bgFill : ''}`} width="46" height="46" rx="23" fill="#007fff" />
        <path className={`${animationFill} group-hover:fill-[#007fff] ${activeIcon === 2 ? iconColor : ''} `} d="M35.6323 18.8817C35.9077 18.5183 36.0365 18.0565 35.9911 17.595C35.9457 17.1335 35.7297 16.7089 35.3893 16.4119C35.0489 16.1149 34.6111 15.969 34.1694 16.0055C33.7277 16.042 33.3171 16.2578 33.0253 16.607L28.9587 21.7157C28.1214 22.7701 27.6032 23.4123 27.18 23.8127C27.0693 23.9251 26.9453 24.0223 26.8111 24.1018L26.7862 24.1136L26.7681 24.1042L26.7613 24.1018C26.6263 24.0225 26.5016 23.9253 26.3902 23.8127C25.967 23.4099 25.4511 22.7701 24.6115 21.7157L23.9507 20.8864C23.2084 19.9504 22.5363 19.1092 21.9117 18.5168C21.2305 17.8723 20.3729 17.2989 19.2414 17.2989C18.1099 17.2989 17.2544 17.8723 16.571 18.5168C15.9464 19.1092 15.2766 19.9504 14.5343 20.8864L10.393 26.0851C10.2504 26.2645 10.1429 26.4715 10.0766 26.6944C10.0104 26.9173 9.98676 27.1517 10.007 27.3841C10.048 27.8536 10.2654 28.2868 10.6114 28.5885C10.9574 28.8901 11.4037 29.0355 11.8521 28.9926C12.3004 28.9497 12.7142 28.7221 13.0023 28.3598L17.0689 23.2511C17.9062 22.1967 18.4244 21.5546 18.8476 21.1541C18.9583 21.0417 19.0823 20.9446 19.2165 20.865L19.2323 20.8579L19.2414 20.8556C19.2474 20.8556 19.2557 20.8587 19.2663 20.865C19.4013 20.9444 19.526 21.0415 19.6374 21.1541C20.0606 21.5569 20.5765 22.1967 21.4161 23.2511L22.0769 24.0805C22.8214 25.0164 23.4913 25.8576 24.1159 26.45C24.797 27.0945 25.6547 27.6679 26.7862 27.6679C27.9177 27.6679 28.7731 27.0945 29.4566 26.45C30.0812 25.8576 30.751 25.0164 31.4933 24.0805L35.6323 18.8817Z" fill="#014085" />
    </svg>

    const Ranking = <svg className="m-1 overflow-visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${animationFill} group-hover:fill-[#003F7F] ${activeIcon === 3 ? bgFill : ''}`} width="46" height="46" rx="23" fill="#007fff" />
        <path className={`${animationFill} group-hover:fill-[#007fff] ${activeIcon === 3 ? iconColor : ''}`} d="M35.4908 25.0306L35.7898 21.8638C36.0238 19.3782 36.1408 18.1341 35.7144 17.6206C35.6068 17.4871 35.4739 17.3763 35.3233 17.2944C35.1727 17.2125 35.0074 17.1612 34.8369 17.1435C34.2182 17.0889 33.4421 17.9729 31.8886 19.7409C31.0852 20.6561 30.6835 21.1124 30.2364 21.1839C29.9866 21.2231 29.7308 21.1821 29.5058 21.0669C29.0911 20.8589 28.8168 20.2934 28.2643 19.1637L25.3563 13.2045C24.3137 11.0686 23.7924 10 22.9994 10C22.2065 10 21.6852 11.0686 20.6426 13.2045L17.7346 19.1637C17.1834 20.2947 16.9078 20.8589 16.4931 21.0669C16.2678 21.1813 16.0123 21.2222 15.7625 21.1839C15.3153 21.1124 14.9136 20.6561 14.1103 19.7409C12.5568 17.9729 11.7807 17.0889 11.1619 17.1435C10.9915 17.1612 10.8262 17.2125 10.6756 17.2944C10.525 17.3763 10.392 17.4871 10.2845 17.6206C9.85938 18.1341 9.97637 19.3782 10.2104 21.8638L10.5081 25.0306C10.9994 30.2462 11.2438 32.8553 12.783 34.427C14.3183 36 16.6218 36 21.2315 36H24.7661C29.3745 36 31.678 36 33.2159 34.427C34.7537 32.854 34.9994 30.2462 35.4908 25.0306Z" fill="#014085" />
    </svg>

    const Store = <svg className="m-1 overflow-visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`${animationFill} group-hover:fill-[#003F7F] ${activeIcon === 4 ? bgFill : ''}`} width="46" height="46" rx="23" fill="#007fff" />
        <path className={`${animationFill} group-hover:fill-[#007fff] ${activeIcon === 4 ? iconColor : ''}`} d="M13.245 36C12.4786 36 11.8227 35.7174 11.2774 35.1521C10.7321 34.5868 10.459 33.9065 10.458 33.1111V21.6278C9.92387 21.1222 9.51186 20.4722 9.22201 19.6778C8.93216 18.8833 8.92613 18.0167 9.20389 17.0778L10.6671 12.1667C10.8529 11.5407 11.184 11.0231 11.6606 10.6139C12.1372 10.2046 12.6886 10 13.3147 10H32.6843C33.3113 10 33.8571 10.1989 34.3216 10.5966C34.7861 10.9943 35.1229 11.5176 35.3319 12.1667L36.7951 17.0778C37.0738 18.0167 37.0682 18.8713 36.7784 19.6417C36.4885 20.412 36.076 21.0741 35.5409 21.6278V33.1111C35.5409 33.9056 35.2683 34.5859 34.7229 35.1521C34.1776 35.7183 33.5213 36.001 32.7539 36H13.245ZM26.0652 20.1111C26.6922 20.1111 27.1684 19.8887 27.4935 19.4438C27.8187 18.9989 27.9464 18.4991 27.8767 17.9444L27.1103 12.8889H24.393V18.2333C24.393 18.7389 24.5556 19.1785 24.8807 19.5521C25.2059 19.9257 25.6007 20.1121 26.0652 20.1111ZM19.7944 20.1111C20.3286 20.1111 20.7643 19.9243 21.1015 19.5507C21.4388 19.177 21.6069 18.7379 21.606 18.2333V12.8889H18.8887L18.1223 17.9444C18.0294 18.5222 18.1511 19.0278 18.4874 19.4611C18.8236 19.8944 19.2593 20.1111 19.7944 20.1111ZM13.5934 20.1111C14.0114 20.1111 14.377 19.9546 14.6901 19.6417C15.0032 19.3287 15.195 18.9315 15.2656 18.45L16.032 12.8889H13.3147L11.9212 17.7278C11.7819 18.2093 11.8571 18.7269 12.147 19.2806C12.4368 19.8343 12.9189 20.1111 13.5934 20.1111ZM32.4056 20.1111C33.0791 20.1111 33.5668 19.8343 33.8687 19.2806C34.1707 18.7269 34.2403 18.2093 34.0778 17.7278L32.6146 12.8889H29.967L30.7334 18.45C30.8031 18.9315 30.9949 19.3287 31.3089 19.6417C31.6229 19.9546 31.9884 20.1111 32.4056 20.1111Z" fill="#014085" />
    </svg>

    const VouviWord = <svg width="120" height="36" viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="149.03" y="1.7281" width="6.32022" height="32.7619" rx="3.16011" fill="white" />
        <path d="M126.781 34.49C125.66 34.49 124.642 33.8377 124.174 32.8198L111.861 6.04014C110.907 3.96492 112.423 1.59911 114.707 1.59911C115.952 1.59911 117.079 2.33616 117.577 3.4767L128.091 27.5248C128.471 28.3933 127.835 29.366 126.887 29.366C125.938 29.366 125.302 28.391 125.684 27.5223L136.292 3.39704C136.772 2.30448 137.853 1.59911 139.046 1.59911C141.241 1.59911 142.697 3.87181 141.78 5.86537L129.387 32.8198C128.919 33.8377 127.901 34.49 126.781 34.49Z" fill="white" />
        <path d="M91.0817 35.2639C88.3858 35.2639 85.9455 34.6624 83.761 33.4592C81.6228 32.2098 79.9495 30.4976 78.741 28.3227C77.5325 26.1478 76.9283 23.6259 76.9283 20.7568V4.73656C76.9283 3.0038 78.333 1.59911 80.0657 1.59911V1.59911C81.7985 1.59911 83.2032 3.00379 83.2032 4.73656V20.4792C83.2032 22.2839 83.5053 23.8572 84.1096 25.1992C84.7603 26.4949 85.6899 27.4898 86.8984 28.1839C88.1069 28.878 89.5246 29.2251 91.1514 29.2251C93.6149 29.2251 95.5438 28.4616 96.9382 26.9345C98.3326 25.3612 99.0299 23.2094 99.0299 20.4792V4.73656C99.0299 3.0038 100.435 1.59911 102.167 1.59911V1.59911C103.9 1.59911 105.305 3.0038 105.305 4.73656V20.7568C105.305 23.6259 104.701 26.1478 103.492 28.3227C102.284 30.4976 100.61 32.2098 98.4721 33.4592C96.3805 34.6624 93.917 35.2639 91.0817 35.2639Z" fill="white" />
        <path d="M53.6467 35.2639C50.4065 35.2639 47.4903 34.5015 44.8981 32.9766C42.306 31.4517 40.2461 29.3955 38.7186 26.8078C37.1911 24.1739 36.4273 21.2397 36.4273 18.0051C36.4273 14.8167 37.1911 11.9518 38.7186 9.41033C40.2461 6.82266 42.306 4.76638 44.8981 3.24151C47.4903 1.71663 50.4065 0.954193 53.6467 0.954193C56.8406 0.954193 59.7336 1.71663 62.3258 3.24151C64.9643 4.72018 67.0472 6.75335 68.5748 9.34102C70.1023 11.9287 70.866 14.8167 70.866 18.0051C70.866 21.2397 70.1023 24.1739 68.5748 26.8078C67.0472 29.3955 64.9643 31.4517 62.3258 32.9766C59.7336 34.5015 56.8406 35.2639 53.6467 35.2639ZM53.6467 29.2337C55.7297 29.2337 57.5812 28.7486 59.2013 27.7782C60.8214 26.8078 62.0944 25.4909 63.0201 23.8274C63.9459 22.1176 64.4088 20.1769 64.4088 18.0051C64.4088 15.8795 63.9228 13.985 62.9507 12.3215C62.0249 10.658 60.752 9.36412 59.1319 8.43996C57.5581 7.46958 55.7297 6.98439 53.6467 6.98439C51.5637 6.98439 49.7122 7.46958 48.0921 8.43996C46.472 9.36412 45.199 10.658 44.2732 12.3215C43.3475 13.985 42.8846 15.8795 42.8846 18.0051C42.8846 20.1769 43.3475 22.1176 44.2732 23.8274C45.199 25.4909 46.472 26.8078 48.0921 27.7782C49.7122 28.7486 51.5637 29.2337 53.6467 29.2337Z" fill="white" />
        <path d="M17.6601 34.49C16.5397 34.49 15.5219 33.8377 15.0538 32.8198L2.74069 6.04014C1.78651 3.96492 3.30263 1.59911 5.5867 1.59911C6.83149 1.59911 7.95816 2.33616 8.45682 3.4767L18.971 27.5248C19.3507 28.3933 18.7144 29.366 17.7665 29.366C16.8174 29.366 16.1811 28.391 16.5631 27.5223L27.1713 3.39704C27.6517 2.30448 28.7324 1.59911 29.9259 1.59911C32.1201 1.59911 33.5765 3.87181 32.6599 5.86537L20.2665 32.8198C19.7984 33.8377 18.7805 34.49 17.6601 34.49Z" fill="white" />
    </svg>

    return (
        <header className="flex items-center justify-around w-11/12 m-auto py-10">
            <LogoWhite Name={VouviWord} width={"90px"} />
            <nav className="flex">

                <div onClick={() => IconStates(1)}>
                    <Navigation width={"w-[224px] group"} icon={Learn} title={"Aprender"} />
                </div>

                <div onClick={() => IconStates(2)}>
                    <Navigation width={"w-[204px] group "} icon={Planning} title={"Planejar"} />
                </div>

                <div onClick={() => IconStates(3)}>
                    <Navigation width={"w-[204px] group"} icon={Ranking} title={"Ranking"} />
                </div>

                <div onClick={() => IconStates(4)}>
                    <Navigation width={"w-[145px] group"} icon={Store} title={"Loja"} />
                </div>

            </nav>
            <div className="flex">
                {/* Confira o arquivo AvatarFull */}

                <AvatarBasic name={"Ana Caroline"} />

                {/* <Settings/> */}

                {/* <AvatarFull
                    nome={"Ana carolina"}
                    xp={"XP"}
                    xpvalue={"13.657"}
                    vcoins={Vicon} // img
                    vcoinsvalue={"938"}
                /> */}

            </div>
            <hr className="h-[1px] border-0 absolute w-[100%] bg-[#F5F5F442] mt-36 left-0" />
        </header>
    )
}
export default HeaderIntern