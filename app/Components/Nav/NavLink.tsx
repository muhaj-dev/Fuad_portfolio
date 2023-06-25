"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  text: string;
  className?: string;
};

const NavLink = ({ path, text, className, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`${
          !className
            ? `${
                pathname == path
                  ? "bg-[#232967] rounded-md w-full "
                  : " border-transparent"
              } py-2.5 transition-all ease-in relative`
            : className
        }`}
        href={path}
        {...props}
      >
        <div 
        className={`${
            !className
              ? `${
                  pathname == path
                    ? "h-[40px] absolute right-0 -top-[3px] w-[2px] bg-[#FC1818] rounded-sm "
                    : " bg-transparent"
                } absolute`
              : className
          }`}
        />
        <Image
          src={text}
          className="mx-auto"
          alt="lang"
          key={path}
          width={12}
          height={12}
          //   priority
        />
      </Link>
    </>
  );
};

export default NavLink;
