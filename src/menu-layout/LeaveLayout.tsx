import { FileSearch, List, ListChecks, Notebook } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

interface Item {
  label: string
  icon: JSX.Element
  path: string
  active?: boolean
  badge?: string
}

const leave: Item[] = [
  {
    label: 'List',
    icon: <List size={18} />,
    path: '/leave/',
    active: true,
  },
  {
    label: 'Review',
    icon: <FileSearch size={18} />,
    path: '/leave/review',
    active: true,
  },
  {
    label: 'Approve',
    icon: <ListChecks size={18} />,
    path: '/leave/approve',
    active: true,
  },
  {
    label: 'Ledger',
    icon: <Notebook size={18} />,
    path: '/leave/ledger',
    active: true,
  },
]

export default function LeaveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const location = useLocation()

  return (
    <>
      {/* Header Menu */}
      <div className=" bg-blue-50 scrollbar-hidden flex laptop:justify-start mobileS:justify-center laptop:px-4 gap-3 overflow-hidden border-t-2 border-blue-100">
        {leave.map((item, index) => {
          const isActive = item.path === location.pathname
          return (
            <div key={index}>
              <Link to={item.path}>
                <div
                  className={` flex items-center px-3 text-sm ${
                    isActive
                      ? 'text-blue-600 font-medium border-b-2 border-powderBlue'
                      : 'text-black  hover:font-semibold  hover:delay-150  hover:-translate-y-1 hover:scale-105'
                  }`}
                >
                  <div
                    className="flex rounded-3xl p-2"
                    data-pr-tooltip={item.label}
                  >
                    {item.icon}
                  </div>
                  <div className="flex laptop:w-full tablet:text-sm laptop:block mobileS:hidden mobileS:w-14">
                    {item.label}
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {/* Main Container */}
      <div className=" text-black px-4 laptop:py-8 mobileS:pb-10 mobileS:pt-4 laptop:h-[90%] mobileS:h-mobile  overflow-y-auto scrollbar-thin overflow-x-hidden ">
        {children}
      </div>
    </>
  )
}
