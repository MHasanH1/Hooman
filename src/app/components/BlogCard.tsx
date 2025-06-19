export default function BlogCard() {
  return (
    <>
      <div
        className="rounded-xl p-2 bg-cover mx-2 h-50 relative flex items-end"
        style={{ backgroundImage: "url('/roadMap.svg')" }}
      >
        <button className="absolute top-2 right-2 border-2 border-[var(--primary)] flex items-center justify-center rounded-full size-12">
          arrow
        </button>
        <div className="w-full text-center py-1.5 bg-black/70 rounded-xl">
          پرینتر سه بعدی چیست؟
        </div>
      </div>
    </>
  );
}
