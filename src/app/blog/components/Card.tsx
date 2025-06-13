function Card() {
  return (
    <>
      <div
        className="bg-[#162A34] rounded-sm p-4"
        style={{ boxShadow: "0px 1px 5px 1px #ECECEB33" }}
        
      >
        <img src="/blogImg.svg" alt="blog image" className="mb-3 w-full" />
        <div className="mb-8">
          <span className="text-[#398DED] block">دسته بندی بلاگ</span>
          <span>آشنایی با شیرهای کنترل و پوزیشنر</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {/* <img src="" alt="" /> */}
            <span className="text-sm">تولید محتوا</span>
          </div>
          <div className="flex gap-2">
            {/* <img src="" alt="" /> */}
            <span className="text-sm">4 نظر</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
