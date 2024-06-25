import { FC } from 'react'
import { IButton } from './button.interface'
import Image from 'next/image'
import cn from 'clsx';

const Button: FC<IButton> = ({ icon, text, dark, reverce }) => {
  return (
    <button className={cn('customButton', dark ? 'black' : '', reverce ? 'reverce' : '' )}>
      {icon ? (<Image src={icon} alt={icon} width={20} height={20}/>) : null}
      {text}
    </button>
  )
}

export default Button
