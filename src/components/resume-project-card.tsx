"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description?: readonly string[];
  dates: string;
  location: string;
  image?: string;
  poster?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ResumeProjectCard({
  title,
  description,
  dates,
  location,
  image,
  poster,
  links,
}: Props) {

  const pathname = usePathname ();
  const assetsPrefix = pathname.includes('resume') ? '/resume' : '';


  return (
    <div className="relative p-3 border border-gray-300 dark:border-gray-500  rounded-lg">
      <Image src={assetsPrefix+poster} alt={title} width={300} height={200} className="object-top rounded mb-2 object-cover w-full md:h-[150px]" />
      <div className="flex mb-3 items-center gap-2 select-none">
        <Avatar className="border size-5 bg-muted-background dark:bg-foreground">
            <AvatarImage
                src={assetsPrefix+image}
                alt={title}
                className="object-contain"
            />
        </Avatar>
        <h3 className="text-xs font-bold text-black dark:text-white">{title}</h3>
      </div>
        {/* {
          description && description.length > 0 && (
            <ul className="list-circle pl-6 mb-4">
              {description?.map((desc, idx) => (
                <li key={idx} className="stext-muted-foreground">
                  {desc}
                </li>
              ))}
            </ul>
          )
        } */}
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
