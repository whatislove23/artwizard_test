import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const manrope = Manrope({ subsets: ["cyrillic-ext"] });
export default function Home() {
  return (
    <main className="lg:mx-20 md:mx-6 mx-4 mt-10 ">
      <h1 className="xl:text-[124px] lg:text-8xl md:text-5xl text-3xl font-medium text-mygrey-900">
        Твій кишеньковий мольфар мистецтва
      </h1>
      <div className="lg:met-6 lg:flex mt-4">
        <div className="flex flex-col w-full">
          <p
            className={[
              manrope.className,
              "font-bold text-lg text-mygrey-900",
            ].join(" ")}
          >
            Слідкуй за розкладом в зручному додатку
          </p>
          <div className="lg:mt-8 md:flex-row flex flex-col  gap-2 mt-6">
            <Link href="https://play.google.com/store/apps/details?id=com.lisovyk.ArtWizard&utm_source=landing">
              <Image
                src={"./google.svg"}
                alt="Download from Playmarket"
                width={166}
                height={48}
                className="hover:cursor-pointer"
              />
            </Link>
            <Link href="https://apps.apple.com/us/app/artwizard/id1660785285?utm_source=landing">
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
          width={870}
          height={947}
          className="xl:mr-40 xl:-mt-[143px] xl:-mt-[123px] xl:w-[870px] xl:h-[947px] lg:-mt-[122px]  lg:-mr-[9px] lg:w-[737px] lg:h-[801px] md:w-[698px] md:h-[758px] w-[349px] h-[379px]"
        />
      </div>
    </main>
  );
}
