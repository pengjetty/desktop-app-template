---
name: desktop_app_template
description: Skill for scaffolding new projects using the pjsu-desktop-app-template.
---

# Desktop App Template Skill

This skill provides instructions for initializing a new desktop application using the `desktop-app-template` as a base.

## 1. Goal
Maximize development velocity and minimize token usage by starting from a pre-configured, high-performance foundation.

## 2. Usage Instructions for Agents

When a user asks to "create a new desktop app" or "start a new Tauri project" using this template:

1.  **Clone the Template**:
    Clone the repository to the user's desired location.
    ```bash
    git clone https://github.com/pjsu/desktop-app-template.git <NEW_PROJECT_NAME>
    ```

2.  **Clean Git History**:
    Navigate into the new directory and remove the existing git history to start fresh.
    ```bash
    cd <NEW_PROJECT_NAME>
    rm -rf .git
    git init
    ```

3.  **Install Dependencies**:
    Install the Node.js dependencies.
    ```bash
    npm install
    ```

4.  **Rename Project**:
    - Update `package.json` `name` field.
    - Update `src-tauri/tauri.conf.json` `productName` and `identifier` fields.

5.  **Verify Setup**:
    Run the development server to ensure everything works.
    ```bash
    npm run desktop
    ```

## 3. Template Features
- **Tauri 2**: Security and performance.
- **React 19**: Latest React features.
- **Tailwind v4**: Modern styling.
- **Lucide React**: Icons.
- **Router**: React Router v7 configured.

## 4. Best Practices
- **Vibe Coding**: Rely on the pre-built components in `src/components` to save context window space.
- **UI Consistency**: Use the defined CSS variables in `src/index.css` for consistent theming.
