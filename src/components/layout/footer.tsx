import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";

export default async function Footer() {
  const menu = await getMenu("footer");
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-t-black">
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {menu.length > 0 && (
          <ul className="hidden gap-6 text-sm md:flex md:iteks-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="text-sm text-gray-400 hover:text-emerald-900 hover:undeerline dark:text-netural-400"
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </footer>
  );
}
