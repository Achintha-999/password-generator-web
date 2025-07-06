# Password Generator Web

## Overview
**Password Generator Web** is a TypeScript-based web application designed to generate secure passwords with customizable options. It also includes a password strength estimator to help users evaluate the security of their generated passwords.

## Features
- Generate passwords with customizable options:
  - Length
  - Uppercase letters
  - Numbers
  - Symbols
- Password strength estimation:
  - Weak
  - Medium
  - Strong
  - Very Strong
- Built with Vite for fast development and bundling.

## How It Works
1. **Password Generation**:
   - The `generatePassword` function creates a password based on user-selected options.
   - It uses cryptographically secure random values to ensure password randomness.
   - Options include:
     - Length of the password.
     - Inclusion of uppercase letters, numbers, and symbols.

2. **Password Strength Estimation**:
   - The `estimateStrength` function evaluates the strength of a password based on:
     - Presence of lowercase letters, uppercase letters, numbers, and symbols.
     - Password length.
   - Returns a strength rating: Weak, Medium, Strong, or Very Strong.

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Achintha-999/password-generator-web.git
   ```

2. Navigate to the project directory:
   cd password-generator-web   

3. Install dependencies:
   npm install

4. Start the development server:  
   npm run dev

5. Open the application in your browser at the provided local development URL.

####Example Usage
Select the desired password length.
Choose whether to include uppercase letters, numbers, and symbols.
Click "Generate Password" to create a secure password.
View the estimated strength of the generated password.

####Technologies Used
TypeScript: For type-safe and scalable code.
Vite: For fast development and bundling.
HTML & CSS: For the user interface.
