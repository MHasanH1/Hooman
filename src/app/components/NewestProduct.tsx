import Link from "next/link";

export default function NewestProduct() {
  return (
    <>
      <div className="rounded-2xl border border-[var(--primary)] bg-[#1D293980] mx-2 h-75 overflow-hidde relative">
        <div className="border-b border-[var(--primary)] px-5 py-3">
          UI/UX Design
        </div>
        <div
          className="bg-cover h-838/1000 rounded-t-none rounded-b-2xl"
          style={{ backgroundImage: "url('/roadMap.svg')" }}
        ></div>
        <div className="absolute -bottom-1 -right-1  bg-[var(--background)] rounded-tl-3xl size-20 p-3">
          <Link href={"/"} className="rounded-full size-18 bg-[#1D293980] flex items-center justify-center">
            {/* <img src="" alt="" /> */}
            arrow
          </Link>
        </div>
      </div>
    </>
  );
}
