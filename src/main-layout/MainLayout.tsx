import React, { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import SidebarLayout from './SidebarLayout'
import HeaderLayout from './HeaderLayout'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)

  const handleMinimizeSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized)
  }
  const { height } = useWindowSize()

  useEffect(() => {
    if (height <= 425) {
      setIsOpen(true)
      // setIsSidebarMinimized(true);
    } else {
      // setIsOpen(false);
      // setIsSidebarMinimized(false);
    }
  }, [height])

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <HeaderLayout isOpen={isOpen} toggleOpen={toggleOpen} />
        <div className="flex w-full  mobileS:w-full">
          <SidebarLayout
            isOpen={!isOpen}
            toggleOpen={toggleOpen}
            isSidebarMinimized={isSidebarMinimized}
            handleMinimizeSidebar={handleMinimizeSidebar}
            className="h-screen bg-[#3468C0] shadow-xl shadow-slate-500 tablet:relative mobileS:w-full mobileS:fixed mobileS:z-999"
          />
          <main className="h-full overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  )
}
