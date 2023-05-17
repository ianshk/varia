import { AriaButtonProps, useButton } from 'react-aria';
import { cva, type VariantProps } from 'class-variance-authority';
import { useRef } from 'react';

const buttonStyles = cva('button', {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'hover:bg-blue-700', 'text-white', 'py-2', 'px-2', 'mb-2', 'rounded'],
      secondary: ['bg-purple-500', 'hover:bg-purple-700', 'text-white', 'py-2', 'px-2', 'mb-2', 'rounded'],
      destructive: ['bg-red-500', 'hover:bg-red-700', 'text-white', 'py-2', 'px-2', 'mb-2', 'rounded'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-base', 'py-3', 'px-6'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'medium' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

interface StyleProps extends AriaButtonProps {}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button(props: StyleProps & ButtonProps) {
  let { intent, size, children, className } = props;
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref} className={buttonStyles({ intent, size, className })}>
      {children}
    </button>
  );
}
