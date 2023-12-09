import React from "react";
import clsx from "clsx";
import Link from "next/link";

const variantStyles = {
  primaryClassName: "bg-slate-900 text-white hover:bg-sky-800",
  secondaryClassName:
    "text-slate-900 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80",
  primaryOnDarkClassName: "bg-white hover:bg-sky-50 text-slate-700",
};

// interface ButtonProps {
//   className: string;
//   href: string;
//   variant: string;
// }

const Button = ({ variant = "primary", className, href, ...props }) => {
  className = clsx(
    "inline-flex items-center rounded-full  justify-center px-4 py-2 md:px-7 md:py-3 text-sm md:text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none",
    variantStyles[`${variant}ClassName`],
    className
  );
  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};

export default Button;
