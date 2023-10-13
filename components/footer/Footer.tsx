import { Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import styles from "../footer/footer.module.css";
const manrope = Manrope({ subsets: ["cyrillic-ext"] });
export default function Footer() {
  return (
    <footer className="px-20 py-7 flex justify-between items-center border-t border-mygrey-50">
      <p
        className={[
          manrope.className,
          "font-base text-mygrey-500 font-medium ",
        ].join(" ")}
      >
        © ArtWizard 2023
      </p>
      <div>
        <nav>
          <ul className="flex items-center justify-end">
            <li>
              <Link className={styles.link} href="/">
                Mісто
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
          </ul>
        </nav>
        <div className="flex gap-4 mt-6">
          <Link href="">
            <Image
              src={"./google_footer.svg"}
              alt="Download from Playmarket"
              width={312}
              height={57}
              className="hover:cursor-pointer"
            />
          </Link>
          <Link href="">
            <Image
              src={"/apple_footer.svg"}
              alt="Download from Appstore"
              width={302}
              height={69}
              className="hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
