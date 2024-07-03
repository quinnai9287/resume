"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { usePathname } from 'next/navigation'

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: readonly string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {

  const pathname = usePathname ();
  const assetsPrefix = pathname.includes('resume') ? '/resume' : '';

  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={assetsPrefix+logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <Link href={href || "#"} className="block cursor-pointer" target="_blank">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
            </Link>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        <CardContent className="mt-2 text-xs">
          {
            description && description.length > 1 ? (
              <ol className="list-disc list-outside pl-5 mb-5">
                {description?.map((item, index) => (
                  <li key={index} >
                    <Markdown className="mb-2 prose text-pretty font-sans text-xs md:text-sm text-muted-foreground dark:prose-invert">
                      {item}
                    </Markdown>
                  </li>
                ))}
              </ol>
            ) : description && description[0] ? (
              <Markdown className="mb-3 prose text-pretty font-sans text-xs md:text-sm text-muted-foreground dark:prose-invert">
                {description[0]}
              </Markdown>
            ) : (
              <p>無可顯示的內容。</p>
            )
          }
          
          {badges && (
            <span className="inline-flex gap-1 flex-wrap mb-4">
              {badges.map((badge, index) => (
                <Badge
                  variant="secondary"
                  className="align-middle text-xs whitespace-nowrap"
                  key={index}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          )}
        </CardContent>
      </div>
    </Card>
  );
};
