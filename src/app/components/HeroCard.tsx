function HeroCard({
  className,
  text,
  description,
}: {
  className?: string;
  text: string;
  description: string;
}) {
  return (
    <>
      <div
        className={`shadow-2xl text-center rounded-sm border border-[#072B40] bg-[#1D293980] px-10 py-8 ${className}`}
        style={{ boxShadow: "-8px 8px 20px 1px black" }}
      >
        {/* <img src="" alt="" /> */}
        <span className="text-xl font-bold">{text}</span>
        <br />
        <span className="text-gray-300 mt-5 text-sm block">{description}</span>
      </div>
    </>
  );
}

export default HeroCard;
