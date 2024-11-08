function Insigne({ icon, title, text }) {
  return (
    <div className="my-5 flex text-[#471650] group-hover:text-white transition-colors duration-500 dark:text-white">
      <div className="flex-none rounded-md bg-[rgba(255,255,255,0.50);] p-4 dark:bg-[#3c3c3c]">
        <img className="h-[130px] w-[116px]" src={icon} />
      </div>

      <div className="ml-5 leading-[1] ">
        <h1 className="text-[40px] font-medium">{title}</h1>
        <p className="text-[24px]">{text}</p>
      </div>
    </div>
  );
}
export default Insigne;
