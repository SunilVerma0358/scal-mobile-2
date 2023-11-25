/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Rubik: ['Rubik', 'sans-serif']
            },
            backgroundColor: {
                card_transparent: [' rgba(255, 255, 255, 0.10)'],

            },
            backgroundImage: {
                bluegreen: ["linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)"],
                lightgreen: ["linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)"],
                greenBluelight: [" linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)"],
                greenlight: ["linear-gradient(141deg, #48BF91 11.98%, #8BD9C7 83.25%)"],
                bluegradient: [" linear-gradient(134deg, #0076BE 11.95%, #95D8EB 100%)"],
                bluegreenHover: ["linear-gradient(136deg, #48BF91 20.65%, #0076BE  111.63%)"],

            },
            borderColor: {
                greenBluelight2: [" linear-gradient(136deg, #0076BE 3.65%, #48BF91 89.63%)"],
            },
            transitionDuration: {
                duration: '300ms'
            },
            animation: {
                scale: 'name 4s linear infinite ',
                scaleX: 'nameX 4s linear infinite',
                scaleY: 'nameY 4s linear infinite',
                RotateX: 'nameZ 4s linear infinite',
                hover: 'hover 4s linear ',
                logo: 'logo 3s linear 1s infinite',
                hover360: 'hover360 7s linear infinite',
                rotate180: 'hover180 3s linear infinite',
                updown: 'updown 4s linear infinite',
                backtotop: 'backtotop 3s linear infinite',
            },
            keyframes: {
                logo: {
                    '0%': { transform: 'scale(100%)' },
                    '10%': { transform: 'scale(90%)' },
                    '25%': { transform: 'scale(100%)' },
                    '50%': { transform: 'scale(90%)' },
                },
                name: {
                    '0%': { transform: 'translateY(-3%)' },
                    '50%': { transform: 'translateY(4%)' },
                    '100%': { transform: 'translateY(-3%)' }
                },
                nameX: {
                    '0%': { transform: 'scale(100%),rotateX(0deg)' },
                    '10%': { transform: 'scale(95%),rotateX(360deg)' },
                    '25%': { transform: 'scale(100%)' },
                    '50%': { transform: 'scale(95%)' },
                },
                nameY: {
                    '0%': { transform: 'scaleY(100%)' },
                    '50%': { transform: 'scaleY(90%)' },
                    '100%': { transform: 'scaleY(100%)' },

                },
                nameZ: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '50%': { transform: 'rotateY(30deg)' },
                    '100%': { transform: 'rotateY(0deg)' },

                },
                hover: {
                    '0%': { position: 'absolute( left-0)' },
                    '50%': { position: 'absolute( left-50%)' },
                    '100%': { position: 'absolute( left-100%)' },

                },
                hover360: {

                    '0%': { transform: 'rotate(-360deg)' },
                    '100%': { transform: 'rotate(360deg)' }


                },
                hover180: {
                    '0%': { transform: 'rotate(-10deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                    '100%': { transform: 'rotate(-10deg)' }
                },
                updown: {
                    '0%': { transform: 'translateY(-5%)' },

                    '50%': { transform: 'translateY(5%)' },
                    '100%': { transform: 'translateY(-5%)' }
                },
                backtotop: {
                    '0%': { transform: 'translateY(-10%)' },
                    '50%': { transform: 'translateY(10%)' },
                    '100%': { transform: 'translateY(-10%)' }
                },

            }
        },
    },
    plugins: [],
}