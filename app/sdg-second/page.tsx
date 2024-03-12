'use client'

import {
    SDGBrainstorm,
    SDGHero,
    SDGPersonas,
    SDGProbPersona,
    SDGStoryBoard,
    SDGWireShow,
    SDGWireframe,
} from '@/components/SDGModules'

import klaroImg from '@/public/sdg-second/klaro.png'
import angelinaImg from '@/public/sdg-second/angelina.png'
import klaro from '@/public/sdg-second/klaroprof.png'
import angelina from '@/public/sdg-second/angelinaprof.png'
import wireframe from '@/public/sdg-second/sdg_wireframe.png'

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
            <SDGStoryBoard
                name="Angelina Diyosnon (User)"
                items={[
                    {
                        title: 'Sign Up Screen',
                        content: [
                            'Angelina opens the app and sees the logo prominently displayed at the top of the screen. Below the logo, she sees input fields for "Email," "Username," "Password," and "Repeat Password." She notices a checkbox below these fields with the text "Agree to Terms & Conditions." Below the checkbox, a message reads: "Data will be collected anonymously." Angelina fills out all the fields and clicks the checkbox. She then clicks the blue "Sign Up" button at the bottom of the screen.'
                        ],
                    },
                    {
                        title: 'Sign In Option',
                        content: [
                            'A new screen appears, congratulating Angelina on signing up and offering her two options:',
                            '- A large blue button labeled "Sign In"',
                            '- A smaller gray link that says "Already signed in?"',
                            'Angelina, already signed up, clicks the "Sign In" button.',
                        ],
                    },
                    {
                        title: 'Sign In Screen',
                        content: [
                            'The app displays the login screen, again featuring the logo at the top. There are two input fields: "Email/Username" and "Password." Angelina enters her email address and password in the respective fields. She clicks the blue "Sign In" button.'
                        ],
                    },
                    {
                        title: 'Main Screen',
                        content: [
                            'Angelina lands on the main screen. She sees a navigation bar at the top with two buttons: "Notification" (with a bell icon) and "Profile" (with a silhouette icon). Below the navbar, she sees her current location displayed under the text "Your location." A large button labeled "Your destination" is present at the bottom of the screen.'
                        ],
                    },
                    {
                        title: 'Choosing a Route',
                        content: [
                            'Angelina taps the "Your destination" button. The app displays a map with different Jeepney routes highlighted. Each route shows the estimated time of arrival (ETA) and estimated cost. Angelina taps on a specific route that interests her.'
                        ],
                    },
                    {
                        title: 'Confirmation and ETA',
                        content: [
                            'A pop-up appears asking Angelina to confirm if she wants to use the chosen route. She taps "Yes" to confirm. The app displays the chosen route on the map along with the estimated arrival time (ETA). There is a "Cancel" button displayed if Angelina changes her mind.'
                        ]
                    },
                    {
                        title: 'Arriving at the Destination',
                        content: [
                            'As Angelina approaches her destination, a pop-up appears prompting her to rate the chosen route using a 4-star rating system. She rates the route and taps "Submit."'
                        ]
                    },
                    {
                        title: 'Replanning the Route',
                        content: [
                            'Angelina arrives at her destination and taps the "Your destination" button again. The app displays the previously chosen route along with the option to select a new route. Angelina can choose the same route again or select a different one based on her needs.'
                        ]
                    },
                    {
                        title: 'Profile Screen',
                        content: [
                            'Angelina taps the "Profile" button in the navigation bar. The profile screen displays her name and profile picture. She sees two buttons: "History" and "Delete Account."'
                        ]
                    },
                    {
                        title: 'Viewing History',
                        content: [
                            'Angelina taps the "History" button. The app displays a list of her recent routes, including the origin, destination, ETA, and cost for each trip. She can tap on any route from the list to use it again.'
                        ]
                    },
                    {
                        title: 'Deleting the Account',
                        content: [
                            'Angelina taps the "Delete Account" button. A pop-up appears with a warning message: "Deleting an account is permanent. Are you sure you want to continue?" Below the message, there is an input field where she needs to type "I am sure" to confirm deletion. If Angelina decides not to delete her account, she can simply tap the "Cancel" button on the pop-up.'
                        ]
                    }
                ]}
            />
            <SDGStoryBoard
                name="Klaro Andrew (Route Analyst)"
                items={[
                    {
                        title: 'Login Screen',
                        content: [
                            'Klaro Andrew opens his computer and goes to the route analyst login screen. He recognizes the screen as it is similar to the user login screen. He enters his username and password and clicks "Login".'
                        ],
                    },
                    {
                        title: 'Analyst Request (Optional)',
                        content: [
                            'If Klaro is a new user, he might see a message informing him that his account doesn\'t have analyst access and a button to "Request Analyst Access". He clicks the "Request Analyst Access" button.'
                        ]
                    },
                    {
                        title: 'Analyst Request Form',
                        content: [
                            'A new screen appears with a form requesting Klaro\'s "Full Name", "Email", "Company", and "Reason for becoming an Analyst". He fills out the form, explaining his experience and how he can contribute to improving routes. He clicks "Submit" to send his request.'
                        ]
                    },
                    {
                        title: 'Login and Home Page',
                        content: [
                            'After his request is approved (assumed in this scenario), Klaro logs in again and is directed to the Analyst Home Page. He sees the sidebar on the left-hand side displaying his username and several buttons: "Home" (highlighted), "Routes" (grayed out), "Summary" (grayed out), and "Log Out". He notices the "Daily Statistics" section showcasing graphs for "Active Users", "Time per Kilometer", and "Traffic Reports". The "Analyst Status" section displays his verification status as "Active" with an expiry date. The "Analyst Statistics" section shows his "Days Used" and other settings. He sees the quick panel on the right side with buttons for "Issue", "Settings", and "Profile".'
                        ]
                    },
                    {
                        title: 'Exploring the Interface',
                        content: [
                            'Klaro clicks the "Home" button again to confirm it functions as expected. He then clicks on "Settings" to explore the available customization options. He changes the theme to his preference from the dropdown menu and checks the corresponding checkbox. He also sets his preferred time and date formats using the respective dropdown menus and checkboxes. He clicks the "Profile" button to view his profile information. He sees his profile picture, affiliated company, list of reported issues, credits, and account verification expiry date.'
                        ]
                    },
                    {
                        title: 'Exploring Routes',
                        content: [
                            'Back on the Home page, Klaro clicks the "Routes" button. The button becomes un-grayed, indicating it is now accessible. The "Routes Page" screen displays a table with "Route Codes", "Users Ridden", "Time per Kilometer", and a column for potential "Issues". He sees a line chart showing the average time per kilometer for different routes over a week. Another pie chart displays the most used routes with details like the number of users and route codes. He notices an "Issue" table at the bottom. He clicks on it, and a modal pops up allowing him to report issues by entering a route code and a description. He explores a specific route by clicking on its code in the table, but decides not to report any issues for now.'
                        ]
                    },
                    {
                        title: 'Exploring Summary',
                        content: [
                            'Klaro clicks the "Summary" button on the sidebar. The button becomes un-grayed, indicating it is now accessible. The "Summary Page" screen displays a line chart showing the global average time per kilometer over a week. Another line chart shows the number of users joining the app per week. A pie chart showcases user demographics like age, gender, and location, with detailed information revealed on hover. Similar to the "Routes" page, he sees an "Issue" table at the bottom. He clicks it and explores the option to report route issues.'
                        ]
                    },
                    {
                        title: 'Reporting an Issue',
                        content: [
                            'Klaro returns to the "Routes" page and identifies a route with an unusually high "Time per Kilometer". He clicks on the "Issue" table at the bottom and enters the route code. In the description field, he explains his observation about the high average time and suggests investigating the route for potential problems. He clicks "Submit" to report the issue.'
                        ]
                    },
                    {
                        title: 'Continuous Usage',
                        content: [
                            'Klaro continues to use the system throughout his workday, finding the visualizations and data helpful in identifying potential route inefficiencies. He reports any issues he encounters and explores different features to improve his workflow and gain deeper insights into route data.'
                        ]
                    }
                ]}
            />
            <SDGWireShow image={wireframe} />
        </>
    )
}
