import Card from "./components/Card";
import MultiSlider from "../components/MultiSlider";

function page() {
  return (
    <>
      <div className="px-30">
        <MultiSlider />
        <div className="rounded-sm border border-white p-5 pb-2 bg-[#162A34]">
          <div className="flex justify-between items-center">
            <ul className="flex list-none gap-5">
              <li>همه</li>
              <li>آموزشی</li>
              <li>تکنولوژی</li>
              <li>رویدادها</li>
              <li>نمایشگاه ها</li>
            </ul>
            <div className="flex gap-5">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="جست و جو"
                className="px-7 py-2 bg-white rounded-sm w-75 placeholder:text-gray-400"
              />
              <button>تاریخ</button>
            </div>
          </div>
          <span className="mt-2 block text-sm">
            4 مقاله در دسته بندی{" "}
            <span className="text-[#398DED]"> آموزشی </span>
            منتشر شده. |
          </span>
        </div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-10 mt-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default page;
