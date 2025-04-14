// modified headlessui textbox for displaying code with syntax highlighting
// todo: syntax highlighting
import React from 'react'
import { Field, Label, Textarea } from '@headlessui/react'

interface CodeAreaProps {
  code: string;
  language?: string;
}

function CodeArea({code, language = "typescript"}: CodeAreaProps) {
  return (
	<div>
	  <Field>
        <Label className="text-md/6 font-medium text-white">Code</Label>
        <Textarea readOnly value={code} className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"/>
      </Field>
	</div>
  )
}

export default CodeArea
