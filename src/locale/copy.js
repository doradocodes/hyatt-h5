export default {
    en: {
        splashPage: {
            intro: "Welcome to Hyatt’s meditation experience. Find your calm, right here.",
            CTA: "Start the journey"
        },
        onboardingPage: {
            intro: {
                slideshow: [
                    {
                        image: "/images/Onboarding_Intro1.png",
                        title: "1. Begin your meditation journey with us",
                        body: "Simple steps to a peaceful experience here. Start your meditation session by selecting the right mindset and music. Let’s get you relaxed and focused.",
                        cta: 'Next'
                    },
                    {
                        image: "/images/Onboarding_Intro2.png",
                        title: "2. Select your desire mindset & music",
                        body: "Choose your desired mental state. Pick the mindset that fits your current mood whether you want to relax, focus, or prepare for a restful sleep.",
                        cta: 'Next'
                    },
                    {
                        image: "/images/Onboarding_Intro3.png",
                        title: "3. Share your journey with others",
                        body: "Capture and share your meditation moments! Visualize your brainwave activity with music and post it on social media to inspire others to find peace.",
                        cta: 'Start the journey',
                        link: '/mood-selection'
                    },
                ]
            },
        },
        moodSelectionPage: {
            intro: {
                title: 'Mood Selection',
                body: 'Choose your current feeling',
            },
            moods: {
                excited: {
                    name: 'Excited',
                    icon: 'icons/excited-icon.svg',
                    recommendedMeditations: ['gamma', 'beta', 'delta'],
                },
                relaxed: {
                    name: 'Relaxed',
                    icon: 'icons/relaxed-icon.svg',
                    recommendedMeditations: ['gamma', 'alpha', 'beta'],
                },
                stressed: {
                    name: 'Stressed',
                    icon: 'icons/stressed-icon.svg',
                    recommendedMeditations: ['theta', 'alpha'],
                },
                tired: {
                    name: 'Tired',
                    icon: 'icons/tired-icon.svg',
                    recommendedMeditations: ['delta', 'theta'],
                },
            },
            moodSelectionProgress: 'Generating recommended session based on your selection...',
        },
        mindSelectionPage: {
            intro: {
                title: 'Mind Selection',
                body: 'Choose your desired mental state',
                slideshow: [
                    {
                        id: 'delta',
                        title: 'Deep Sleep',
                        type: 'Delta',
                    },
                    {
                        id: 'theta',
                        title: 'Recharge',
                        type: 'Theta',
                    },
                    {
                        id: 'beta',
                        title: 'Focus',
                        type: 'Beta',
                    },
                    {
                        id: 'alpha',
                        title: 'Meditation',
                        type: 'Alpha',
                    },
                    {
                        id: 'gamma',
                        title: 'Energize',
                        type: 'Gamma',
                    },
                ]
            },

        },
        meditationSessionPage: {
            sessionDurationLabel: 'Session duration',
            states: {
                'delta': {
                    subtitle: 'Brainwave | Delta',
                    title: 'Deep Sleep',
                    body: 'Enter a state of restorative, deep sleep designed to help you fully recharge and wake feeling refreshed. In the \'Delta\' phase, we guide your mind into the delta brainwave range—waves closely tied to the deepest, most rejuvenating stages of sleep.\n' +
                        '\n' +
                        'Through a gentle, slowed rhythm, this session calms your nervous system, eases muscle tension, and fosters a profound sense of relaxation, creating the ideal environment for complete rest and renewal.\n',
                    CTA: 'Play the session',
                },
                'theta': {
                    subtitle: 'Brainwave | Theta',
                    title: 'Recharge',
                    body: 'In this session, we gently guide your mind into the ‘Theta’ brainwave range—a frequency scientifically associated with deep relaxation, heightened creativity, intuitive insights, and bursts of inspiration.\n' +
                        '\n' +
                        'By entering this tranquil state, you can unlock a deeper connection to your inner self, allowing your thoughts to flow freely and organically. This session is thoughtfully designed to cultivate a calm, meditative state where mental clarity and self-discovery flourish.\n',
                    CTA: 'Play the session',
                },
                'alpha': {
                    subtitle: 'Brainwave | Alpha',
                    title: 'Meditation',
                    body: 'In this session, your mind gently transitions into the ‘Alpha’ brainwave range—a state closely linked to calm focus, mental clarity, and a sense of inner harmony. This brainwave state is often associated with being in the flow, where creativity and problem-solving thrive effortlessly.\n' +
                        '\n' +
                        'Designed with your well-being in mind, this session helps you unwind from the pressures of daily life, reduce stress, and cultivate a balanced state of relaxation and alertness.\n',
                    CTA: 'Play the session',
                },
                'beta': {
                    subtitle: 'Brainwave | Beta',
                    title: 'Focus',
                    body: 'In this session, your mind enters the ‘Beta’ brainwave range—a state associated with active thinking, analytical problem-solving, and heightened focus. This brainwave frequency is where your brain is most engaged, making it ideal for tackling challenges, absorbing information, and staying alert.\n' +

                    'Designed to enhance mental clarity, sharpen your concentration, and elevate your productivity. By the end, you\'ll feel prepared to navigate your day with focus and purpose.',
                    CTA: 'Play the session',
                },
                'gamma': {
                    subtitle: 'Brainwave | Gamma',
                    title: 'Energize',
                    body: 'In this session, your mind transitions into the ‘Gamma’ brainwave range—a state linked to heightened mental clarity, peak focus, and the natural feeling of joy. This frequency is often associated with moments of deep insight, heightened awareness, and an overall sense of well-being.\n' +

                    'Designed to amplify your sense of energize, boost concentration, and channel positive energy, this session helps you feel uplifted, inspired, and deeply connected to your inner energy.',
                    CTA: 'Play the session',
                }
            },
            musicThemeTitle: 'Music theme',
            musicThemeSubtitle: 'Switch to a music theme that fits your mood.',
            sessionTitle: 'Try another session',
            sessionSubtitle: 'Switch to a session that fits your current mood.',
            sessions: [
                {
                    id: 'delta',
                    title: 'Deep Sleep',
                },
                {
                    id: 'theta',
                    title: 'Recharge',
                },
                {
                    id: 'beta',
                    title: 'Focus',
                },
                {
                    id: 'alpha',
                    title: 'Meditation',
                },
                {
                    id: 'gamma',
                    title: 'Energize',
                }
            ],
            musicThemes: [
                {
                    id: 'ambient',
                    title: 'Ambient',
                },
                {
                    id: 'classical',
                    title: 'Classical',
                },
                {
                    id: 'jazz',
                    title: 'Jazz',
                },
            ],
            CTA: 'Finish the session',
        },
        sharePage: {
            title: 'Session summary',
            body: 'Here’s a quick shortcut to your session',
            shareCTA: 'Share your session',
            hyattCTA: 'Explore Hyatt experiences',
            socialMedia: {
                title: 'Share this journey',
                body: 'If you like this journey, share it with your friends',
                types: [
                    {
                        id: 'wechat',
                        title: 'WeChat',
                    },
                    {
                        id: 'instagram',
                        title: 'Instagram',
                    },
                    {
                        id: 'xiaohongshu',
                        title: 'Xiaohongshu',
                    },
                    {
                        id: 'weibo',
                        title: 'Weibo',
                    }
                ],
                shareURL: 'https://www.hyatt.com/meditation/newyearsale-asia'
            }
        },
    },
    zh: {
        splashPage: {
            intro: "欢迎。当我们的冥想体验与您的脑波的自然节奏相一致时，调整到更深层的平静，引导您走向放松和平衡。",
            CTA: "开始旅程"
        }
    }
}
