"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextType {
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)

interface AccordionProps {
  type: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

const Accordion = ({ children, className, type, ...props }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(prev => prev.includes(value) ? [] : [value])
    } else {
      setOpenItems(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = ({ children, className, value, ...props }: AccordionItemProps) => {
  const context = React.useContext(AccordionContext)
  const isOpen = context?.openItems.includes(value) || false

  return (
    <div className={cn("border rounded-lg", className)}>
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { value, isOpen })
          : child
      )}
    </div>
  )
}

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
  value?: string
  isOpen?: boolean
}

const AccordionTrigger = ({ children, className, value, isOpen, ...props }: AccordionTriggerProps) => {
  const context = React.useContext(AccordionContext)

  return (
    <button
      className={cn("flex w-full items-center justify-between p-4 text-left font-medium", className)}
      onClick={() => value && context?.toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  )
}

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
  value?: string
  isOpen?: boolean
}

const AccordionContent = ({ children, className, isOpen, ...props }: AccordionContentProps) => (
  <>
    {isOpen && (
      <div className={cn("px-4 pb-4", className)}>
        {children}
      </div>
    )}
  </>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
