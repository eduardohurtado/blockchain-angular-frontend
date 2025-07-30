/**
 * This configuration file is for Tailwind CSS, which is a utility-first CSS framework.
 * It specifies the paths to the content files where Tailwind's classes will be used,
 * extends the default theme, and includes any plugins if necessary.
 * The `content` array includes all HTML and TypeScript files in the `src` directory
 * to ensure that Tailwind can purge unused styles during production builds.
 * The `theme` object allows for customization of the default Tailwind theme.
 * The `plugins` array can be used to add additional functionality or components to Tailwind.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {}
    },
    plugins: []
};
