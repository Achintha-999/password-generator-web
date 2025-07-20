# 🔐 Password Generator Web

[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/github/license/Achintha-999/password-generator-web?color=blue)](LICENSE)
[![Issues](https://img.shields.io/github/issues/Achintha-999/password-generator-web?color=orange)](https://github.com/Achintha-999/password-generator-web/issues)

## 📝 Overview
**Password Generator Web** is a ⚡ TypeScript-based web application to generate secure passwords with customizable options. It includes a password strength estimator to help users evaluate password security.

## ✨ Features
- 🔢 Generate passwords with customizable options:
  - 📏 Length
  - 🔠 Uppercase letters
  - 🔢 Numbers
  - 🔣 Symbols
- 📊 Password strength estimation:
  - 🟥 Weak
  - 🟧 Medium
  - 🟩 Strong
  - 🟦 Very Strong
- 🚀 Built with Vite for fast development and bundling

## ⚙️ How It Works

1. **Password Generation**:
   - The `generatePassword` function creates a password based on user-selected options.
   - Uses cryptographically secure random values to ensure password randomness.
   - Options include:
     - Length of the password
     - Inclusion of uppercase letters, numbers, and symbols

2. **Password Strength Estimation**:
   - The `estimateStrength` function evaluates a password's strength based on:
     - Presence of lowercase letters, uppercase letters, numbers, and symbols
     - Password length
   - Returns a strength rating: Weak, Medium, Strong, or Very Strong

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Achintha-999/password-generator-web.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd password-generator-web
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open the application in your browser at the provided local development URL.**

## 🖥️ Example Usage

- Select the desired password length
- Choose whether to include uppercase letters, numbers, and symbols
- Click "Generate Password" to create a secure password
- View the estimated strength of the generated password

## 🛠️ Technologies Used

- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?logo=typescript&logoColor=white) TypeScript: For type-safe and scalable code.
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) Vite: For fast development and bundling.
- 🖼️ HTML & CSS: For the user interface.

---

> Give your accounts the security they deserve with strong, unique passwords!

####Technologies Used
TypeScript: For type-safe and scalable code.
Vite: For fast development and bundling.
HTML & CSS: For the user interface.
