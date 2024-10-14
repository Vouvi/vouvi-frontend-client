import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PasswordInput from "./PasswordInput";
import KeepConected from "./KeepConected";

function Form() {
    let logged = false

    return (
        <div className="flex justify-center items-center h-[90vh] m-5">
            <form className="flex flex-col gap-4 bg-white bg-opacity-90 w-[40%] h-full rounded-sm p-10" action="">
                <h1 className="text-lg text-center font-bold">Bem vindo de volta</h1>

                <label className="text-base" htmlFor="email">E-mail:</label>
                <input className="bg-black bg-opacity-15 p-1 w-full border-b-4 border-b-secondary-200 focus:outline outline-secondary-200 text-base" type="email" name="email" id="email" placeholder="exemplo@email.com" autoComplete="on" required />

                <PasswordInput />

                <KeepConected />

                <input className="w-full bg-primary-200 hover:bg-secondary-200 text-white hover:text-secondary-300 transition-all hover:cursor-pointer py-4 rounded-md text-base font-bold" type="submit" value="Entrar" />

                <div className="flex justify-between">
                    <Link className="login-link" to="/new-account">criar conta</Link> <Link className="login-link" to="/forget-password">esqueci a senha</Link>
                </div>

                <div className="w-full my-5 flex flex-row justify-center items-center gap-5">
                    <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
                    OU
                    <span className="bg-[#BBB] h-2 w-[40%] rounded-xl"></span>
                </div>

                <div className="flex flex-row justify-center items-center gap-3">
                    <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"flat-color-icons:google"} width={"60px"} /></span>
                    <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-facebook"} width={"60px"} /></span>
                    <span className="border-4 p-1 bg-white border-secondary-200 rounded-full"><Icon icon={"ic:baseline-apple"} width={"60px"} /></span>
                </div>
            </form>
        </div>
    );
}

export default Form