import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="w-full max-w-md px-4">
      <Fieldset className="text-sm/6 font-medium text-white">
        <div className="flex justify-center items-center mb-4">
          <Legend className="text-lg font-semibold text-white">
            Contact Me
          </Legend>
          <div className="p-2">
            <Mail />
          </div>
        </div>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Name</Label>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Email </Label>
          <Input
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Message</Label>
          <Textarea className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
        </Field>
      </Fieldset>
      <div className="mt-4 flex justify-end">
        <Button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm/6 font-medium text-white hover:bg-white/10">
          Send
        </Button>
      </div>
    </div>
  );
}
