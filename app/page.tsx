'use client'
import { HeroBG, SDGBlob1, SDGBlob2, TeamBG } from '@/utils/assets'
import styles from './landing.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { once } from 'events'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { MutableRefObject, useRef } from 'react'

import adrian from '@/public/team/adrian.jpg'
import carlo from '@/public/team/carlo.png'
import karylle from '@/public/team/karylle.png'
import matt from '@/public/team/matt.png'

export default function LandingPage() {
    const headTxt = useRef(null)
    const teamRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: headTxt,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const scale = useTransform(scrollYProgress, [0, 1], ['100%', '80%'])

    return (
        <>
            <section id="top" ref={headTxt} className={styles.hero}>
                <HeroBG className={styles.herobg} />
                <motion.div className={styles.hero_left} style={{ y, scale }}>
                    <motion.h1
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        transition={{ delay: 0.5 }}
                    >
                        Design Project Website Portfolio
                    </motion.h1>
                    <motion.h3
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 100 }}
                        transition={{ delay: 0.6 }}
                    >
                        Pushing Ideas and Leading Change
                    </motion.h3>
                </motion.div>
            </section>
            <section ref={teamRef} id="team" className={styles.team}>
                <TeamCont teamRef={teamRef} />
                <TeamBG className={styles.teambg} />
            </section>
            <section id="sdg-first" className={styles.sdg}>
                <div className={styles.sdg_info}>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 0 }}
                    >
                        SeekStart
                    </motion.h1>
                    <motion.h5
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 1 }}
                    >
                        Info
                    </motion.h5>
                    <motion.h4
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 2 }}
                    >
                        The Philippines' job market challenges Filipinos with
                        underemployment and limited advancement, prompting this
                        project to develop a job seeker empowerment system.
                    </motion.h4>
                    <Link href={'/sdg-first'}>
                        <motion.button
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + 0.2 * 3 }}
                            type="button"
                        >
                            <h3>Learn More</h3>
                        </motion.button>
                    </Link>
                </div>
                <div className={styles.sdg_preview}>
                    <SDGBlob1 className={styles.sdg_blob} />
                    <div className={styles.sdg_photo}></div>
                </div>
            </section>
            <section id="sdg-second" className={styles.sdg}>
                <div className={styles.sdg_preview}>
                    <SDGBlob2 className={styles.sdg_blob} />
                    <div className={styles.sdg_photo}></div>
                </div>
                <div className={styles.sdg_info}>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 0 }}
                    >
                        LAAG
                    </motion.h1>
                    <motion.h5
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 1 }}
                    >
                        Info
                    </motion.h5>
                    <motion.h4
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + 0.2 * 2 }}
                    >
                        A two-phased project to improve Cebu's public
                        transportation uses a mobile app for navigation and data
                        collection (phase one) and then analyzes that data to
                        optimize jeepney routes (phase two).
                    </motion.h4>
                    <Link href={'/'}>
                        <motion.button
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + 0.2 * 3 }}
                            type="button"
                        >
                            <h3>Learn More</h3>
                        </motion.button>
                    </Link>
                </div>
            </section>
        </>
    )
}

function TeamCont({ teamRef }: { teamRef: MutableRefObject<null> }) {
    const { scrollYProgress } = useScroll({
        target: teamRef,
        offset: ['center', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    return (
        <>
            <motion.div className={styles.team_cont} style={{ y }}>
                <TeamMembers
                    stagger={false}
                    name="Adrian Alfred Bonpin"
                    img={adrian}
                />
                <TeamMembers
                    stagger={true}
                    name="Jan Carlo Juab"
                    img={carlo}
                />
                <TeamMembers
                    stagger={false}
                    name="Karylle Bernate"
                    img={karylle}
                />
                <TeamMembers
                    stagger={true}
                    name="Matt Vincent Magdadaro"
                    img={matt}
                />
            </motion.div>
            <motion.div className={styles.team_cont_mobile}>
            </motion.div>
        </>
    )
}

function TeamMembers({
    stagger,
    name,
    img,
}: {
    stagger: boolean
    name: string
    img: StaticImageData
}) {
    const base_pos = stagger ? 0 : 50
    const rnd_delay = Math.floor(Math.random() * 4)
    return (
        <motion.div
            className={styles.team_member}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
                y: base_pos,
                opacity: 1,
                transition: {
                    delay: 0.5 + 0.2 * rnd_delay,
                },
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                type: 'spring',
            }}
        >
            <div className={styles.team_pic}>
                <Image alt={name} src={img} />
            </div>
            <h5>{name ? name : 'Enter Name'}</h5>
        </motion.div>
    )
}
