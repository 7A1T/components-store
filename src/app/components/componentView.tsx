import React from 'react'
import CodeArea from '@/app/components/codeArea'

function ComponentView({component}: { component: React.ReactNode}) {
  return (
	<div className="flex flex-col gap-4 w-full max-w-md">
	  {component}
	  <CodeArea code='code goes here'/>
	</div>
  )
}

export default ComponentView
