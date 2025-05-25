import Faq from "./components/Faq";

function page() {
  return (
    <>
      <div className="px-30">
        <div className="px-60">
          <img src="/faq.svg" alt="faq image" className="mx-auto" />
        </div>
        <div className="flex items-center gap-2 mb-4">
          {/* <img src="" alt="" /> */}
          <span>سوالات متداول</span>
        </div>
        <div className="flex flex-column gap-4 mb-10">
          <Faq />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#FFFFFFB2]/70 text-sm mb-4">
            جواب سوال خود را پیدا نکردید؟
          </span>
          <button className="rounded-md bg-[#9F19AB] w-fit px-4 py-2">ارتباط با ما</button>
        </div>
      </div>
    </>
  );
}

export default page;
