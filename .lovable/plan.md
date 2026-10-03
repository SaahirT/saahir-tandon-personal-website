# Portfolio implementation plan

- Replace the placeholder home screen with a responsive, single-view portfolio experience.
- Build a fixed desktop sidebar with icon-and-text navigation and a compact mobile menu.
- Add About, Courses, Experience, and Portfolio views with realistic placeholder content.
- Add course category filtering, section transitions, active navigation states, and restrained hover effects.
- Define the dark teal-led visual system, typography, spacing, borders, and motion in the shared stylesheet.
- Add page-specific metadata and update the shared document metadata/fonts.
- Verify the main interactions and responsive layouts in the running preview.

## Technical details
- Keep all four portfolio sections within the index route and switch them with React state, avoiding long-page scrolling.
- Use semantic Tailwind tokens and accessible buttons/links throughout.
