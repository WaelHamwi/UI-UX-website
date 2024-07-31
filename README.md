bash -c "echo '# GTR

A modern React project setup using Vite, Tailwind CSS, GSAP, and Three.js.

## Project Setup

1. **Create a Vite project with React template:**
    ```bash
    npx create-vite@latest GTR --template react
    ```

2. **Navigate to the project directory:**
    ```bash
    cd GTR
    ```

3. **Install Tailwind CSS, PostCSS, and autoprefixer:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

4. **Initialize Tailwind CSS configuration:**
    ```bash
    npx tailwindcss init -p
    ```

5. **Install GSAP and its React integration:**
    ```bash
    npm install gsap @gsap/react
    ```

6. **Install Three.js and related libraries:**
    ```bash
    npm install three @react-three/fiber @react-three/drei
    ```

## Development

To start the development server, use:
```bash
npm run dev
