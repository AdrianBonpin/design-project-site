'use client'
import {
    CarretLeft,
    CarretRight,
    SDGBrainBG,
    SDGHeroBG,
    SDGNextBG,
} from '@/utils/assets'
import styles from '../sdg.module.css'
import {
    AnimatePresence,
    motion,
    spring,
    useScroll,
    useTransform,
    wrap,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import klaroImg from '@/public/sdg-second/klaro.png'
import angelinaImg from '@/public/sdg-second/angelina.png'
import klaro from '@/public/sdg-second/klaroprof.png'
import angelina from '@/public/sdg-second/angelinaprof.png'

export default function SDGPage() {
    return (
        <>
            <SDGHero
                title="SDG 9: Decent Work and Economic Growth"
                name="LAAG"
                desc={[
                    'To improve public transportation efficiency in Cebu, this project takes a two-phased approach, focusing on data collection and optimization:',
                    '- Phase One: This phase addresses navigation difficulties for new and existing residents in Cebu, phase one will develop a mobile application that provides navigation assistance (similar to Google Maps) and collects anonymous travel data.',
                    '- Phase Two: Leveraging phase one’s data, this phase tackles Cebu’s traffic issues, especially inefficient jeepney routes, by processing the data into easy-to-understand formats for route analysts.',
                ]}
            />
            <SDGProbPersona
                problem={[
                    'The current jeepney routes in Cebu are inefficient and contribute to traffic congestion due to:',
                    '- Overlapping routes: Multiple jeepneys serving similar areas create unnecessary congestion.',
                    '- Limited coverage: Certain parts of Cebu lack proper jeepney service, forcing detours and longer commutes.',
                    '- Unbalanced fares: Routes with varying distances for the same fare lead to uneven passenger loads and inefficiencies.',
                ]}
                persona="Our target audience are jeepney commuters and route analysts."
            />
            <SDGPersonas
                persona={[
                    { img: klaro, imgMain: klaroImg },
                    { img: angelina, imgMain: angelinaImg },
                ]}
            />
            <SDGBrainstorm
                desc="Our brainstorming sessions helped us come up with new ideas, improve on old ones, and fix any issues from past systems. Overall, they helped us refine our ideas within the team."
                img={[
                    '/sdg-second/img1.png',
                    '/sdg-second/img2.png',
                    '/sdg-second/img3.png',
                    '/sdg-second/img4.png',
                    '/sdg-second/img5.png',
                ]}
            />
        </>
    )
}

function SDGHero({
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

function SDGProbPersona({
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

function SDGPersonas({
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

function PersonaBox({
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

function SDGBrainstorm({ desc, img }: { desc: string; img: string[] }) {
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