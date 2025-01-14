import clsx from "clsx";
import Logo from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center border border-neutral-200  bg-white dark:border-neutral-700 dark:bg-black",
        {
          "h-[40px] w-[40px] rounded-lg": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        }
      )}
    >
      <Logo
        className={clsx({
          "h-[16px] w-[16px] rounded-lg": !size,
          "h-[10px] w-[10px] rounded-lg": size === "sm",
        })}
      />
    </div>
  );
}
