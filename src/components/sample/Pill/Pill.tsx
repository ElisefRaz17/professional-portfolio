/* v8 ignore next */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';

const pillVariants = cva(
  'inline-flex items-center gap-[16px] rounded-3xl px-[8px] py-[4px] text-xs leading-none font-medium tracking-[0.96px] uppercase',
  {
    variants: {
      variant: {
        info: 'bg-blue-100 text-blue-900',
        accent: 'bg-teal-100 text-[#06373D]',
        success: 'bg-green-100 text-green-900',
        neutral: 'bg-neutral-100 text-slate-900',
        warning: 'bg-yellow-100 text-yellow-900',
        error: 'bg-red-100 text-red-900',
      },
      emphasis: {
        true: '',
      },
      outline: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: ['info', 'accent', 'neutral', 'success', 'error', 'warning'],
        emphasis: true,
        className: 'text-white',
      },
      { variant: 'info', emphasis: true, className: 'bg-blue-600' },
      {
        variant: 'neutral',
        emphasis: true,
        className: 'bg-slate-600',
      },
      {
        variant: 'accent',
        emphasis: true,
        className: 'bg-teal-600',
      },
      {
        variant: 'success',
        emphasis: true,
        className: 'bg-green-600',
      },
      {
        variant: 'warning',
        emphasis: true,
        className: 'bg-yellow-600',
      },
      { variant: 'error', emphasis: true, className: 'bg-red-600' },
      {
        variant: ['info', 'accent', 'neutral', 'success', 'error', 'warning'],
        outline: true,
        className: 'border',
      },
      {
        variant: 'info',
        outline: true,
        className: 'border-blue-500 bg-blue-50 text-blue-900',
      },
      {
        variant: 'neutral',
        outline: true,
        className: 'border-slate-500 bg-slate-50 text-slate-900',
      },
      {
        variant: 'accent',
        outline: true,
        className: 'border-teal-500 bg-teal-50 text-teal-900',
      },
      {
        variant: 'success',
        outline: true,
        className: 'border-green-500 bg-green-50 text-green-900',
      },
      {
        variant: 'warning',
        outline: true,
        className: 'border-yellow-500 bg-yellow-50 text-yellow-900',
      },
      {
        variant: 'error',
        outline: true,
        className: 'border-red-500 bg-red-50 text-red-900',
      },
    ],
    defaultVariants: {
      variant: 'success',
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof pillVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  (
    {
      className,
      variant,
      emphasis,
      outline,
      leftIcon,
      rightIcon,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        className={cn(
          pillVariants({
            variant,
            emphasis,
            outline,
            className,
          }),
          leftIcon || rightIcon ? 'w-fit gap-[4px]' : ''
        )}
        ref={ref}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </Comp>
    );
  }
);
Pill.displayName = 'Pill';

export { Pill };
