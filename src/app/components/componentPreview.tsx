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
      <Field className="gap-4 border border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors">
        <Image src={image} alt={title} width={300} height={300}/>
        <Label className="text-sm/6 font-bold text-white">
          {title}
        </Label>
      </Field>
    </Link>
  );
}

export default ComponentPreview;
