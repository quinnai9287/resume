"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { usePathname } from 'next/navigation'
import Link from "next/link";

interface Props {
  title: string;
  description: readonly string[];
  dates: string;
  location?: string;
  image?: string;
  credit?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  credit,
  location,
  image,
  links,
}: Props) {

  const pathname = usePathname ();
  const assetsPrefix = pathname.includes('resume') ? '/resume' : '';

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={assetsPrefix+image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h3 className="font-semibold leading-none">{title}</h3>
        {credit && (
          <p className="text-sm text-muted-foreground mb-2">{credit}</p>
        )}
        {/* {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )} */}
        {
          description && description.length > 0 && (
            <ul className="list-disc pl-6 mb-2">
              {description?.map((desc, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  {desc}
                </li>
              ))}
            </ul>
          )
        }
      </div>
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
    </li>
  );
}
