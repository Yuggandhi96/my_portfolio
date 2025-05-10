import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logError = (error, context = '') => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [ERROR] ${context}: ${error.message}\n${error.stack}\n\n`;
  
  // Only log to file in production
  if (process.env.NODE_ENV === 'production') {
    const logDir = path.join(__dirname, '../logs');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
    
    const logFile = path.join(logDir, 'error.log');
    fs.appendFileSync(logFile, logMessage);
  }
  
  // Always log to console
  console.error(logMessage);
};
