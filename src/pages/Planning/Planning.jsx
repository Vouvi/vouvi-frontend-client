import { useState } from "react";

import HeaderMobile from "../../components/Header/HeaderMobile";
import HeaderIntern from "../../components/Header/HeaderIntern";
import AvatarFull from "../../components/Header/AvatarFull";
import Footer from "../../components/Footer/Footer";

// Modals
import NewIncome from "../../components/Modals/NewIncome";
import NewExpense from "../../components/Modals/NewExpense";
import NotesModal from "../../components/Modals/NotesModal";
import Note from "../../components/Modals/Note";
import BudgetModal from "../../components/Modals/BudgetModal";
import BudgetDetails from "../../components/Modals/BudgetDetails";
import BudgetDetailsEdit from "../../components/Modals/BudgetDetailsEdit";
import ChooseAccount from "../../components/Modals/ChooseAccount";
import ChooseExpenseCategory from "../../components/Modals/ChooseExpenseCategory";
import ChooseIncomeCategory from "../../components/Modals/ChooseIncomeCategory";
import TipFromFin from "../../components/Modals/TipFromFin";

import axios from "axios";
import { useEffect } from "react";

import Top from "./Top";
import Graphics from "./Graphics";
import Goals from "./Goals";

function Planning() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark"),
  );

  const [activeContent, setActiveContent] = useState("graphics");

  const handleClickGraphics = () => setActiveContent("graphics");
  const handleClickGoals = () => setActiveContent("goals");

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/transaction")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Erro ao buscar conquistas:", error));
  }, []);

  return (
    <>
      <NewIncome />
      <NewExpense />
      <NotesModal />
      <Note />
      <BudgetModal />
      <BudgetDetails />
      <BudgetDetailsEdit />
      <ChooseAccount />
      <ChooseExpenseCategory />
      <ChooseIncomeCategory />
      <TipFromFin />

      <HeaderIntern
        iconActiveNumber={1}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <AvatarFull />
      </HeaderIntern>

      <main className="m-auto w-11/12">
        <Top onClick={handleClickGraphics} onClick2={handleClickGoals} />

        {activeContent === "graphics" ? <Graphics /> : <Goals />}
      </main>

      <Footer />
      <HeaderMobile iconId={1}/>
    </>
  );
}

export default Planning;
