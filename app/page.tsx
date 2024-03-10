'use client'
import { HeroBG, SDGBlob1, SDGBlob2, TeamBG } from '@/utils/assets'
import styles from './landing.module.css'
import { motion } from 'framer-motion'
import { once } from 'events'
import Link from 'next/link'
import { StaticImageData } from 'next/image'

export default function LandingPage() {
    return (
        <>
            <section id="top" className={styles.hero}>
                <HeroBG className={styles.herobg} />
                <div className={styles.hero_left}>
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
                </div>
            </section>
            <section id="team" className={styles.team}>
                <h1>The Team</h1>
                <div className={styles.team_cont}>
                    <TeamMembers
                        stagger={false}
                        name="Adrian Bonpin"
                        title="Frontend Developer"
                        desc="I like doing many things. I dont really understand why my life is in shambles... Anyways, I spearheaded this site!"
                    />
                    <TeamMembers stagger={true} />
                    <TeamMembers stagger={false} />
                    <TeamMembers stagger={true} />
                </div>
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
                        SDG 8
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque iusto ut quidem aliquam libero esse
                        consectetur a ducimus ab illum nobis eligendi, nam
                        delectus nemo eum numquam nostrum Ex, sapiente?
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
                        SDG 9
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque iusto ut quidem aliquam libero esse
                        consectetur a ducimus ab illum nobis eligendi, nam
                        delectus nemo eum numquam nostrum Ex, sapiente
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

function TeamMembers({
    stagger,
    name,
    title,
    desc,
}: {
    stagger: boolean
    name?: string
    title?: string
    desc?: string
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
            <div className={styles.team_pic}></div>
            <h5>{name ? name : 'Enter Name'}</h5>
            <p>{title ? title : 'Enter title'}</p>
            <p>
                {desc
                    ? desc
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam ipsum velit autem fugit iste ut officia? Cum in sit, tempora nisi tempore rem repudiandae, iste illum quaerat vero molestias!'}
            </p>
        </motion.div>
    )
}