import { Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const manrope = Manrope({ subsets: ["cyrillic-ext"] });
const linkStyle =
  "p-2 px-5 text-mygrey-900 text-sm flex items-center font-semibold transition duration-300 ease-in-out hover:text-mygrey-500";
export default function Footer() {
  return (
    <footer className="xl:px-20 lg:px-20 lg:py-7 md:flex md:justify-between md:pt-7 md:px-6 p-4 border-t border-mygrey-50">
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
          <ul className="md:mt-0 mt-6 flex  flex-wrap  gap-1">
            <li>
              <Link className={linkStyle} href="/">
                Mісто
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
        </nav>
        <div className="mt-6 md:flex-row md:justify-end flex flex-col gap-4">
          <Link href="https://play.google.com/store/apps/details?id=com.lisovyk.ArtWizard&utm_source=landing">
            <Image
              src={"./google_footer.svg"}
              alt="Download from Playmarket"
              width={249}
              height={57}
              className="hover:cursor-pointer"
            />
          </Link>
          <Link href="https://apps.apple.com/us/app/artwizard/id1660785285?utm_source=landing">
            <Image
              src={"/apple_footer.svg"}
              alt="Download from Appstore"
              width={243}
              height={69}
              className="hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
