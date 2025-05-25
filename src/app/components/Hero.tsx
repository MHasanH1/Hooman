function Hero() {
  return (
    <>
      <div className="flex items-center px-30 py-10">
        <div className="w-full">
          <h1 className="text-5xl leading-25 mb-10">
            با هومان پلی باش بین
            <span className="block font-extrabold text-7xl bg-gradient-to-l from-[var(--primary)] to-[#01DDFF] text-transparent bg-clip-text">
              تجربه و تکنولوژی{" "}
            </span>
          </h1>
          <button className="mt-15 border-black border-2 rounded-sm px-6 py-4 bg-gradient-to-l from-[#02273A] via-[#021F2E]  to-[#02273A]">
            ثبت سفارش آنلاین
          </button>
        </div>
        <div className="w-full">
          <img src="/Hero.svg" alt="Hero Frame" />
        </div>
      </div>
    </>
  );
}

export default Hero;
