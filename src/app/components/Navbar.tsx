function Navbar() {
  return (
    <>
      <nav
        className="flex px-12 py-3 justify-between mb-10"
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
        <button className="text-white bg-[var(--primary)] rounded-sm px-3 py-0">
          ورود / ثبت نام
        </button>
      </nav>
    </>
  );
}

export default Navbar;
