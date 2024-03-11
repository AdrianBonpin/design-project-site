'use client'
import { SDGHeroBG, SDGNextBG } from '@/utils/assets'
import styles from './sdg.module.css'
import {
    AnimatePresence,
    motion,
    spring,
    useScroll,
    useTransform,
} from 'framer-motion'
import { useRef, useState } from 'react'
import { StaticImageData } from 'next/image'

export default function SDGPage() {
    return (
        <>
            <SDGHero
                title="SDG 8: Decent Work and Economic Growth"
                name="Software Name"
                desc="The current job market in the Philippines presents a challenge for many Filipinos, with underemployment and limited opportunities for career advancement being significant hurdles. To address these issues, this project proposes the development of a system specifically designed to empower job seekers."
            />
            <SDGProbPersona
                problem="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe porro optio blanditiis ducimus quae molestias molestiae cumque voluptatum modi suscipit officiis cupiditate est reiciendis iusto expedita, dolore ullam et illum soluta. Amet quia voluptatibus nihil aliquid dolorem illo voluptatem. Velit totam quos eos repellat laborum at molestias debitis perferendis, sequi impedit ab sint soluta iste deserunt aperiam fugiat? Unde, dolore."
                persona="Our target audience encompasses individuals seeking career advancement, including those with limited experience (e.g., individuals in low-paying jobs, undergraduates)."
            />
            <SDGPersonas
                persona={[
                    { name: 'Jose Rico Tachonachoquesdilla Jones' },
                    { name: 'Matteo Magduolingo' },
                ]}
            />
        </>
    )
}

export function SDGHero({
    title,
    name,
    desc,
    sdg,
}: {
    title: string
    name: string
    desc: string
    sdg?: StaticImageData
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    return (
        <section id="top" ref={ref} className={styles.hero}>
            <motion.div style={{ y }} className={styles.hero_left}>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    {name}
                </motion.h2>
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.9 }}
                    viewport={{ once: true }}
                >
                    {desc}
                </motion.h4>
            </motion.div>
            <div className={styles.hero_right}></div>
            <SDGHeroBG className={styles.herobg} />
        </section>
    )
}

export function SDGProbPersona({
    problem,
    persona,
}: {
    problem: string
    persona: string
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    return (
        <motion.section ref={ref} className={styles.probPersona}>
            <motion.div style={{ y }}>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 + 0.2 * 0 }}
                    viewport={{ once: true }}
                >
                    Problem Statement
                </motion.h1>
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 + 0.2 * 1 }}
                    viewport={{ once: true }}
                >
                    {problem}
                </motion.h4>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 + 0.2 * 2 }}
                    viewport={{ once: true }}
                >
                    User Personas
                </motion.h1>
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 + 0.2 * 3 }}
                    viewport={{ once: true }}
                >
                    {persona}
                </motion.h4>
            </motion.div>
            <SDGNextBG className={styles.probpersbg} />
        </motion.section>
    )
}

export function SDGPersonas({
    persona,
}: {
    persona: {
        name: string
        img?: StaticImageData
        mainImg?: StaticImageData
    }[]
}) {
    const [modal, setModal] = useState(false)
    return (
        <section className={styles.persona}>
            {persona.map((persona, index) => (
                <PersonaBox persona={persona} index={index} key={index} />
            ))}
        </section>
    )
}

function PersonaBox({
    persona,
    index,
}: {
    persona: { name: string; img?: StaticImageData; mainImg?: StaticImageData }
    index: number
}) {
    const [modal, setModal] = useState(false)
    return (
        <>
            <motion.div
                className={styles.persona_cont}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 + 0.2 * index },
                }}
                transition={{ duration: 0.5, type: 'spring' }}
                whileHover={{ boxShadow: '0 0 20px -10px black', rotate: -2 }}
                key={index}
                onClick={() => setModal(!modal)}
            ></motion.div>
            <AnimatePresence>
                {modal && (
                    <motion.div
                        className={styles.persona_modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: 'spring',
                            duration: 0.5,
                        }}
                        onClick={() => setModal(!modal)}
                    ></motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
