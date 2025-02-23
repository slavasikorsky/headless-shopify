import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Search from "./search";
import LogoSquare from "@/components/logo-square";

export async function Navbar() {
  const menu = await getMenu("main-menu");

  return (
    <nav className="flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3 items-center ">
          <Link
            href={"/"}
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
          </Link>
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
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">Cart</div>
      </div>
    </nav>
  );
}
