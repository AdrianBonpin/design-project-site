'use client'
import styles from '@/app/sdg.module.css'

const pop_in_text = {
    initial: {
        opacity: 0,
        x: -50,
    },
    title: {
        opacity: 1,
        x: 0,
        transistion: {
            type: 'spring',
        },
    },
}

import {
    CarretDown,
    CarretLeft,
    CarretRight,
    CarretUp,
    SDGBrainBG,
    SDGHeroBG,
    SDGNextBG,
    SDGWireframeCurve,
} from '@/utils/assets'
import {
    AnimatePresence,
    animate,
    motion,
    useScroll,
    useTransform,
    wrap,
} from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

export function SDGHero({
    title,
    name,
    desc,
    sdg,
}: {
    title: string
    name: string
    desc: string[]
    sdg?: StaticImageData
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    function chkTab(cont: string, idx: number) {
        if (cont.startsWith('-')) {
            return (
                <motion.h5
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.9 + 0.2 * idx }}
                    key={idx}
                >
                    • {cont.replace('-', '')}
                </motion.h5>
            )
        } else {
            return (
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.9 + 0.2 * idx }}
                    key={idx}
                >
                    {cont}
                </motion.h4>
            )
        }
    }

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
                {desc.map((cont, idx) => chkTab(cont, idx))}
            </motion.div>
            <SDGHeroBG className={styles.herobg} />
        </section>
    )
}

export function SDGProbPersona({
    problem,
    persona,
}: {
    problem: string[]
    persona: string
}) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

    function chkTab(cont: string, idx: number) {
        if (cont.startsWith('-')) {
            return (
                <motion.h5
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.7 + 0.2 * idx }}
                    key={idx}
                >
                    • {cont.replace('-', '')}
                </motion.h5>
            )
        } else {
            return (
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.7 + 0.2 * idx }}
                    key={idx}
                >
                    {cont}
                </motion.h4>
            )
        }
    }

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
                {problem.map((cont, idx) => chkTab(cont, idx))}
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
    persona: { img: StaticImageData; imgMain: StaticImageData }[]
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

export function PersonaBox({
    persona,
    index,
}: {
    persona: { img: StaticImageData; imgMain: StaticImageData }
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
            >
                <Image alt="persona img" src={persona.img} />
            </motion.div>
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
                    >
                        <Image alt="persona img" src={persona.imgMain} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const gallery = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

export function SDGBrainstorm({ desc, img }: { desc: string; img: string[] }) {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end', 'start end'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

    const [[curr, direction], setCurr] = useState([0, 0])

    const imgIdx = wrap(0, img.length, curr)

    const paginate = (newDirection: number) => {
        setCurr([curr + newDirection, newDirection])
    }

    useEffect(() => {
        const scroll = setInterval(() => {
            paginate(1)
        }, 4500)

        return () => clearInterval(scroll)
    }, [curr])

    return (
        <section id="brainstorm" ref={ref} className={styles.brain}>
            <SDGBrainBG className={styles.brainbg} />
            <motion.div style={{ y }}>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    viewport={{ once: true }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.5 + 0.2 * 0 },
                    }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    Brainstorming Session Outputs
                </motion.h1>
                <motion.h4
                    initial={{ opacity: 0, x: -50 }}
                    viewport={{ once: true }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.5 + 0.2 * 1 },
                    }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    {desc}
                </motion.h4>
                <div className={styles.brainimg_cont}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            alt="img"
                            className={styles.brainimg}
                            key={curr}
                            src={img[imgIdx]}
                            custom={direction}
                            variants={gallery}
                            initial={'enter'}
                            animate={'center'}
                            exit={'exit'}
                            transition={{
                                x: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                },
                                opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x)
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1)
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1)
                                }
                            }}
                        />
                    </AnimatePresence>
                    <div className={styles.arrow} onClick={() => paginate(-1)}>
                        <CarretLeft />
                    </div>
                    <div className={styles.arrow} onClick={() => paginate(1)}>
                        <CarretRight />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export function SDGWireframe({
    items,
    extra,
    noTop,
}: {
    items: { title: string; content: string[] }[]
    extra?: string
    noTop?: boolean
}) {
    const [curr, setCurr] = useState(0)
    return (
        <section className={styles.wireframe}>
            <div className={styles.wireframe_top}>
                {!noTop && <SDGWireframeCurve className={styles.wireframebg} />}
                <motion.h1
                    variants={pop_in_text}
                    initial={'initial'}
                    whileInView={'title'}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + 0.2 * 0 }}
                >
                    Wireframe {extra ? extra : ''}
                </motion.h1>
                <motion.h4
                    variants={pop_in_text}
                    initial={'initial'}
                    whileInView={'title'}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + 0.2 * 1 }}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Recusandae omnis, nisi dolores velit dolorum eum.
                </motion.h4>
                <motion.h5>
                    Select Page
                    <WireframeDrop
                        items={items}
                        setParCurr={setCurr}
                        curr={curr}
                    />
                </motion.h5>
            </div>
            <div className={styles.wireframe_bottom}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {items[curr].title}
                </motion.h2>
                {items[curr].content.map((content, idx) => (
                    <motion.h4 key={idx}>• {content}</motion.h4>
                ))}
            </div>
        </section>
    )
}

function WireframeDrop({
    items,
    setParCurr,
    curr,
}: {
    items: {
        title: string
        content: string[]
    }[]
    setParCurr: any
    curr: number
}) {
    const titles = items.map((item) => item.title)
    const [modal, setModal] = useState(false)

    const togMod = () => {
        setModal(!modal)
    }

    function changeCurr(num: number) {
        setParCurr(num)
    }

    return (
        <>
            <div className={styles.wireframe_drop} onClick={togMod}>
                {modal ? <CarretUp /> : <CarretDown />}
                {titles[curr]}
                <AnimatePresence>
                    {modal && (
                        <motion.div
                            className={styles.wireframe_drop_cont}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            {titles.map((cont, idx) => (
                                <motion.div
                                    key={idx}
                                    onClick={() => changeCurr(idx)}
                                    whileHover={{
                                        opacity: 0.5,
                                    }}
                                >
                                    {cont}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}
