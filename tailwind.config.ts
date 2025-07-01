module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                rosesareblue: "#32618a",
                profile: "#474e5d",
                primary_experience: "#f5f5f5",
                work_experience: "#2f2f2f",

            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
