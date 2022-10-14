import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from "react";


//InputRoot

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot(props: InputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

InputRoot.displayName = 'Root'

//InputIcon

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon(props: InputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
    </Slot>
  )
}

InputIcon.displayName = 'Icon'
// InputText

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(props: InputProps) {
  return (
    <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' />
  );
}

InputText.displayName = 'Input'

export const InputConfig = {
  Root: InputRoot,
  Input: InputText,
  Icon: InputIcon,
}
