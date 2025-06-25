export function generatePassword(options: {
    length: number;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }): string {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = options.uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numbers = options.numbers ? '0123456789' : '';
    const symbols = options.symbols ? '!@#$%^&*()_+-=[]{}|;:,.<>?' : '';
    
    const charset = lowercase + uppercase + numbers + symbols;
    
    let password = '';
    const crypto = window.crypto || (window as any).msCrypto;
    const values = new Uint32Array(options.length);
    crypto.getRandomValues(values);
    
    for (let i = 0; i < options.length; i++) {
      password += charset[values[i] % charset.length];
    }
    
    return password;
  }
  
  export function estimateStrength(password: string): string {
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);
    const length = password.length;
  
    let score = 0;
    if (hasLower) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSymbol) score++;
    if (length >= 12) score += 2;
    else if (length >= 8) score++;
  
    return score <= 2 ? "Weak" :
           score <= 4 ? "Medium" :
           score <= 6 ? "Strong" : "Very Strong";
  }