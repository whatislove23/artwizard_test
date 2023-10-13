import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className="mx-20 my-4 flex justify-between items-center">
      <Image src={"/logo.svg"} alt="Artwizrd logo" width={232} height={60} />
      <nav>
        <ul className="flex items-center">
          <li>
            <Link className={styles.link} href="/">
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
            <Link className={styles.link} href="/">
              Артист
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/artist">
              Для бізнесів
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/about">
              Про нас
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contacts">
              Контакти
            </Link>
          </li>
          <li>
            <Link className={styles.mobileLink} href="/mobile">
              У додатку краще!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
