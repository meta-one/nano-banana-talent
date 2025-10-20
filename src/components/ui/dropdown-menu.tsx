"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  children: React.ReactNode
}

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { isOpen, setIsOpen })
          : child
      )}
    </div>
  )
}

interface DropdownMenuTriggerProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
  setIsOpen?: (open: boolean) => void
}

const DropdownMenuTrigger = ({ children, className, isOpen, setIsOpen }: DropdownMenuTriggerProps) => (
  <button
    className={cn("cursor-pointer", className)}
    onClick={() => setIsOpen?.(!isOpen)}
  >
    {children}
  </button>
)

interface DropdownMenuContentProps {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
}

const DropdownMenuContent = ({ children, className, isOpen }: DropdownMenuContentProps) => (
  <>
    {isOpen && (
      <div className={cn(
        "absolute top-full mt-1 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}>
        {children}
      </div>
    )}
  </>
)

interface DropdownMenuItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const DropdownMenuItem = ({ children, className, onClick }: DropdownMenuItemProps) => (
  <div
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
      className
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
