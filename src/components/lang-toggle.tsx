"use client";

import React, { forwardRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";

// use forwaredRef to pass ref to the child component
export const LangToggle = forwardRef<HTMLAnchorElement>((props, ref) => {
  LangToggle.displayName = 'LangToggle';
  const pathname = usePathname ();
  const isTW = pathname.includes('zh-tw')
  const linkPrefix = pathname.includes('resume') ? '/resume' : '';
  const pathTo = isTW ? `${linkPrefix}/` : `${linkPrefix}/zh-tw`;

  return (
    <Link
      ref={ref}
      href={pathTo}
      className="px-2"
    >
        <span className="font-bold text-neutral-800 dark:text-neutral-200">{isTW ? 'EN' : '中'}</span>
    </Link>
  );
});
