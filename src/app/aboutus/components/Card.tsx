function Card() {
  return (
    <>
      <div className="flex gap-15 p-5 bg-[#162A34] pr-8 pl-20 rounded-sm">
        <div>
          <span className="text-xl mb-3 font-bold block">چشم انداز</span>
          <span className="text-sm">
            ما امید داریم به بزرگترین پلتفرم برای ارائه راهکارهای نوین تامین
            تجهیزات الکترونیک در کشور تبدیل گردد تا بتواند علاوه بر مرتفع نمودن
            نیازهای بازار داخلی، سطح علمی مخاطبان این حوزه را بالا برده و با
            تکیه بر دانش متخصصان گامی مستحکم و پویا در راستای شکوفایی و رشد
            صنایع کشور بردارد.
          </span>
        </div>
        <img src="/eye.svg" alt="eye" />
      </div>
    </>
  );
}

export default Card;
