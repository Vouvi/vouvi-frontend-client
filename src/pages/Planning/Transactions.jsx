import { PieChart } from "@mui/x-charts";
import PropTypes from "prop-types";
import convertFloat from "../../utils/convertFloat";
import { Icon } from "@iconify/react";

import { useEffect, useState } from "react";
import axios from "axios";

function DailyTransaction({ description, value, type, date, iconSrc }) {
  
  return (
    <li className="mb-2 flex justify-around rounded-md bg-white p-3 text-md dark:bg-black">
      <div className="flex items-center">
        <Icon icon={iconSrc} className="h-12 w-12 rounded-full bg-yellow p-2" />
        <span className="w-1/4 p-4">{description}</span>
      </div>
      <span className="w-1/4 p-4">R$ {convertFloat(value)}</span>
      <span className="w-1/4 p-4 text-center">{type}</span>
      <span className="w-1/4 p-4">{date}</span>
    </li>
  );
}

function Transactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/transaction')
      .then(response => {
        // Ordena as transações por data, mais recentes primeiro
        const sortedTransactions = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTransactions(sortedTransactions);
      })
      .catch(error => console.error('Erro ao buscar transações:', error));
  }, []);

  
  
  
  const performance = 88;

  return (
    <div className="mt-10 flex w-full justify-between dark:text-white">
      <div className="w-7/12 rounded-md bg-[#888] bg-opacity-20 p-6 dark:bg-[#1B1B1B]">
        <h3 className="w-fit rounded-xl bg-primary-200 p-2 text-md font-semibold text-white dark:bg-black">
          Transações
        </h3>

        <br />

        <ul className="max-h-96 overflow-y-scroll">
          <li className="mb-2 flex justify-around text-md">
            <span className="w-1/4 p-4 text-center font-bold">Descrição</span>
            <span className="w-1/4 p-4 text-center font-bold">Valor</span>
            <span className="w-1/4 p-4 text-center font-bold">Tipo</span>
            <span className="w-1/4 p-4 text-center font-bold">Data</span>
          </li>

          {transactions.map((transaction) => (
            <DailyTransaction
              key={transaction.id}
              description={transaction.title}
              value={transaction.value}
              type={transaction.type}
              date={new Date(transaction.date).toLocaleDateString('pt-BR')}
              iconSrc="carbon:money"
            />
          ))}
        </ul>
      </div>

      <div className="relative flex w-2/5 flex-col items-center rounded-md bg-[#888] bg-opacity-20 p-6 dark:bg-[#1B1B1B]">
        <h3 className="text-lg">Desempenho Financeiro</h3>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 50, color: "#480ca8" },
                { id: 1, value: 15, color: "#560bad" },
                { id: 2, value: 15, color: "#7209b7" },
                { id: 3, value: 20, color: "#b5179E" },
              ],

              innerRadius: 150,
              outerRadius: 180,
              cornerRadius: 35,
              startAngle: -90,
              endAngle: 90,
              paddingAngle: 3,
            },
          ]}
          margin={{ top: 150, right: 0, bottom: 0, left: 0 }}
          width={600}
          height={300}
        />

        <span className="absolute top-1/2 text-xl">{performance}%</span>

        <button className="w-4/6 rounded-md border-4 border-black py-3 text-md dark:border-white">
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

DailyTransaction.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.string,
};

export default Transactions;
