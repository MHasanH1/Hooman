function ModelHeader() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <button
            className="bg-[#00000033] border border-[#00000040] flex items-center gap-2 px-15 py-3 rounded text-[#162A34C7] text-sm font-bold"
            style={{ boxShadow: "0px 2px 5px 0px gray" }}
          >
            <img
              src="/ArrowRight.svg"
              alt="arrow left"
              className="rotate-180"
            />
            New qoute
          </button>
          <div>
            <span className="block mb-1 font-bold text-sm text-[#5E5E5E96]">
              Configuration
            </span>
            <span className="text-black font-bold">WO00812150</span>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex gap-2 items-center text-[#001A27A3]/64">
            {/* <img src="" alt="" /> */}
            Save qoute
          </div>
          <div className="flex gap-2 items-center text-[#001A27A3]/64">
            {/* <img src="" alt="" /> */}
            Freeze the price
          </div>
          <div className="flex gap-2 items-center text-[#001A27A3]/64">
            {/* <img src="" alt="" /> */}
            Add a file
          </div>
          {/* <img src="" alt="" />
            <img src="" alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default ModelHeader;
