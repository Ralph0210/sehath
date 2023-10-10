'use client'

import React, {useState, useEffect} from 'react'
import styles from './Join.module.css'
import { motion } from 'framer-motion';

function Join() {
    const [active, setActive] = useState('join');
    useEffect(() => {
        console.log(active)
    },[active])
  return (
    <div className={styles.joinContainer}>
        <h1 className={styles.joinTitle}>Join Us</h1>
        <div>
            <ul className={styles.joinWay}>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} onClick={()=>setActive('join')} className={active === 'join' ? styles.active : ''}>Become a member</motion.li>
                <motion.li whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }} onClick={()=>setActive('donation')} className={active === 'donation' ? styles.active : ''}>Donation</motion.li>
            </ul>
        </div>
    </div>
  )
}

export default Join