import React from 'react'
import ContactForm from '@/app/components/contactForm'
import ComponentView from '@/app/components/componentView'
import { Button } from '@headlessui/react'
import Link from 'next/link'
import NavbarHeader from '@/app/components/navbar'

function ContactFormPage() {
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
        <ComponentView component={<ContactForm />} />
      </div>
    </div>
  );
}

export default ContactFormPage;
