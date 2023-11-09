/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'meetup-blue': '#00455D',
                'meetup-purple': '#1F34CC',
                'gray-750': '#3F495A',
                'gray-850': '#222733',
                'gray-900-spotify': '#121212',
                'gray-800-spotify': '#181818',
                'gray-700-spotify': '#282828'
            },
            spacing: {
                '14': '3.5rem',
                '22': '5.5rem',
                '72': '18rem',
                '200': '50rem'
            },
            width: {
                '7/10': '70%',
                '3/10': '30%'
            },
            fontSize: {
                xxs: '0.5rem'
            },
            screens: {
                'mds': '650px'
            }
        },
    },
    plugins: [],
}