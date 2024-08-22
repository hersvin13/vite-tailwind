import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  CalendarPlus,
  CalendarStar,
  CalendarX,
  CaretLeft,
  CaretRight,
  Clock,
  ClockAfternoon,
  ClockCountdown,
  CurrencyDollar,
  DoorOpen,
  FileText,
  FolderOpen,
  Folders,
  GridFour,
  Receipt,
} from '@phosphor-icons/react'

interface Item {
  label: string
  icon: JSX.Element
  path: string
  active?: boolean
  badge?: string
}

const items: Item[] = [
  {
    label: 'Dashboard',
    icon: <GridFour size={22} />,
    path: '/dashboard/',
    active: true,
  },
  {
    label: 'Calendar',
    icon: <Calendar size={22} />,
    path: '/calendar/',
  },
  {
    label: 'Loan',
    icon: <Receipt size={22} />,
    path: '/loan/',
  },
]

const menuItems: Item[] = [
  {
    label: 'Change of Schedule',
    icon: <CalendarStar size={22} />,
    path: '/cos/',
  },
  {
    label: 'CTO',
    icon: <ClockCountdown size={22} />,
    path: '/cto/',
  },
  {
    label: 'Leave',
    icon: <DoorOpen size={22} />,
    badge: '',
    path: '/leave/',
  },
  {
    label: 'Missed Log',
    icon: <CalendarX size={22} />,
    badge: '',
    path: '/missed-log/',
  },
  {
    label: 'Official Work',
    icon: <Briefcase size={22} />,
    path: '/official-work/',
  },
  {
    label: 'Offset',
    icon: <CalendarPlus size={22} />,
    path: '/offset/',
  },
  {
    label: 'Overtime',
    icon: <ClockAfternoon size={22} />,
    path: '/overtime/',
  },
]

const employeesitems: Item[] = [
  {
    label: '201 Files',
    icon: <FileText size={22} />,
    path: '/files201/',
  },
  {
    label: 'Employees Fillings',
    icon: <FolderOpen size={22} />,
    path: '/employee-fillings/',
  },
  {
    label: 'Payroll',
    icon: <CurrencyDollar size={22} />,
    path: '/payroll/',
  },
  {
    label: 'Reports',
    icon: <Folders size={22} />,
    path: '/reports/',
  },
  {
    label: 'Timekeeping',
    icon: <Clock size={22} />,
    path: '/timekeeping/',
  },
]

interface SidebarProps {
  isSidebarMinimized: boolean
  handleMinimizeSidebar: () => void
  className?: string
  isOpen?: boolean
  toggleOpen?: () => void
}

