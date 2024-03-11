'use client'

import { motion } from 'framer-motion'

import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <motion.nav className={styles.navbar}>
            <Link href={'/'}>
                <motion.h4
                    initial={{
                        y: -10,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 100,
                    }}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                    }}
                >
                    Trailblazers
                </motion.h4>
            </Link>
            <div className={styles.right}>
                <Link href={'/sdg-first'}>
                    <motion.h4
                        initial={{
                            y: -10,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 100,
                        }}
                        whileHover={{
                            color: 'var(--text-30)',
                            y: -5,
                        }}
                        transition={{
                            duration: 0.5,
                            type: 'spring',
                        }}
                    >
                        SDG 8
                    </motion.h4>
                </Link>
                <Link href={'/sdg-second'}>
                    <motion.h4
                        initial={{
                            y: -10,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 100,
                        }}
                        whileHover={{
                            color: 'var(--text-30)',
                            y: -5,
                        }}
                        transition={{
                            duration: 0.5,
                            type: 'spring',
                        }}
                    >
                        SDG 9
                    </motion.h4>
                </Link>
            </div>
        </motion.nav>
    )
}
