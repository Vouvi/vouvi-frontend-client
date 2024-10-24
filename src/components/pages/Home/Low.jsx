import FeedbackCard from "../../Cards/FeedbackCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Subscription from "../../Cards/SubscriptionCard";
import FiveStars from "../../../assets/images/fivestars-icon.svg";
import { Link } from "react-router-dom";

function Low() {
  const TextGradient =
    "text-[transparent] bg-[linear-gradient(90deg,#02020B_0%,#3D3D3D_100%);] dark:bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text";

  return (
    <>
      <section className="flex m-auto w-10/12 bg-slate-500 relative mt-[200px]">
        <div className="flex flex-col w-[60%]">
          <div className="flex justify-between">
            <FeedbackCard
              color={"bg-[#FA7ABC] text-[#A90057]"}
              text={"Manda a real!"}
            />
            <FeedbackCard
              img={FiveStars}
              color={"bg-[#FABE7A] text-[#773F00]"}
              text={"Avalie-nos"}
            />
          </div>
          <div className="flex justify-between mt-6">
            <FeedbackCard
              color={"bg-[#84CE7A] text-[#0A5800]"}
              text={"Solta o verbo!"}
            />
            <FeedbackCard
              color={"bg-[#B88AD9] text-[#480479]"}
              text={`Diz aí, Mandamos bem?`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start ml-10 w-[40%]">
          <div className="flex flex-col">
            <h1 className={`${TextGradient} text-2xl font-medium`}>
              A Gente Cresce Com Seu Feedback
            </h1>
            <p className={`${TextGradient} text-base mt-5 mb-16`}>
              Você faz parte do Time.
              <br /> Queremos te ouvir!
            </p>
          </div>
          <SecondaryButton
            color={
              " text-white hover:text-black bg-black dark:text-black dark:bg-white"
            }
            text={"Enviar feedback"}
          />
        </div>
      </section>

      <section>
        <h1
          className={`${TextGradient} text-2xl text-center xl:leading-[1.2] mt-[160px] font-medium`}
        >
          Escolha o plano e vire o jogo
        </h1>
        <p
          className={`${TextGradient} text-base text-center m-auto mb-20 w-4/6`}
        >
          Do básico ao premium, tem um plano certinho para sua caminhada
          financeira. Bora começar e subir de nível!
        </p>
        <div className="flex justify-evenly">
          <Subscription
            color={"bg-[#007FFF]"}
            colortitle={"text-[#002952]"}
            title={"Free"}
            price={"Gratuito"}
            text1={"Acesso às aulas de educação financeira."}
            text2={"Newsletter duas vezes por semana."}
            text3={"Ferramentas de planejamento."}
            colorbutton={
              "bg-[#002952] hover:outline-[#002952] hover:text-[#002952]"
            }
            texthover={
              "Ideal para quem está começando a aprender sobre finanças."
            }
          />
          <Subscription
            color={
              "bg-primary-200 border-8 border-black outline outline-8 outline-primary-300"
            }
            colortitle={"text-[#35005B]"}
            title={"Premium"}
            price={"R$14,90"}
            mes={"/Mês"}
            text1={"Acesso às aulas personalizadas."}
            text2={"Vida infinita e recompensas únicas."}
            text3={"Relatórios mensais detalhados."}
            bold={"font-medium"}
            colorbutton={
              "bg-primary-300 hover:outline-primary-300 hover:text-primary-300 "
            }
            texthover={
              "Perfeito para quem quer se aprofundar no controle financeiro."
            }
          />
          <Subscription
            color={"bg-[#FFB120] dark:bg-[#FFB12099]"}
            colortitle={"text-[#583900]"}
            title={"Family"}
            price={"R$39,90"}
            mes={"/Mês"}
            text1={"Todos os benefícios do Plano Premium."}
            text2={"Acesso para até 4 pessoas."}
            text3={`Suporte com o fin.`}
            colorbutton={
              "bg-[#6B4B08] hover:outline-[#6B4B08] hover:text-[#6B4B08] "
            }
            texthover={
              "Para profissionais e empresários que buscam otimizar finanças."
            }
          />
        </div>
      </section>

      <section className="w-8/12 m-auto ">
        <p
          className={`${TextGradient} text-base text-center mt-[200px] font-light mb-16`}
        >
          Venha com a gente e faça valer cada centavo. <br />
          <strong className="font-bold">
            Junte-se à
            <strong className="text-primary-200 dark:bg-black ">Vouvi</strong> e
            transforme sua vida financeira!
          </strong>
        </p>
        <Link to={"/create-account"}>
          <PrimaryButton text={"Começar agora!"} />
        </Link>
      </section>
    </>
  );
}
export default Low;