const SidebarLayout: React.FC<SidebarProps> = ({
  isSidebarMinimized,
  handleMinimizeSidebar,
  className,
  isOpen,
}) => {
  const location = useLocation()

  return (
    <motion.div
      style={
        {
          // display: isOpen ? "none" : "block",
        }
      }
      initial={{
        width: '256px',
      }}
      animate={{
        width: isSidebarMinimized ? '80px' : '256px',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut', restDelta: 0.5 }}
      // className={`${className} w-[256px] mobileS:h-screen ${isOpen ? "hidden mobileS:hidden laptop:block" : ""}`}
      className={`${className} mobileS:h-screen hidden laptop:block ${isOpen ? 'mobileS:hidden' : 'mobileS:block'}`}
    >
      <div
        className={`tablet:block mobileS:hidden absolute  ${isSidebarMinimized ? 'w-full text-center' : 'w-full text-end px-3'}`}
      >
        {isSidebarMinimized ? (
          <motion.button
            onClick={handleMinimizeSidebar}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="my-4 p-1 items-center translate-x-10 bg-gradient-to-r from-powderBlue via-blue-400 to-blue-200 h-auto rounded-2xl z-9999"
          >
            <CaretRight size={22} className="flex flex-row justify-end" />
          </motion.button>
        ) : (
          <div className="flex items-center justify-between">
            <div></div>
            <div>
              <motion.button
                onClick={handleMinimizeSidebar}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="my-4 p-1 translate-x-7 bg-gradient-to-r from-powderBlue via-blue-400 to-blue-200 h-auto rounded-2xl z-9999"
              >
                <CaretLeft size={22} />
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className=" flex flex-col py-5 gap-3 h-full mobileS:h-mobile laptop:overflow-hidden mobileS:overflow-y-scroll">
        {/* Search Items */}

        {/* Main Items */}
        <div className="z-999">
          {items.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <div key={index} className="my-2">
                <Link
                  to={item.path}
                  // title={item.label}
                  data-pr-tooltip={item.label}
                  data-pr-position="right"
                  data-pr-at="right+2 top"
                  data-pr-my="left center-2"
                  className={` flex items-center px-3 text-lg ${
                    isActive
                      ? `bg-gradient-to-r from-powderBlue via-blue-400 to-blue-200 text-black font-medium py-1 ${isSidebarMinimized ? 'flex flex-col justify-center' : ''}`
                      : `text-white font-normal ${isSidebarMinimized ? 'flex flex-col justify-center hover:text-orangeTheme' : 'hover:bg-orangeTheme  hover:delay-150  hover:-translate-y-1 hover:scale-105 hover:rounded-r-3xl hover:mr-10'}`
                  }`}
                >
                  <span
                    className={`transition-colors ease-in-out duration-300 ${
                      isSidebarMinimized ? 'text-center' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`transition-colors text-[12px] ease-in-out duration-300 mx-2 ${
                      isSidebarMinimized ? 'hidden' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="ml-auto">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        {item.badge}
                      </span>
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Menu Items */}
        <div>
          <span
            className={`text-white bg-powderBlue px-3 rounded-xl mx-3 ${isSidebarMinimized ? 'flex justify-center text-sm border-b-2 py-2' : 'pl-2'}`}
          >
            Menu
          </span>
          {menuItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <div key={index} className="my-2">
                <Link
                  to={item.path}
                  // title={item.label}
                  data-pr-tooltip={item.label}
                  data-pr-position="right"
                  data-pr-at="right+2 top"
                  data-pr-my="left center-2"
                  className={` flex items-center px-3 text-lg ${
                    isActive
                      ? `bg-gradient-to-r from-powderBlue via-blue-400 to-blue-200 text-black font-medium py-1 ${isSidebarMinimized ? 'flex flex-col justify-center' : ''}`
                      : `text-white font-normal ${isSidebarMinimized ? 'flex flex-col justify-center hover:text-orangeTheme' : 'hover:bg-orangeTheme  hover:delay-150  hover:-translate-y-1 hover:scale-105 hover:rounded-r-3xl hover:mr-10'}`
                  }`}
                >
                  <span
                    className={`transition-colors ease-in-out duration-300 ${
                      isSidebarMinimized ? 'text-center' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`transition-colors text-[12px] ease-in-out duration-300 mx-2 ${
                      isSidebarMinimized ? 'hidden' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="ml-auto">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        {item.badge}
                      </span>
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>

        {/* Employee Items */}
        <div>
          <span
            className={`text-white bg-powderBlue px-3 rounded-xl mx-3 ${isSidebarMinimized ? 'flex justify-center text-[10px] border-b-2 py-2' : 'pl-2'}`}
          >
            Employee
          </span>
          {employeesitems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <div key={index} className="my-2">
                <Link
                  to={item.path}
                  // title={item.label}
                  data-pr-tooltip={item.label}
                  data-pr-position="right"
                  data-pr-at="right+2 top"
                  data-pr-my="left center-2"
                  className={` flex items-center px-3 text-lg ${
                    isActive
                      ? `bg-gradient-to-r from-powderBlue via-blue-400 to-blue-200 text-black font-medium py-1 ${isSidebarMinimized ? 'flex flex-col justify-center' : ''}`
                      : `text-white font-normal ${isSidebarMinimized ? 'flex flex-col justify-center hover:text-orangeTheme' : 'hover:bg-orangeTheme  hover:delay-150  hover:-translate-y-1 hover:scale-105 hover:rounded-r-3xl hover:mr-10'}`
                  }`}
                >
                  <span
                    className={`transition-colors ease-in-out duration-300 ${
                      isSidebarMinimized ? 'text-center' : ''
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`transition-colors text-[12px] ease-in-out duration-300 mx-2 ${
                      isSidebarMinimized ? 'hidden' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="ml-auto">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                        {item.badge}
                      </span>
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default SidebarLayout
