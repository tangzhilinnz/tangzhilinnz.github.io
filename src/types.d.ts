// Modules

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

// Google Analytics gtag
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  gtag: (command: 'config' | 'event' | 'js', targetId: string | Date, config?: Record<string, any>) => void;
  dataLayer: any[];
}
