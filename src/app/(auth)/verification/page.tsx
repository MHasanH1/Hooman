// app/@auth/verify/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function VerifyModal() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 minutes
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Handle countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Handle code input changes with RTL focus
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input (right to left)
    if (value && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  // Handle backspace with RTL behavior
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your verification logic here
    console.log("Verification code:", code.join(""));
  };

  const resendCode = () => {
    // Add your resend logic here
    setTimeLeft(90);
    console.log("Resending code...");
  };

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div
        className="bg-white py-10 px-15 rounded-lg w-full max-w-xl"
        style={{ boxShadow: "0px 0px 10px 1px #0B0B0B33" }}
        dir="rtl"
      >
        <h2 className="text-xl text-[#46566C] font-bold mb-10">
          تایید شماره همراه
        </h2>

        <p className="text-[#929DAC] mb-7">
          لطفا کد 4 رقمی ارسال شده به شماره 09171454545 را وارد کنید.
        </p>

        <form onSubmit={handleSubmit} className="">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-full font-bold py-2 text-center text-xl border border-[#E6E8EA] rounded focus:outline-none focus:ring-2 focus:ring-[#B42C9A]"
                dir="ltr" // Individual inputs are LTR for numbers
                inputMode="numeric"
              />
            ))}
          </div>

          <div className="text-start text-[#929DAC] mt-3">
            <span>
              {Math.floor(timeLeft / 60)}:
              {String(timeLeft % 60).padStart(2, "0")}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-7 bg-[#B42C9A] text-white py-2 rounded hover:bg-opacity-90"
            disabled={code.some((d) => !d)}
          >
            تایید
          </button>

          <button
            type="button"
            onClick={resendCode}
            className={`text-[#B42C9A] flex items-center mx-auto my-7 gap-2 ${
              timeLeft > 0
                ? "cursor-not-allowed disabled:opacity-20"
                : "cursor-pointer"
            } font-bold`}
            disabled={timeLeft > 0}
          >
            <img src="/resend.svg" alt="resend icon" />
            ارسال مجدد کد
          </button>

          <hr className="my-5 mt-10 border-[#EAECEF]" />

          <button
            type="button"
            onClick={() => router.back()}
            className="text-[#929DAC] hover:text-gray-500 transition cursor-pointer flex items-center gap-2"
          >
            <img src="/ArrowRight.svg" alt="arrow right" />
            بازگشت به صفحه ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}
