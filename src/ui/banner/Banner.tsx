import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Banner: FC = () => {
  return (
    <Link href={'https://franchisess.ru/'}>
      <Image src={'/images/banner.png'} alt={'banner'} width={306} height={599} />
    </Link>
  )
}

export default Banner
