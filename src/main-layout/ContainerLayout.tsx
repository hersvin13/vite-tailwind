import { TextIndent, TextOutdent } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import React from 'react'

export default function ContainerLayout({
  children,
  isOpen,
  toggleOpen,
  className,
}: {
  children: React.ReactNode
  isOpen: boolean
  toggleOpen: () => void
  className: string
}) {
  return (
    <>
      <div className={className}>
        <motion.button
          onClick={toggleOpen}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="mr-2"
        >
          {isOpen ? <TextIndent size={24} /> : <TextOutdent size={24} />}
        </motion.button>

        <div>{children}</div>
      </div>
    </>
  )
}
