import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white border-1 text-black hover:bg-gray-300",
        home:"bg-gradient-to-r from-white via-gray-300 to-white text-black border border-[0.5px] transition-colors hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300",
        question: "bg-black text-white hover:bg-gray-400 hover:text-black",
        destructive: "bg-white text-black hover:bg-gray-300",
        outline: "border border-black bg-white hover:bg-gray-300 hover:text-black",
        secondary: "bg-white text-black hover:bg-gray-300",
        ghost: "hover:bg-gray-300 hover:text-black",
        link: "text-black underline-offset-4 hover:underline",
        premium: "bg-gray-300 text-black border border-[0.5px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
