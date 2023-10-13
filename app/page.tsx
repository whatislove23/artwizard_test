import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const manrope = Manrope({ subsets: ["cyrillic-ext"] });
export default function Home() {
  return (
    <main className="mx-20 mt-10 ">
      <h1 className="text-9xl font-medium text-mygrey-900">
        Твій кишеньковий мольфар мистецтва
      </h1>
      <div className="mt-6 flex justify-between">
        <div className="">
          <p
            className={[
              manrope.className,
              "font-bold text-lg text-mygrey-900",
            ].join(" ")}
          >
            Слідкуй за розкладом в зручному додатку
          </p>
          <div className="flex gap-2 mt-8">
            <Link href="">
              <Image
                src={"./google.svg"}
                alt="Download from Playmarket"
                width={166}
                height={48}
                className="hover:cursor-pointer"
              />
            </Link>
            <Link href="">
              <Image
                src={"/apple.svg"}
                alt="Download from Appstore"
                width={166}
                height={48}
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="Hero image"
          width={898}
          height={946}
          className="-mt-36 mr-28"
        />
      </div>
    </main>
  );
}
