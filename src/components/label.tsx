import clsx from "clsx";
import Price from "./price";

export default function Label({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-2 pb-2 srccontainer/label",
        {
          "lg:px-20 lg:pb-[25%]": position === "center",
        }
      )}
    >
      <div className="flex flex-col xl:w-[70%] w-[100%] rounded-xl p-3 bg-white/70 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/20 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow mb-2 xl:text-lg xl:leading-6 tracking-tight uppercase">
          {title}
        </h3>
        <Price
          className="flex-none text-white mb-2 xl:text-lg"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden src[275px]/label:inline"
        />
        <span className="bg-black p-2 xl:text-lg text-center uppercase rounded-lg hover:bg-black/40 transition-colors ">
          Buy
        </span>
      </div>
    </div>
  );
}
