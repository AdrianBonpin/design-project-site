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
                        title: 'Sign Up Screen',
                        content: [
                            'Has the Logo of the service as the overarching feature',
                            'User can input “Email”, “Username”, “Password”, and “Repeat Password”',
                            'Required to click a checkbox for the terms and agreement, shows a note that says “Data will be collected anonymously”',
                            'When all fields are filled, user can click “Sign up” to sign up',
                            'Another screen occurs which asks for the user’s credentials for account purposes',
                            'Alternatively, user can click on an “Already signed in?” to go a sign in screen',
                        ],
                    },
                    {
                        title: 'Sign In Screen',
                        content: [
                            'Logo is the overarching feature',
                            'User is able to input an “Email” OR “Username” and their “Password” to sign in',
                            'Alternatively, users can click “Create a new account?” and they will be brought to a Sign Up Screen',
                        ]
                    },
                    {
                        title: 'Main Screen',
                        content: [
                            'Navbar at the top which has a “Notification” and “Profile” buttons',
                            'Clicking on the Notification button will show a Notifications popup or announcements related to the local commute news (i.e Route changes, strikes, price increases)',
                            '"Your location" is shown above a button called "Your destination" which displays your current location based off your phone’s gps location',
                            'There is a button labeled "Your destination" present at the bottom of the screen',
                            'Clicking on "Your Destination" allows the user to choose a Jeepney Route, showing and estimated time of arrival and estimated cost',
                            'Clicking on a route will ask user to confirm whether to use the route or not',
                            'Clicking on a route will display an ETA and a button to cancel if you so wish which brings you back to the initial main screen',
                            'When user arrives to their destination, route rate pops up which asks the user to rate the chosen route via a 4/4 rating system',
                            'Able to choose the route again if the user so wishes',
                        ]
                    },
                    {
                        title: 'Profile Screen',
                        content: [
                            'Shows the user’s name and profile picture',
                            'There are two buttons labeled “History” and “Delete Account”',
                            'Clicking History brings up recent routes the user has selected before and the user is able to click these recent routes to use them again',
                            '"Delete Account" allows the user to delete their account but before that shows a pop up which says “Deleting an account is permanent, are you sure you want to continue?” which requires user to type “I am sure” to delete the account',
                        ]
                    }
                ]}
            />
            <SDGWireframe
                noTop={true}
                extra="(Analyst)"
                items={[
                    {
                        title: 'Initial Analyst Screen',
                        content: [
                            'Only accessible only from desktop',
                            'Screen is similar to the normal User login screen',
                            'A user MAY send a request to become a route analyst',
                        ],
                    },
                    {
                        title: 'Analyst Request Screen',
                        content: [
                            'Features a photo, probably related to the service',
                            'Request form allows users to input their “Full Name”, “Email”, “Company” and the reason they want to become a route analyst before being allowed to submit',
                            'When the user does have an account, they are allowed to login and are redirected to to the Home Page Screen',
                        ]
                    },
                    {
                        title: 'Home Page Screen',
                        content: [
                            'Features a sidebar featuring the analyst’s username, a button to click “Home”, and a “Route” and “Summary” buttons that are not available if verification is expired and at the bottom features a log out button in case the analyst wants to log out',
                            '"Daily Statistics" section which may present some kind of graph that shows "Active Users", "Time per Kilometer", and "Traffic Reports"',
                            '"Analyst Status" section which shows if the analyst’s verification status, and expiry date',
                            '"Analyst Statistics" section which shows the “Days Used” and Other settings',
                            'Quick panel with the buttons “Issue”, “Settings”, and “Profile”',
                            'Clicking on Routes will bring up a Routes Page Screen',
                            'Clicking on Summary will bring up a Summary Page Screen',
                            'In the quick panel, clicking on Issue will bring up a modal which allows the analyst to input which Route Code has an issue',
                            'Clicking on Settings will bring up the Settings Page Screen',
                            'Clicking on Profile will bring up the Profile Page Screen',
                        ]
                    },
                    {
                        title: 'Route Page Screen',
                        content: [
                            'Displays a tabulation of Route Codes, Users Ridden, Time average per kilometer, and potentially any issues',
                            'Displays a line chart displaying route avg time per km in a week',
                            'Displays a pie chart showing Most commuters per Route with the Route Code number of Users and other info',
                            'There is an issue table at the bottom of the screen which when clicked shows a modal that allows the analyst to input which route code and why it has an issue and submitting it by pressing report',
                        ]
                    },
                    {
                        title: 'Summary Page Screen',
                        content: [
                            'Displays a line chart which displays the global average time per km in a week',
                            'Displays a line chart which displays the amount of users joined in a week',
                            'Displays a pie chart showing the different demographics using the app and their detailed information such as percentage, name of the demographic, age, gender, and location when hovered over',
                            'Similar to the Route Page Screen, there is an issue table at the bottom of the screen which when clicked shows a modal that allows the analyst to input which route code and why it has an issue and submitting it by pressing report',
                        ]
                    },
                    {
                        title: 'Settings Screen',
                        content: [
                            'Shows a section showing the different settings the analyst can manipulate according to their preferences',
                            'One such feature is a theme feature which allows the analyst to change the theme and look for their UI through a dropdown menu and a checkbox',
                            'Another feature is the Time Format feature which allows the analyst to choose which Time Format they want through a dropdown menu and a checkbox',
                            'Another Feature is the Date Format feature which allows the analyst to choose which Date Format they want through a dropdown menu and a checkbox',
                            'Many more additional settings',
                        ]
                    },
                    {
                        title: 'Profile Screen',
                        content: [
                            'Showcases the profile picture of the user and their affiliated company',
                            'Shows the list of the issues',
                            'Shows a section that displays the credits this analyst has and the verification expiry date of their account',
                        ]
                    },
                    {
                        title: 'Additional Features',
                        content: [
                            'The sidebar which contains Home, Routes, Summary, and Log out buttons is always present regardless of the Screen'
                        ]
                    }
                ]}
            />
        </>
    )
}
