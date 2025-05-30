"use client";
import dynamic from "next/dynamic";
import { useCallback, useState, useRef } from "react";
import { toast } from "react-hot-toast";

const ModelViewer = dynamic(() => import("./ModelViewer"), {
  ssr: false,
});

function UploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validExtensions = [".stl", ".glb", ".usdz"];
  const handleFileChange = (selectedFile: File) => {
    const fileExtension = selectedFile.name
      .toLowerCase()
      .slice(selectedFile.name.lastIndexOf("."));

    if (!validExtensions.includes(fileExtension)) {
      toast.error("لطفاً یک فایل با فرمت .STL یا .GLB بارگذاری کنید");
      return;
    }

    setFile(selectedFile);
    toast.success("فایل با موفقیت بارگذاری شد");
  };

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  }, []);

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-[#3D3E43]">
          بارگذاری فایل سه بعدی
        </h3>
        <span className="text-black text-sm">
          در حال حاضر جهت دقت و نتیجه بهتر پیشنهاد میکنیم فایل های با فرمت .STL
          را بارگذاری کنید.
        </span>

        <div
          className={`mt-3 border-2 border-dashed rounded flex flex-col items-center w-full p-6 pt-2 transition-colors
            ${
              isDragging
                ? "border-[#9F19AB] bg-[#20909910]"
                : "border-[#209099]"
            }`}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
        >
          <img src="/uploadCloud.svg" alt="upload" />

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept={validExtensions.join(",")}
            onChange={(e) =>
              e.target.files?.[0] && handleFileChange(e.target.files[0])
            }
          />

          <button
            onClick={handleButtonClick}
            className="flex items-center gap-2 text-white px-7 text-sm py-2.5 my-6 rounded-md bg-gradient-to-r from-[#209099] to-[#9F19AB] hover:from-[#1a7a82] hover:to-[#8c1797] transition-colors"
          >
            <img src="/download.svg" alt="download icon" />
            بارگذاری فایل
          </button>

          <span className="block text-black mb-2">
            فایل را بکشید و رها کنید یا برای انتخاب کیلیک نمایید.
          </span>
          <span className="text-[#7C7E88] text-xs">
            شما میتوانید فایل با حجم کمتر از 10 مگابایت بارگذاری کنید
          </span>
        </div>
      </div>
      {file && (
        <div className="mt-8">
          <div className="mb-4 text-center">
            <p className="text-[#209099]">فایل انتخاب شده: {file.name}</p>
            <button
              onClick={() => setFile(null)}
              className="text-red-500 text-sm mt-2 hover:text-red-700"
            >
              حذف فایل
            </button>
          </div>
          <ModelViewer file={file} />
        </div>
      )}
    </>
  );
}

export default UploadBox;
