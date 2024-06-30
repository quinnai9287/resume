"use client";


import { usePathname } from 'next/navigation'
import Link from "next/link";

export function LangToggle() {
  
  const pathname = usePathname ();
  const isTW = pathname.includes('zh-tw')
  const linkPrefix = pathname.includes('my-portfolio') ? '/my-portfolio' : '';
  const pathTo = isTW ? `${linkPrefix}/` : `${linkPrefix}/zh-tw`;

  console.log('linkPrefix', linkPrefix);

  return (
    <Link
      href={pathTo}
      className="px-2"
    >
        <span className="font-bold text-neutral-800 dark:text-neutral-200">{isTW ? 'EN' : '中'}</span>
    </Link>
  );
}
