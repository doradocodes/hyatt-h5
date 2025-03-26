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
                happy: 'Happy',
                sad: 'Sad',
                excited: 'Excited',
                relaxed: 'Relaxed',
                anxious: 'Anxious',
                stressed: 'Stressed',
                tired: 'Tired',
            },
            moodSelectionProgress: 'Generating recommended session based on your selection...',
        },
        mindSelectionPage: {
            intro: {
                title: 'Mind Selection',
                body: 'Choose your desired mental state',
                slideshow: [
                    {
                        isRecommended: true,
                        id: 'deep-sleep',
                        // image: MindSelectionPlaceholderImage,
                        title: 'Deep Sleep',
                        type: 'Delta',
                        link: '/meditation-session',
                        body: `
                        #SleepJourney
                        #RestfulNights
                        #SleepInDelta
                        `,
                    },
                    {
                        id: 'deep-sleep',
                        // image: MindSelectionPlaceholderImage,
                        title: 'Deep Sleep',
                        type: 'Alpha',
                        body: `
                        #SleepJourney
                        #RestfulNights
                        #SleepInDelta
                        `,
                    },
                    {
                        id: 'deep-sleep',
                        // image: MindSelectionPlaceholderImage,
                        title: 'Deep Sleep',
                        type: 'Theta',
                        body: `
                        #SleepJourney
                        #RestfulNights
                        #SleepInDelta
                        `,
                    },
                ]
            },

        },
    },
    zh: {
        splashPage: {
            intro: "欢迎。当我们的冥想体验与您的脑波的自然节奏相一致时，调整到更深层的平静，引导您走向放松和平衡。",
            CTA: "开始旅程"
        }
    }
}
