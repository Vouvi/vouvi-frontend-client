import LogoWhite from "../Header/LogoWhite"
import VouviWord from '../../assets/images/vouvi-white.svg'
function Footer() {

    const VouviWord =<svg width="120" height="36" viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="149.03" y="1.7281" width="6.32022" height="32.7619" rx="3.16011" fill="white"/>
    <path d="M126.781 34.49C125.66 34.49 124.642 33.8377 124.174 32.8198L111.861 6.04014C110.907 3.96492 112.423 1.59911 114.707 1.59911C115.952 1.59911 117.079 2.33616 117.577 3.4767L128.091 27.5248C128.471 28.3933 127.835 29.366 126.887 29.366C125.938 29.366 125.302 28.391 125.684 27.5223L136.292 3.39704C136.772 2.30448 137.853 1.59911 139.046 1.59911C141.241 1.59911 142.697 3.87181 141.78 5.86537L129.387 32.8198C128.919 33.8377 127.901 34.49 126.781 34.49Z" fill="white"/>
    <path d="M91.0817 35.2639C88.3858 35.2639 85.9455 34.6624 83.761 33.4592C81.6228 32.2098 79.9495 30.4976 78.741 28.3227C77.5325 26.1478 76.9283 23.6259 76.9283 20.7568V4.73656C76.9283 3.0038 78.333 1.59911 80.0657 1.59911V1.59911C81.7985 1.59911 83.2032 3.00379 83.2032 4.73656V20.4792C83.2032 22.2839 83.5053 23.8572 84.1096 25.1992C84.7603 26.4949 85.6899 27.4898 86.8984 28.1839C88.1069 28.878 89.5246 29.2251 91.1514 29.2251C93.6149 29.2251 95.5438 28.4616 96.9382 26.9345C98.3326 25.3612 99.0299 23.2094 99.0299 20.4792V4.73656C99.0299 3.0038 100.435 1.59911 102.167 1.59911V1.59911C103.9 1.59911 105.305 3.0038 105.305 4.73656V20.7568C105.305 23.6259 104.701 26.1478 103.492 28.3227C102.284 30.4976 100.61 32.2098 98.4721 33.4592C96.3805 34.6624 93.917 35.2639 91.0817 35.2639Z" fill="white"/>
    <path d="M53.6467 35.2639C50.4065 35.2639 47.4903 34.5015 44.8981 32.9766C42.306 31.4517 40.2461 29.3955 38.7186 26.8078C37.1911 24.1739 36.4273 21.2397 36.4273 18.0051C36.4273 14.8167 37.1911 11.9518 38.7186 9.41033C40.2461 6.82266 42.306 4.76638 44.8981 3.24151C47.4903 1.71663 50.4065 0.954193 53.6467 0.954193C56.8406 0.954193 59.7336 1.71663 62.3258 3.24151C64.9643 4.72018 67.0472 6.75335 68.5748 9.34102C70.1023 11.9287 70.866 14.8167 70.866 18.0051C70.866 21.2397 70.1023 24.1739 68.5748 26.8078C67.0472 29.3955 64.9643 31.4517 62.3258 32.9766C59.7336 34.5015 56.8406 35.2639 53.6467 35.2639ZM53.6467 29.2337C55.7297 29.2337 57.5812 28.7486 59.2013 27.7782C60.8214 26.8078 62.0944 25.4909 63.0201 23.8274C63.9459 22.1176 64.4088 20.1769 64.4088 18.0051C64.4088 15.8795 63.9228 13.985 62.9507 12.3215C62.0249 10.658 60.752 9.36412 59.1319 8.43996C57.5581 7.46958 55.7297 6.98439 53.6467 6.98439C51.5637 6.98439 49.7122 7.46958 48.0921 8.43996C46.472 9.36412 45.199 10.658 44.2732 12.3215C43.3475 13.985 42.8846 15.8795 42.8846 18.0051C42.8846 20.1769 43.3475 22.1176 44.2732 23.8274C45.199 25.4909 46.472 26.8078 48.0921 27.7782C49.7122 28.7486 51.5637 29.2337 53.6467 29.2337Z" fill="white"/>
    <path d="M17.6601 34.49C16.5397 34.49 15.5219 33.8377 15.0538 32.8198L2.74069 6.04014C1.78651 3.96492 3.30263 1.59911 5.5867 1.59911C6.83149 1.59911 7.95816 2.33616 8.45682 3.4767L18.971 27.5248C19.3507 28.3933 18.7144 29.366 17.7665 29.366C16.8174 29.366 16.1811 28.391 16.5631 27.5223L27.1713 3.39704C27.6517 2.30448 28.7324 1.59911 29.9259 1.59911C32.1201 1.59911 33.5765 3.87181 32.6599 5.86537L20.2665 32.8198C19.7984 33.8377 18.7805 34.49 17.6601 34.49Z" fill="white"/>
    </svg>

    return (
        <footer className="flex justify-around p-12 w-12/12 m-auto items-center bg-primary-200 mt-60">
            <LogoWhite Name={VouviWord} width={"90"} />
            <p className=" text-center font-light text-[24px] text-white">© 2024 Vouvi. Todos os direitos reservados.</p>
            <div className="flex">
                {/* Insta */}
                <svg className="mx-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.4679 0C29.1679 0.00719983 30.5382 0.0215995 31.7214 0.0551987L32.187 0.0719982C32.7246 0.0911977 33.255 0.115197 33.8957 0.143996C36.4493 0.263993 38.1916 0.667184 39.7204 1.25997C41.3044 1.86955 42.6387 2.69513 43.9731 4.0271C45.1939 5.22643 46.1383 6.67777 46.7402 8.2798C47.333 9.80856 47.7362 11.5509 47.8562 14.1069C47.885 14.7452 47.909 15.2756 47.9282 15.8156L47.9426 16.2812C47.9786 17.462 47.993 18.8323 47.9978 21.5323L48.0002 23.3226V26.4666C48.0061 28.2171 47.9876 29.9676 47.945 31.7176L47.9306 32.1832C47.9114 32.7232 47.8874 33.2536 47.8586 33.892C47.7386 36.4479 47.3306 38.1879 46.7402 39.719C46.1383 41.3211 45.1939 42.7724 43.9731 43.9717C42.7738 45.1926 41.3224 46.1369 39.7204 46.7389C38.1916 47.3317 36.4493 47.7348 33.8957 47.8548L32.187 47.9268L31.7214 47.9412C30.5382 47.9748 29.1679 47.9916 26.4679 47.9964L24.6776 47.9988H21.536C19.7847 48.005 18.0334 47.9866 16.2826 47.9436L15.817 47.9292C15.2473 47.9077 14.6777 47.8829 14.1082 47.8548C11.5547 47.7348 9.81233 47.3317 8.28117 46.7389C6.68 46.1366 5.2295 45.1923 4.03087 43.9717C2.80917 42.7726 1.86398 41.3213 1.26134 39.719C0.668549 38.1903 0.265359 36.4479 0.145361 33.892L0.0733633 32.1832L0.0613639 31.7176C0.0171234 29.9676 -0.00287824 28.2171 0.00136508 26.4666V21.5323C-0.00527771 19.7818 0.0123237 18.0312 0.054164 16.2812L0.0709635 15.8156C0.090163 15.2756 0.114162 14.7452 0.142962 14.1069C0.262959 11.5509 0.666149 9.81096 1.25893 8.2798C1.86299 6.67711 2.80983 5.22572 4.03327 4.0271C5.23121 2.80685 6.68085 1.86253 8.28117 1.25997C9.81233 0.667184 11.5523 0.263993 14.1082 0.143996C14.7466 0.115197 15.2794 0.0911977 15.817 0.0719982L16.2826 0.0575984C18.0326 0.0149581 19.7831 -0.00344319 21.5336 0.00239977L26.4679 0ZM24.0008 11.9997C20.8183 11.9997 17.7661 13.264 15.5157 15.5143C13.2653 17.7647 12.0011 20.8169 12.0011 23.9994C12.0011 27.1819 13.2653 30.2341 15.5157 32.4845C17.7661 34.7349 20.8183 35.9991 24.0008 35.9991C27.1833 35.9991 30.2355 34.7349 32.4859 32.4845C34.7362 30.2341 36.0005 27.1819 36.0005 23.9994C36.0005 20.8169 34.7362 17.7647 32.4859 15.5143C30.2355 13.264 27.1833 11.9997 24.0008 11.9997ZM24.0008 16.7996C24.9463 16.7994 25.8825 16.9855 26.7561 17.3472C27.6297 17.7089 28.4235 18.2391 29.0922 18.9075C29.7609 19.576 30.2913 20.3696 30.6533 21.2431C31.0153 22.1165 31.2017 23.0527 31.2018 23.9982C31.202 24.9437 31.0159 25.88 30.6542 26.7536C30.2925 27.6271 29.7623 28.4209 29.0939 29.0896C28.4254 29.7583 27.6318 30.2888 26.7583 30.6507C25.8849 31.0127 24.9487 31.1991 24.0032 31.1992C22.0937 31.1992 20.2624 30.4407 18.9121 29.0905C17.5619 27.7402 16.8034 25.9089 16.8034 23.9994C16.8034 22.0899 17.5619 20.2586 18.9121 18.9084C20.2624 17.5581 22.0937 16.7996 24.0032 16.7996M36.6029 8.3998C35.8073 8.3998 35.0442 8.71586 34.4816 9.27845C33.919 9.84105 33.603 10.6041 33.603 11.3997C33.603 12.1954 33.919 12.9584 34.4816 13.521C35.0442 14.0836 35.8073 14.3997 36.6029 14.3997C37.3985 14.3997 38.1616 14.0836 38.7242 13.521C39.2867 12.9584 39.6028 12.1954 39.6028 11.3997C39.6028 10.6041 39.2867 9.84105 38.7242 9.27845C38.1616 8.71586 37.3985 8.3998 36.6029 8.3998Z" fill="#280B3D" />
                </svg>
                {/* Facebook */}
                <svg className="mx-3" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.1681 24.0602C48.1681 10.7789 37.4161 0 24.1681 0C10.9201 0 0.168091 10.7789 0.168091 24.0602C0.168091 35.7053 8.42409 45.4015 19.3681 47.6391V31.2782H14.5681V24.0602H19.3681V18.0451C19.3681 13.4015 23.1361 9.62406 27.7681 9.62406H33.7681V16.8421H28.9681C27.6481 16.8421 26.5681 17.9248 26.5681 19.2481V24.0602H33.7681V31.2782H26.5681V48C38.6881 46.797 48.1681 36.5474 48.1681 24.0602Z" fill="#280B3D" />
                </svg>
                {/* Linkedin */}
                <svg className="mx-3" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.8348 0C44.2492 0 45.6058 0.561903 46.606 1.5621C47.6062 2.56229 48.1681 3.91885 48.1681 5.33333V42.6667C48.1681 44.0812 47.6062 45.4377 46.606 46.4379C45.6058 47.4381 44.2492 48 42.8348 48H5.50142C4.08694 48 2.73038 47.4381 1.73019 46.4379C0.729994 45.4377 0.168091 44.0812 0.168091 42.6667V5.33333C0.168091 3.91885 0.729994 2.56229 1.73019 1.5621C2.73038 0.561903 4.08694 0 5.50142 0H42.8348ZM41.5014 41.3333V27.2C41.5014 24.8944 40.5855 22.6832 38.9552 21.0529C37.3249 19.4226 35.1137 18.5067 32.8081 18.5067C30.5414 18.5067 27.9014 19.8933 26.6214 21.9733V19.0133H19.1814V41.3333H26.6214V28.1867C26.6214 26.1333 28.2748 24.4533 30.3281 24.4533C31.3182 24.4533 32.2678 24.8467 32.968 25.5468C33.6681 26.2469 34.0614 27.1965 34.0614 28.1867V41.3333H41.5014ZM10.5148 14.8267C11.7029 14.8267 12.8424 14.3547 13.6826 13.5145C14.5228 12.6743 14.9948 11.5348 14.9948 10.3467C14.9948 7.86667 12.9948 5.84 10.5148 5.84C9.31952 5.84 8.17323 6.31481 7.32806 7.15997C6.4829 8.00514 6.00809 9.15142 6.00809 10.3467C6.00809 12.8267 8.03476 14.8267 10.5148 14.8267ZM14.2214 41.3333V19.0133H6.83476V41.3333H14.2214Z" fill="#280B3D" />
                </svg>
                {/* Twitter */}
                <svg className="mx-3" width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.9681 0.249023H45.3292L29.2492 18.6742L48.1681 43.7507H33.3567L21.7475 28.545L8.47895 43.7507H1.11095L18.3087 24.0365L0.168091 0.252452H15.3567L25.8344 14.1485L37.9681 0.249023ZM35.3795 39.3347H39.4595L13.1281 4.43531H8.75323L35.3795 39.3347Z" fill="#280B3D" />
                </svg>
                {/* Info */}
                <svg className="mx-3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0L42 0C43.5913 0 45.1174 0.632141 46.2426 1.75736C47.3679 2.88258 48 4.4087 48 6V42C48 43.5913 47.3679 45.1174 46.2426 46.2426C45.1174 47.3679 43.5913 48 42 48H6C4.4087 48 2.88258 47.3679 1.75736 46.2426C0.632141 45.1174 0 43.5913 0 42V6ZM26.79 19.764L19.92 20.625L19.674 21.765L21.024 22.014C21.906 22.224 22.08 22.542 21.888 23.421L19.674 33.825C19.092 36.516 19.989 37.782 22.098 37.782C23.733 37.782 25.632 37.026 26.493 35.988L26.757 34.74C26.157 35.268 25.281 35.478 24.699 35.478C23.874 35.478 23.574 34.899 23.787 33.879L26.79 19.764ZM24 16.5C24.7956 16.5 25.5587 16.1839 26.1213 15.6213C26.6839 15.0587 27 14.2956 27 13.5C27 12.7044 26.6839 11.9413 26.1213 11.3787C25.5587 10.8161 24.7956 10.5 24 10.5C23.2044 10.5 22.4413 10.8161 21.8787 11.3787C21.3161 11.9413 21 12.7044 21 13.5C21 14.2956 21.3161 15.0587 21.8787 15.6213C22.4413 16.1839 23.2044 16.5 24 16.5Z" fill="#280B3D" />
                </svg>

            </div>
        </footer>
    )
}
export default Footer