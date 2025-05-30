import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav
        className="flex px-12 py-3 justify-between"
        style={{ boxShadow: "1px 1px 5px 1px #B3B3B32E" }}
      >
        <div className="flex gap-15 items-center">
          <div>
            <img src="/Logo.svg" alt="hooman logo" />
          </div>
          <ul className="flex gap-12">
            <li>صفحه اصلی</li>
            <li>نمونه کار</li>
            <li>خدمات</li>
            <li>وبلاگ</li>
            <li>استودیو</li>
          </ul>
        </div>
        <Link
          href={"/login"}
          className="text-white bg-[var(--primary)] rounded-sm px-3 py-0 flex items-center"
        >
          ورود / ثبت نام
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
