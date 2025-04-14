import React from 'react'

// container that specifies css layout of buttons in a top nav bar
function NavbarHeader({ children }: { children: React.ReactNode }) {
  return (
	<div className='full-width flex flex-row justify-between px-8 py-4'>
	  {children}
	</div>
  )
}

export default NavbarHeader