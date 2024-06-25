import { FC } from 'react'
import styles from './Contacts.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Contacts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container d-flex justify-content-between align-items-center'>
        <Link href={'/'}>
          <Image src={'/images/logo.png'} alt={'Logo'} width={172} height={48} />
        </Link>
        <Link className={styles.link} href={'tel:+7 900 000 99 99'}>
          <Image src={'/Calling.svg'} alt={''} width={20} height={20} />
          +7 900 000 99 99
        </Link>
        <Link className={styles.link} href={'mailto:contact@greenshop.com'}>
          <Image src={'/Message.svg'} alt={''} width={20} height={20} />
          contact@greenshop.com
        </Link>
        <address className={styles.link}>
          <Image src={'/Calling.svg'} alt={''} width={20} height={20} />
          610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6, оф. 401
        </address>
      </div>
    </div>
  )
}

export default Contacts
