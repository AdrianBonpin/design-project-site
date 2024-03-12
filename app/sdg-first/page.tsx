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
                    {
                        title: 'Job List Screen',
                        content: [
                            'Detailed descriptions and titles of open jobs with images to support',
                            'Scrollable Job list',
                            'Filter to choose specifications to find specific jobs',
                        ]
                    },
                    {
                        title: 'Job Screen',
                        content: [
                            'Navbar with a search bar, Home button, Friends button, Notification button, Messages button, and Profile button',
                            'Displayed the current chosen job',
                            'Displays detailed information about the company hiring',
                            'Shows the job description with the specific qualifications',
                            'Displays a “Meet The Hiring Team” to get to know the employers',
                            '“Apply” button to apply for said job opening',
                            '“Save” button in case the user wants to see this job for a future purposes'
                        ]
                    },
                    {
                        title: 'Message Screen',
                        content: [
                            'Shows a list of messages that may have been enhanced between user and employer',
                            'Able to choose “Important” and “Archived” messages through the respective buttons',
                            'Able to mark a message “Archived” or “Important”',
                            'Able to search specific messages',
                            'Click on a message to focus on a specific message box with a specific recipient',
                        ]
                    },
                    {
                        title: 'Message Screen (Focused)',
                        content: [
                            'Sees the name of the recipient',
                            'Able to close the current message box with the “X” button',
                            'Able to send to type and send a message',
                            'Able to send attachments such as images and pdf files',
                            'Smaller version of a scrollable message screen on the left shows up in case the user wants to switch between message boxes',
                            'Still able to search for specific messages',
                        ]
                    },
                    {
                        title: 'Notifications Screen',
                        content: [
                            'Receive notifications when a user receives a message, a recommended job offer, and status of a job they have applied for',
                            'Able to click “All” which shows all notifications regardless of being read or not in a chronological order',
                            'Able to click “Unread” which shows all unread notifications in a chronological order',
                            'Able to click “Read” which shows read notifications in a chronological order',
                        ]
                    },
                    {
                        title: 'Additional Features',
                        content:[
                            'Navbar with a search bar, Home button, Friends button, Notification button, Messages button, and Profile button',
                            'Notification alerts will show up on the notification button indicated by number of unread notifications',
                            'Support for multiple languages',
                            'Accessibility features for users with disabilities',
                        ]
                    }
                ]}
            />
        </>
    )
}
