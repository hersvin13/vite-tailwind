import { Link, useLocation } from "react-router-dom";

interface Item {
  label: string;
  icon: JSX.Element;
  path: string;
  active?: boolean;
  badge?: string;
}

const overtime: Item[] = [
  {
    label: "Leave List",
    icon: <i className="fa fa-list" />,
    path: "/leave",
    active: true,
  },
];
export default function OvertimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <>
      {/* Header Menu*/}
      <div className=" bg-blue-200 laptopL:w-full mobileS:w-mobile mobileL:w-mobileL tablet:w-tablet laptop:w-mobile laptop:px-2 mobileS:overflow-x-auto  mobileS:px-4 scrollbar-hidden flex justify-center gap-5 overflow-hidden">
        {overtime.map((item, index) => {
          const isActive = item.path === location.pathname;
          return (
            <div key={index}>
              <Link to={item.path}>
                <div
                  className={` flex items-center laptop:pr-2 py-1 rounded-3xl h-10 my-2 text-sm ${
                    isActive
                      ? "text-blue-600 font-medium bg-white"
                      : "text-black  hover:font-semibold  hover:delay-150  hover:-translate-y-1 hover:scale-105"
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
          );
        })}
      </div>
      {/* Main Container */}
      <div className=" text-black px-4 py-8 mb-10 h-[87%] overflow-y-auto scrollbar-thin overflow-x-hidden">
        {children}
      </div>

      <footer className="w-full text-end text-slate-400 justify-end">
        HRDotNet-v2 All Rights Reserved 2024
      </footer>
    </>
  );
}
