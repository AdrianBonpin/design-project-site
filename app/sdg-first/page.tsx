'use client'
import styles from '../sdg.module.css'
import joseImg from '@/public/sdg-first/jose.png'
import matteoImg from '@/public/sdg-first/matteo.png'
import jose from '@/public/sdg-first/joseprof.png'
import matteo from '@/public/sdg-first/matteoprof.png'
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
                title="SDG 8: Decent Work and Economic Growth"
                name="SeekStart"
                desc={[
                    'The current job market in the Philippines presents a challenge for many Filipinos, with underemployment and limited opportunities for career advancement being significant hurdles. To address these issues, this project proposes the development of a system specifically designed to empower job seekers.',
                ]}
            />
            <SDGProbPersona
                problem={[
                    'Underemployment in the Philippines stems from various factors, including:',
                    '- Limited work experience: Fresh graduates struggle to find jobs due to a lack of work experience.',
                    '- Socioeconomic discrimination: Individuals from low-paying backgrounds face bias from employers.',
                    '- Overly strict hiring requirements: Unnecessarily strict job qualifications exclude qualified candidates.',
                ]}
                persona="Our target audience encompasses individuals seeking career advancement, including those with limited experience (e.g., individuals in low-paying jobs, undergraduates)."
            />
            <SDGPersonas
                persona={[
                    { img: jose, imgMain: joseImg },
                    { img: matteo, imgMain: matteoImg },
                ]}
            />
            <SDGBrainstorm
                desc="Our brainstorming sessions helped us come up with new ideas, improve on old ones, and fix any issues from past systems. Overall, they helped us refine our ideas within the team."
                img={[
                    '/sdg-first/img1.png',
                    '/sdg-first/img2.png',
                    '/sdg-first/img3.png',
                    '/sdg-first/img4.png',
                    '/sdg-first/img5.png',
                ]}
            />
            <SDGWireframe
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
                    {
                        title: 'Register Screen',
                        content: [
                            'Logo and brand at the top',
                            'Clickable About section',
                            'Clickable Community section',
                            'Signup pop-up can input “First Name”, “Family Name”, Username”, “Password”, and “Confirm Password”',
                        ],
                    },
                    {
                        title: 'Landing Screen',
                        content: [
                            'Clickable About section and Community Section',
                            'For unregistered/guest users, Sign-in or Register button',
                            'Scrollable About section to Community section',
                            'Images displayed related to the service',
                        ],
                    },
                    {
                        title: 'Home Screen',
                        content: [
                            'Images displayed related to the service',
                            'Show posts for followed users',
                            'Able to post',
                            'Side section for settings like “My Saved” or “My Favorites”',
                        ],
                    },
                    {
                        title: 'Profile Screen',
                        content: [
                            'Shows profile picture of the user',
                            'Allows user to edit their profile with the pencil button',
                            'Able to “Connect” and “Message” the user',
                            'Shows Education the user has taken',
                            'Shows Experience the user may have',
                            'Shows Skills the user may have',
                            'Shows other social media handles the user may have',
                            'Shows a “People You May Know” displaying users that may be affiliated with the user',
                        ],
                    },
                ]}
            />
        </>
    )
}
