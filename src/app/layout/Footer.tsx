import Link from "next/link";

function Footer() {
  const styles = `
  span {
    width: fit-content;
    height: fit-content;
  }
  `;
  return (
    <>
      <style>{styles}</style>
      <footer className="flex gap-25 px-15 py-10 inset-shadow-sm inset-shadow-[#B3B3B32E] mt-5">
        <div className="w-full">
          <div>
            <img src="/Logo.svg" alt="hooman logo" />
          </div>
          <p className="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            velit sunt autem eligendi accusamus beatae at nam rem nisi delectus
            deserunt praesentium, possimus tempore aliquid.
          </p>
          {/* <div className="flex gap-2">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div> */}
        </div>
        <div className="grid gap- w-full">
          <span className="text-[var(--primary)]">Contact</span>
          <span dir="ltr">+20 11 43 63 73 41</span>
          <span>fawzisayed1209@gmail.com</span>
          <span>fawziuiux.com</span>
        </div>
        <div className="w-full">
          <span className="text-[var(--primary)]">Navigation</span>
          <ul className="grid gap-3 mt-3">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/aboutus"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Service</Link>
            </li>
            <li>
              <Link href={"/"}>Resume</Link>
            </li>
            <li>
              <Link href={"/"}>Project</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
