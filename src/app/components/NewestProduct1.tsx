export default function NewestProduct1() {
  return (
    <>
      <div
        dir="rtl"
        className="rounded-b-2xl border border-[var(--primary)] bg-[#1D293980] mx-2"
      >
        <div
          className="relative h-50 bg-cover"
          style={{
            backgroundImage: "url('/roadMap.svg')",
          }}
        >
          <button className="absolute rounded-full bg-black/25 flex items-center justify-center right-1 top-1 size-7">
            h{/* <img src="" alt="" /> */}
          </button>
          {/* <img src="/roadMap.svg" alt="" /> */}
        </div>
        <div className="p-3">
          <div>
            <span className="block text-xs mb-1">نام محصول</span>
            <span className="block text-sm">اسب مشکی</span>
          </div>
          <div className="flex justify-between mt-5">
            <div>
              <span className="block text-xs mb-1">بازه قیمت به تومان</span>
              <span className="block text-sm" dir="ltr">
                3,000,000_4,500,500
              </span>
            </div>
            <button className="flex justify-center items-center bg-[var(--primary)] px-3 py-2 h-fit self-end rounded-2xl">
              {/* <img src="" alt="" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
