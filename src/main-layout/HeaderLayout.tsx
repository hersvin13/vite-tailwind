import iot from '../assets/iti-images/logoicon.png'
import logo from '../assets/iti-images/logoname.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, TextIndent, TextOutdent } from '@phosphor-icons/react'

interface Props {
  isOpen: boolean
  toggleOpen: () => void
}

const HeaderLayout: React.FC<Props> = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <div className="tablet:hidden mobileS:block w-full bg-slate-900 text-white flex justify-end">
        Get App
      </div>
      <header className="w-screen flex items-center justify-between bg-[#fff]">
        <div className=" flex items-center">
          <img alt="logo" src={iot} width="60" className="mr-2" />
          <img
            alt="logo"
            src={logo}
            width="120"
            className="mr-2 tablet:block mobileS:hidden"
          />
          <div className="tablet:hidden mobileS:block">
            <motion.button
              onClick={toggleOpen}
              className="p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="indent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: 'easeIn' }}
                  >
                    <TextIndent size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="outdent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <TextOutdent size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        <div className="flex pr-5 gap-3 items-center">{/* <Bell /> */}</div>
      </header>
    </>
  )
}

export default HeaderLayout
