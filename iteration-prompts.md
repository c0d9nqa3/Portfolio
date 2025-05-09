# Iteration Prompts with V0.dev

This document outlines the prompt history and results during the development of my AI-assisted portfolio website using V0.dev.

---

### ✅ Prompt 1: Initial Layout

**Prompt**:
```
Create a responsive personal portfolio website using Tailwind CSS and ShadCN UI components. The site should include:

A hero section with the name “Ravi Yan”, role “Software Engineer”, and a call-to-action button “View My Work”
A projects section with 3 projects. Each project has a title, a short description, and a placeholder image
A contact section with a heading, description, and an email link
Layout should be stacked on mobile, and 2-column project layout on desktop
```

**Result**:  
A basic page was generated with:
- HeroSection component
- Projects section with 3 project cards in a responsive layout
- Contact section with email

---

### ✅ Prompt 2: Typography & Alignment

**Prompt**:
```
Make the hero section text larger and bolder. Use text-5xl for the name and text-2xl for the subtitle. Center the content.
```

**Result**:  
- Headline text was increased and centered using `text-5xl` and `text-2xl`
- Layout visually improved and better emphasizes identity

---

### ✅ Prompt 3: Card Spacing & Layout

**Prompt**:
```
Add padding and shadow to each project card. Display the cards in two columns on desktop, and stacked on mobile.
```

**Result**:  
- Added `p-6`, `shadow-md`, and `rounded-lg` to each card
- Desktop layout now uses a 2-column grid with proper gap

---

### ✅ Prompt 4: Hover Effects

**Prompt**:
```
Add a hover effect to project cards: scale up slightly and increase shadow on hover.
```

**Result**:  
- Project cards animate with `hover:scale-105` and `hover:shadow-xl`
- Improves interactivity and visual polish

---

### ✅ Prompt 5: Component Breakdown

**Prompt**:
```
Break this into reusable components: HeroSection, ProjectsSection, ProjectCard, ContactSection.
```

**Result**:  
- All major sections were split into reusable `.tsx` components
- Structure now follows best practices for maintainability
