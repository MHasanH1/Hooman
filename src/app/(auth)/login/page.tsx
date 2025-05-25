// app/@auth/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function LoginModal() {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        router.back();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    router.push("/verification");
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white py-10 px-15 rounded-lg w-full max-w-xl"
        style={{ boxShadow: "0px 0px 10px 1px #0B0B0B33" }}
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-[#46566C]">
            به هومان خوش آمدید
          </h2>
          <span className="text-[#929DAC]">
            لطفا برای ثبت نام فرم زیر را پر کرده و روی دکمه عضویت کلیک کنید.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <img
              src="/user.svg"
              alt="user icon"
              className="absolute top-1/4 right-3"
            />
            <input
              type="text"
              className="w-full p-2 px-10 placeholder:text-[#BDC3CC] my-1 border rounded-sm border-[#E6E8EA]"
              placeholder="نام"
              required
            />
          </div>

          <div className="relative">
            <img
              src="/user.svg"
              alt="user icon"
              className="absolute top-1/4 right-3"
            />
            <input
              type="text"
              className="w-full p-2 px-10 placeholder:text-[#BDC3CC] my-1 border rounded-sm border-[#E6E8EA]"
              placeholder="نام خانوادگی"
              required
            />
          </div>

          <div className="relative">
            <img
              src="/phone.svg"
              alt="phone icon"
              className="absolute top-1/4 right-3"
            />
            <input
              type="text"
              className="w-full p-2 px-10 placeholder:text-[#BDC3CC] my-1 border rounded-sm border-[#E6E8EA]"
              placeholder="شماره همراه"
              required
              pattern="09[0-9]{9}" // Iranian phone number pattern
            />
          </div>

          <div className="text-center my-8">
            <span className="text-[#929DAC] text-sm">
              ساخت حساب کاربری به معنای قبول
              <span className="text-[#B42C9A]"> قوانین و مقررات </span>
              آمازون ابزار است.
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#B42C9A] cursor-pointer text-white py-2 rounded hover:bg-opacity-90"
          >
            عضویت
          </button>
        </form>
      </div>
    </div>
  );
}