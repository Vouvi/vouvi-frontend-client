function Tags({ text }) {
  return (
    <>
      <p className="m-2 rounded-[24px] bg-[rgba(31,31,31,0.20);] px-3 py-1.5 sm:text-[30px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px] text-[#252525] dark:bg-[#1F1F1F] dark:text-[#F5F5F480] whitespace-nowrap">
        {text}
      </p>
    </>
  );
}
export default Tags;
