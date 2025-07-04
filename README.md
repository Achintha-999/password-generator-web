[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue?logo=github)](https://github.com/Achintha-999/cpp-headers-library)

# 🔐 Password Generator Web 🌐

## 📝 Overview
**Password Generator Web** is a TypeScript-based web application designed to generate secure passwords with customizable options. It also includes a password strength estimator to help users evaluate how strong their generated password is.

---

## ✨ Features

- 🛠️ **Customizable Passwords**
  - 🔢 Length
  - 🔠 Uppercase letters
  - 🔢 Numbers
  - 🔣 Symbols

- 📊 **Password Strength Estimation**
  - 🟥 Weak
  - 🟧 Medium
  - 🟨 Strong
  - 🟩 Very Strong

- ⚡ **Built with Vite** for fast development and bundling

---


## ⚙️ How It Works

1. **🔑 Password Generation**
   - The `generatePassword` function creates a password based on user-selected options.
   - Utilizes cryptographically secure random values for true randomness.
   - Options include:
     - 📏 Length of the password
     - 🔠 Include uppercase letters
     - 🔢 Include numbers
     - 🔣 Include symbols

2. **🛡️ Password Strength Estimation**
   - The `estimateStrength` function evaluates password strength based on:
     - a-z, A-Z, 0-9, symbols
     - Password length
   - Returns a strength rating: 🟥 Weak | 🟧 Medium | 🟨 Strong | 🟩 Very Strong

---

## 🚀 How to Use

1. ⬇️ **Clone the repository:**
   ```bash
   git clone https://github.com/Achintha-999/password-generator-web.git
   ```

2. 📁 **Navigate to the project directory:**
   ```bash
   cd password-generator-web
   ```

3. 📦 **Install dependencies:**
   ```bash
   npm install
   ```

4. ▶️ **Start the development server:**
   ```bash
   npm run dev
   ```

5. 🌍 **Open the application** in your browser at the provided local development URL.

---

## 🧑‍💻 Example Usage

- 🎚️ Select the desired password length.
- ✅ Choose whether to include uppercase letters, numbers, and symbols.
- 🔄 Click **"Generate Password"** to create a secure password.
- 🕵️‍♂️ View the estimated strength of the generated password.

---

## 🛠️ Technologies Used

- ![typescript](https://img.shields.io/badge/-TypeScript-3178c6?logo=typescript&logoColor=white) **TypeScript:** For type-safe and scalable code
- ![vite](https://img.shields.io/badge/-Vite-646cff?logo=vite&logoColor=yellow) **Vite:** For fast development and bundling
- 🖥️ **HTML & CSS:** For the user interface

---

## 🤝 Contributing

Pull requests and stars are always welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
