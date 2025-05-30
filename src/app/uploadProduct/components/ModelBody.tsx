"use client";

import { useState } from "react";

enum ConfigurationState {
  COMPLETED = "COMPLETED",
  PROCESSING = "PROCESSING",
  CANCELLED = "CANCELLED",
}

function ModelBody() {
  const [showConfiguration, setShowConfiguration] = useState<boolean>(true);
  const configurationStates: string[] = [
    "Completed",
    "Processing",
    "Cencelled",
  ];
  const [configurationState, setConfigurationState] = useState<string[]>();
  return (
    <>
      <div
        className="rounded border border-[#00000040] w-full p-4 my-5"
        style={{ boxShadow: "0px 2px 5px 0px gray" }}
      >
        <div
          className="w-full flex gap-10 px-3 border border-[#00000040] text-[#001A27A3] p-2 rounded text-sm"
          style={{ boxShadow: "0px 2px 5px 0px gray" }}
        >
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            File 1 of 1
          </div>
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            Duplicate
          </div>
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            Remove
          </div>
        </div>
        <div
          className="grid grid-cols-3 mt-3 gap-x-5 gap-y-3"
          style={{ gridTemplateColumns: "1fr 2.5fr 1fr" }}
        >
          <div
            className="rounded border border-[#00000040] h-65"
            style={{ boxShadow: "0px 2px 5px 0px gray" }}
          >
            {/* <ModelViewer /> */}
          </div>
          <div
            className="flex rounded border border-[#00000040] px-4 py-2 justify-between"
            style={{ boxShadow: "0px 2px 5px 0px gray" }}
          >
            <div className="flex gap-10">
              <div className="text-[#092143] font-bold flex flex-col justify-between">
                <span>Country / regoin</span>
                <span>Main item / product</span>
                <span>Business type</span>
                <span>Representative / CEOs name</span>
                <span>Safety / quality approvals</span>
              </div>
              <div className="text-[#5E5E5E] text-sm flex flex-col justify-between">
                <span>Bandar abass, Iran</span>
                <span>K food fiber slim</span>
                <span>manufacturer, exporter</span>
                <span>full name</span>
                <span>manufacturer, exporter</span>
              </div>
            </div>
            <div className="self-end text-sm text-[#5E5E5E]">
              <div className="flex gap-2 mb-1">
                {/* <img src="" alt="" /> */}
                Check by an expert not requested
              </div>
              <div className="flex gap-2">
                {/* <img src="" alt="" /> */}
                No oriqinal file orientation
              </div>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateRows: "1fr 1.75fr" }}>
            <div
              className="font-bold items-center rounded border border-[#00000040] flex text-3xl justify-between mb-3 px-5 py-3 text-[#001A27A6]/65"
              style={{ boxShadow: "0px 2px 5px 0px gray" }}
            >
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <div
              className="text-center rounded border border-[#00000040] pt-5 flex flex-col"
              style={{ boxShadow: "0px 2px 5px 0px gray" }}
            >
              <div className="">
                <span className="text-[#162A34BA] text-md font-bold block mx-auto mb-2">
                  Price (VAT not incl.)
                </span>
                <span className="text-[#162A34] text-md font-bold">
                  <span className="text-2xl">36</span>
                  ,53 $
                </span>
              </div>
              <div className="bg-[#00000033] mt-auto rounded text-center font-bold text-[#162A34BA] py-2">
                Per part: 36,53 $
              </div>
            </div>
          </div>
          <div className="rounded text-[#162A34C7] text-center font-bold bg-[#00000033] border-[#00000040] py-3">
            Analysis in progress...
          </div>
          <button
            onClick={() => {
              setShowConfiguration(!showConfiguration);
            }}
            className="rounded flex gap-3 items-center justify-center bg-[#00000033] text-[#B6359CE3] font-bold py-3 border-[#00000040]"
          >
            Customize configuration
            <img
              src="/dropdownArrowP.svg"
              className={`transition duration-200 ${
                showConfiguration ? "rotate-180" : ""
              }`}
              alt="arrow"
            />
          </button>
          <div className="rounded text-[#162A34C7] text-center font-bold bg-[#00000033] border-[#00000040] py-3">
            View prices
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: showConfiguration ? "1fr" : "0fr",
          transition: "grid-template-rows .2s ease",
        }}
        className="overflow-hidden"
      >
        <div style={{ minHeight: 0 }}>
          <div className="grid grid-cols-4 bg-[#A1ABB7] rounded p-3 gap-3 mb-3">
            <button className="text-center py-4 text-white bg-[#092143] rounded">
              Completed
            </button>
            <button className="text-center py-4 text-[#092143] bg-white rounded">
              Processing
            </button>
            <button className="text-center py-4 text-[#092143] bg-white rounded">
              Cancelled
            </button>
            <button className="text-center py-4 text-[#092143] bg-white rounded">
              Cancelled
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div
              className="grid grid-rows-2"
              style={{ gridTemplateRows: "1fr 3fr" }}
            >
              <button className="mb-1 rounded px-4 py-2 flex justify-between items-center border border-[#0000002B]">
                <div>
                  <span className="block text-[#46566CBF] mb-2">
                    Technnology
                  </span>
                  <div className="flex items-center gap-2 text-[#46566C] font-bold">
                    {/* <img src="" alt="" /> */}
                    3D Printing - Multi Jet Fusion (MJF)
                  </div>
                </div>
                <img src="/dropdownArrow.svg" className="mr-5" alt="arrow" />
              </button>
              <div className="rounded py-2 border border-[#0000002B]"></div>
            </div>
            <div className="border border-[#0000002B] rounded py-8 px-8">
              <h4 className="text-2xl text-[#46566C] mb-8 font-bold">
                3D Printing - Multi Jet Fusion (MJF)
              </h4>
              <p className="text-sm/10 font-bold text-[#46566CBF]">
                Lorem Ipsum is a fabricated text produced by the printing
                industry with its incomprehensible simplicity, and used by
                graphic designers, printers and newspapers and magazines in
                columns and rows as required, and for current technological
                conditions, and various applications aimed at improving
                practical tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelBody;
