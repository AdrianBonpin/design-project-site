'use client'
import styles from '../sdg.module.css'
import klaroImg from '@/public/sdg-second/klaro.png'
import angelinaImg from '@/public/sdg-second/angelina.png'
import klaro from '@/public/sdg-second/klaroprof.png'
import angelina from '@/public/sdg-second/angelinaprof.png'
import {
    SDGBrainstorm,
    SDGHero,
    SDGPersonas,
    SDGProbPersona,
    SDGWireframe,
} from '@/components/SDGModules'

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
            <SDGWireframe
                extra="(User)"
                items={[
                    {
                        title: 'Log-in Screen',
                        content: [
                            'Hero section displaying an image related to the service',
                            'Logo and brand at the top',
                            'Clickable About section',
                            'Clickable Community section',
                            'Log-in popup to input username and password',
                        ],
                    },
                ]}
            />
            <SDGWireframe
                noTop={true}
                extra="(Analyst)"
                items={[
                    {
                        title: 'Log-in Screen',
                        content: [
                            'Hero section displaying an image related to the service',
                            'Logo and brand at the top',
                            'Clickable About section',
                            'Clickable Community section',
                            'Log-in popup to input username and password',
                        ],
                    },
                ]}
            />
        </>
    )
}
