'use client'

import { FC } from 'react'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'

interface INavItem {
  item: IMenuItem
}

const NavItem: FC<INavItem> = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.link}
      className={cn(
        `${styles.navItem} d-flex align-items-center position-relative`,
        pathname === item.link ? 'font-medium' : 'font-normal'
      )}>
      {item.name}
      <div className={cn(`${styles.navBorder}`, pathname === item.link ? 'bg-primary' : 'opacity-0')}></div>
    </Link>
  )
}

export default NavItem
