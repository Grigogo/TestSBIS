'use client'

import Image from "next/image";
import Link from "next/link";
import { menu } from "./menu.data";
import NavItem from "./NavItem";
import Button from "../button/Button";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from './Header.module.scss'

export default function Heder() {

  return (
    <header className={`${styles.header} d-flex justify-content-between align-items-center  container mx-auto border-bottom border-primaryLight`}>
      <Link href='/' className="logo">
        <Image src="/images/logo.png" alt={"SmokingShop Logo"} width={172} height={48} />
      </Link>

      <nav className={`${styles.nav} d-flex gap-5 align-items-center`}>
        {menu.map(item => (
          <NavItem key={item.link} item={item}></NavItem>
        ))}
      </nav>

      <div className="login gap-4 d-flex align-items-center">
        <Image src={"/Search.svg"} alt={""} width={20} height={20} />
        <Cart counter={6} />
        <Button icon={"/Logout.svg"} text={"Войти"} />
      </div>
    </header>
  );
}
