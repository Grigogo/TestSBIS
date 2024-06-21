import { FC } from 'react'
import { IButton } from './button.interface'
import Image from 'next/image'

const Button: FC<IButton> = ({ icon, text }) => {
  return (
    <button className='customButton'>
      <Image src={icon} alt={icon} width={20} height={20}/>
      {text}
    </button>
  )
}

export default Button
