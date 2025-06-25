import { generatePassword, estimateStrength } from './passwordGenerator';

// Get DOM elements
const passwordEl = document.getElementById('password')!;
const strengthEl = document.getElementById('strength')!;
const lengthEl = document.getElementById('length') as HTMLInputElement;
const uppercaseEl = document.getElementById('uppercase') as HTMLInputElement;
const numbersEl = document.getElementById('numbers') as HTMLInputElement;
const symbolsEl = document.getElementById('symbols') as HTMLInputElement;
const generateBtn = document.getElementById('generate')!;
const copyBtn = document.getElementById('copy')!;

// Generate new password
function generate() {
  const options = {
    length: parseInt(lengthEl.value),
    uppercase: uppercaseEl.checked,
    numbers: numbersEl.checked,
    symbols: symbolsEl.checked
  };

  const password = generatePassword(options);
  passwordEl.textContent = password;
  strengthEl.textContent = estimateStrength(password);
}

// Copy to clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(passwordEl.textContent || '')
    .then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
}

// Event listeners
generateBtn.addEventListener('click', generate);
copyBtn.addEventListener('click', copyToClipboard);

// Initial generation
generate();