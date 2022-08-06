import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import dynamic from 'next/dynamic'
import NavIcon from "../public/logo.svg"
import Gifh from "../public/forgif.gif"
// import Image from 'next/img';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// bg-[#EA3323] dark
// bg-[#F24535] light
export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-black pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">पंChayat</span>
                  <img
                    className="h-auto w-auto sm:h-10"
                    src={NavIcon.src}
                    alt="पंChayat"
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="https://metaverse-mu-blush.vercel.app/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-[#F24535] text-white font-medium hover:bg-[#EA3323]"
              >
                Launch App
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={NavIcon.src}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#F24535]">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="mt-6 px-5">
                  <a
                    href="https://metaverse-mu-blush.vercel.app/"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-[#F24535] text-white font-medium hover:bg-[#EA3323]"
                  >
                    Launch App
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="text-[#EA3323]">पं</span><span className="text-white">Chayat</span>
                    <span className="block">A better way for</span>
                    <span className="block text-[#EA3323]">DAOs</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Bring inclusiveness and democratization to the DAO world
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="https://metaverse-mu-blush.vercel.app/"
                            className="block w-full py-3 px-4 rounded-md shadow bg-[#F24535] text-white font-medium hover:bg-[#EA3323] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EA3323] focus:ring-offset-gray-900"
                          >
                            Launch App
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-20 p-2">
              <img
                    className="h-auto w-auto rounded-xl border-4 border-[#EA3323]"
                    src={Gifh.src}
                    alt=""
                  />
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
