# Project Architecture & Coding Standards

## 1. Technology Stack
- **Core**: React 18, TypeScript, Webpack 5.
- **Styling**: Emotion (`@emotion/styled`).
- **UI Library**: `@imspdr/ui`.
- **State/Data**: `react-query`, `jotai`/`recoil` (as evident in package.json).
- **Routing**: `react-router-dom`.

## 2. Architecture: Hook-Based Separation of Concerns
The project follows a strict separation between View (UI) and Logic (Business Rules).

-   **Pages (`src/pages`)**:
    -   Focus strictly on **UI composition** and **rendering**.
    -   Do **not** implement business logic (fetching, state mutation, headers handling) directly in the Page component.
    -   **Pattern**: Call a custom hook (e.g., `useQuiz`, `useDetail`) to retrieve state and handlers.

-   **Custom Hooks (`src/hooks`)**:
    -   Encapsulate **ALL** business logic, API calls, side effects (`useEffect`), and local/global state management.
    -   Return only the data and action handlers needed by the Page.
    -   Naming convention: `use{PageName}` or `use{FeatureName}` (e.g., `useUploadPage`).

-   **Component Structure**:
    -   Directories: `src/components/[PascalCaseName]`.
    -   **Separation**:
        -   Logic and JSX: `index.tsx`.
        -   Styles: `styled.ts` in the same directory.
    -   **Do NOT** use inline styles unless dynamic.

## 3. UI Library Usage (`@imspdr/ui`)
Strict adherence to the design system components is required.

-   **Typography**:
    -   **MUST** use the `Typography` component for all text content.
    -   Supported variants: `title`, `body`, `caption`. 
    -   Avoid native HTML text tags (`<p>`, `<span>`, `<div>`) unless wrapped.

-   **Buttons**:
    -   **MUST** use the `Button` component from `@imspdr/ui`.
    -   **Do NOT** wrap `Button` in `styled-components` to override internal styles.

-   **Layout**:
    -   Use `Stack` from `@imspdr/ui` for complex flexbox layouts.

-   **Feedback**:
    -   **Toast**: MUST use `useToast` -> `showToast("Message")`.
    -   **Modal**: MUST use `useModal` -> `openModal(content, options)`.
    -   **Do NOT** use `window.alert` or `console.log`.

-   **Icons**:
    -   Use `react-icons/hi` (HeroIcons) or `react-icons/md` as the primary icon set.

## 4. Styling & Theming
-   **CSS Variables**: **ALWAYS** use defined CSS variables.
    -   Backgrounds: `var(--imspdr-background-bg1)`, `var(--imspdr-background-bg2)`
    -   Foregrounds: `var(--imspdr-foreground-fg1)`, `var(--imspdr-foreground-fg2)`
    -   Highlights: `var(--imspdr-mint-mint1)`, `var(--imspdr-border-border1)`
    -   Avoid hardcoded hex colors.

-   **Responsive & Interactive**:
    -   Mobile breakpoint: `768px`.
    -   **CRITICAL**: Wrap hover effects in `@media (hover: hover) { ... }` to prevent "sticky" hover on mobile.

-   **Header/Nav Items**:
    -   Match background color of container (e.g., transparent or `bg1`).
    -   No border (`border: none`).

## 5. Coding & Language Rules
-   **Language**:
    -   **MUST** use Korean (Hangul) for all user-facing hardcoded texts (UI labels, messages).
