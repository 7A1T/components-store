import React from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import NavbarHeader from "@/app/components/navbar";
import ComponentView from "@/app/components/componentView";
import ShufflingLettersWord from "../components/ShufflingLettersWord";

function TextAnimationPage() {
  return (
    <div>
      <NavbarHeader>
        <Link href="/">
          <Button className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm/6 font-medium text-white hover:bg-white/10">
            back
          </Button>
        </Link>
      </NavbarHeader>
      <div className="p-8 sm:p-20 grid place-items-center">
        <ComponentView
          component={
            <div className="flex flex-row gap-4">
              <ShufflingLettersWord
                finalText="TAIT"
                alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              />
              <ShufflingLettersWord
                finalText="VAN"
                alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              />
              <ShufflingLettersWord
                finalText="STRIEN"
                alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default TextAnimationPage;
