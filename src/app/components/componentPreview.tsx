import { Field, Label } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ComponentPreview({ title, image, href }: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="block">
      <Field className="gap-4 border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors w-[320px] h-[320px] flex flex-col items-center justify-between">
        <div className="w-full h-[220px] flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <Label className="text-sm/6 font-bold text-white">
          {title}
        </Label>
      </Field>
    </Link>
  );
}

export default ComponentPreview;
