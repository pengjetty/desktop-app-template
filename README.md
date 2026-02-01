# Desktop App Template

![App Icon](src-tauri/icons/128x128@2x.png)

A high-efficiency desktop application template built with Tauri 2, React 19, and TypeScript. **Designed to maximize development velocity and minimize token usage**, this template provides a solid, pre-configured foundation for building high-performance, native-looking desktop apps with AI agents.

> 🤖 **AI Agents:** Please refer to [SKILL.md](./SKILL.md) for usage instructions.

## 🚀 Features

- **Core**: [Tauri v2](https://v2.tauri.app/) for a lightweight, secure desktop experience.
- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) for fast development.
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) for utility-first styling.
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons.
- **Routing**: [React Router v7](https://reactrouter.com/) for client-side navigation.
- **Utils**: `clsx` and `tailwind-merge` configured for conditional class merging.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Rust](https://www.rust-lang.org/tools/install) (Required for Tauri)

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server with hot reload:

```bash
npm run desktop
```
or 
```bash
npm run tauri dev
```

### Building for Production

Build the application for your operating system:

```bash
npm run tauri build
```

## 📁 Project Structure

- `/src` - React frontend code.
- `/src-tauri` - Rust backend and Tauri configuration.
- `/src/components` - Reusable UI components.

## 📝 Latest Changes

- Updated to TailwindCSS v4.
- Integrated React 19.
- Basic routing setup with React Router.

