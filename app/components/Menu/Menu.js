import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'

const Menu = () => {
  return (
    <div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/people">People</Link>
          </li>
          <li>
            <Link href="/initiatives">Initiatives</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/donation">Donation</Link>
          </li>
          <li>
            <Link href="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu