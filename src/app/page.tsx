import Link from "next/link";
import BlogCard from "./components/BlogCard";
import Hero from "./components/Hero";
import HeroCard from "./components/HeroCard";
import HeroPropsBox from "./components/HeroPropsBox";
import MultiSlider from "./components/MultiSlider";
import NewestProduct from "./components/NewestProduct";
import NewestProduct1 from "./components/NewestProduct1";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-5 px-15">
        <div className="grid grid-cols-4 gap-3">
          <HeroPropsBox text="تضمین بهترین قیمت" />
          <HeroPropsBox text="سفارشی سازی تمام کالا ها" />
          <HeroPropsBox text="قطعات کارشناسی شده" />
          <HeroPropsBox text="تنوع در محصولات موجود" />
        </div>
        <div
          className="flex my-5 gap-10 bg-radial w-full h90 p-5"
          style={{
            background: "radial-gradient(closest-side, #192a38 50%, #001a27",
          }}
        >
          <HeroCard
            className="mt-25"
            text="پرینت سه بعدی"
            description="نمونه سازی سریع قطعات صنعتی، ماکت ها، سازه ها و ساختمانها، مجسمه و طرح های انتزاعی"
          />
          <HeroCard
            className="mb-25"
            text="طراحی و مدل سازی سه بعدی"
            description="طراحی سه بعدی و مدلسازی ایده های مفهومی، قطعات صنعتی ، محصولات،
          مکانیزم ها و پروسه تولید"
          />
          <HeroCard
            className="mt-25"
            text="اسکن سه بعدی"
            description="تولید مدل سه بعدی از قطعات، اشیاء با فرم پیچیده، مجسمه ها با تکسچر و متریال"
          />
        </div>
        <div>
          <div className="flex justify-between mt-20 mb-5">
            <span className="after:content-[''] after:flex after:w-35 after:h-0.5 after:mt-1 after:bg-gradient-to-l after:from-[#209099] after:to-[#B30FC1]">
              جدیدترین محصولات
            </span>
            <button className="flex items-center gap-2 text-sm">
              نمایش همه
              {/* <img src="" alt="" /> */}
            </button>
          </div>
          <MultiSlider>
            <NewestProduct />
          </MultiSlider>
        </div>
        <div>
          <div className="flex justify-between mt-20 mb-5">
            <span className="after:content-[''] after:flex after:w-35 after:h-0.5 after:mt-1 after:bg-gradient-to-l after:from-[#209099] after:to-[#B30FC1]">
              جدیدترین محصولات
            </span>
            <button className="flex items-center gap-2 text-sm">
              نمایش همه
              {/* <img src="" alt="" /> */}
            </button>
          </div>
          <MultiSlider showDots={false} responsiveItemsNum={[5, 4, 2, 1]}>
            <NewestProduct1 />
          </MultiSlider>
        </div>
        <img src="/roadMap.svg" alt="road map" className="my-20" />
        <div>
          <div className="flex justify-between mt-20 mb-5">
            <span className="after:content-[''] after:flex after:w-35 after:h-0.5 after:mt-1 after:bg-gradient-to-l after:from-[#209099] after:to-[#B30FC1]">
              وبلاگ
            </span>
            <Link href={'/blog'} className="flex items-center gap-2 text-sm">
              نمایش همه
              {/* <img src="" alt="" /> */}
            </Link>
          </div>
          <MultiSlider responsiveItemsNum={[3, 3, 2, 1]}> 
            <BlogCard />
          </MultiSlider>
        </div>
      </div>
    </>
  );
}
