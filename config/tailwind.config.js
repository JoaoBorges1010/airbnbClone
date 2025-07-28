import defaultTheme from 'tailwindcss/defaultTheme'

export const content = [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,htm,slim}'
]
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme, fontFamily.sans],
        },
    },
}
export const plugins = [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
]