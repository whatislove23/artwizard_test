import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
const linkStyle =
  "p-2 px-5 text-mygrey-900 text-sm flex items-center font-semibold transition duration-300 ease-in-out hover:text-mygrey-500";
function Header() {
  return (
    <header className=" lg:mx-20 md:mx-6 md:my-4 m-4 flex justify-between  items-center ">
      <Image
        src={"/logo.svg"}
        alt="Artwizrd logo"
        width={154}
        height={60}
        className="md:w-[230px] "
      />
      <nav className="flex items-center">
        <ul className="hidden lg:flex w-full">
          <li>
            <Link className={linkStyle} href="/">
              Mісто
              <Image
                src={"/Group.svg"}
                alt="group arrow"
                width={11}
                height={7}
                className="ml-2"
              />
            </Link>
          </li>
          <li>
            <Link className={linkStyle} href="/">
              Артист
            </Link>
          </li>
          <li>
            <Link className={linkStyle} href="/">
              Для бізнесів
            </Link>
          </li>
          <li>
            <Link className={linkStyle} href="/">
              Про нас
            </Link>
          </li>
          <li>
            <Link className={linkStyle} href="/">
              Контакти
            </Link>
          </li>
        </ul>
        <Link
          className={[styles.mobileLink, "hidden md:block "].join(" ")}
          href="/"
        >
          У додатку краще!
        </Link>
        <Link className={[styles.mobileLink, "md:hidden"].join(" ")} href="/">
          Додаток
        </Link>
        <Image
          src={"/icon-start.svg"}
          alt="Burger"
          width={20}
          height={20}
          className="lg:hidden md:w-6 md:h-6 sm:m-3 md:ml-8 m-2 ml-4"
        />
      </nav>
    </header>
  );
}
export default Header;
