import React from "react";

export const toolLogos: Record<string, (props: { className?: string }) => React.ReactNode> = {
  Outlook: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M24 7.387v10.478c0 .23-.08.424-.238.582a.793.793 0 0 1-.584.238h-8.322V6.568h8.322c.228 0 .422.079.584.237A.793.793 0 0 1 24 7.387z" fill="#0078D4"/>
      <path d="M14.856 6.568V18.685h-8.32a.793.793 0 0 1-.584-.238.793.793 0 0 1-.238-.582V7.387c0-.228.08-.422.238-.58a.793.793 0 0 1 .583-.239h8.321z" fill="#0553A4"/>
      <ellipse cx="9.428" cy="12.626" rx="3.714" ry="3.428" fill="#28A8EA"/>
      <path d="M0 3.853v16.294c0 .247.091.458.274.633.183.175.4.263.654.263h13.928V2.957H.928a.895.895 0 0 0-.654.263A.856.856 0 0 0 0 3.853z" fill="#0078D4"/>
      <path d="M9.428 8.054A4.66 4.66 0 0 0 6.1 9.43a4.572 4.572 0 0 0-1.386 3.34c0 1.3.462 2.41 1.386 3.329a4.66 4.66 0 0 0 3.328 1.383 4.66 4.66 0 0 0 3.329-1.383 4.535 4.535 0 0 0 1.386-3.33c0-1.306-.462-2.42-1.386-3.34a4.66 4.66 0 0 0-3.329-1.376zm0 7.607c-.96 0-1.773-.34-2.44-1.02-.668-.68-1.002-1.504-1.002-2.47 0-.973.334-1.8 1.002-2.48.667-.68 1.48-1.02 2.44-1.02.96 0 1.773.34 2.44 1.02.668.68 1.002 1.507 1.002 2.48 0 .966-.334 1.79-1.002 2.47-.667.68-1.48 1.02-2.44 1.02z" fill="white"/>
    </svg>
  ),
  Teams: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M20.6 7.5a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8z" fill="#5059C9"/>
      <path d="M22.5 9h-4.2a.8.8 0 0 0-.8.8v5a3.3 3.3 0 0 1-1.8 2.9 3.3 3.3 0 0 1-3.4-.1A5.8 5.8 0 0 0 14.5 13V9.5a1 1 0 0 1 1-1H22a.5.5 0 0 1 .5.5z" fill="#5059C9"/>
      <path d="M16.5 5.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z" fill="#7B83EB"/>
      <path d="M14.5 9H5a1 1 0 0 0-1 1v5.5a5.5 5.5 0 1 0 11 0V10a1 1 0 0 0-1-1z" fill="#7B83EB"/>
      <path d="M10.5 9v9.84a.66.66 0 0 1-.53.65.6.6 0 0 1-.12.01H5.12A5.5 5.5 0 0 1 4 15.5V10a1 1 0 0 1 1-1h5.5z" fill="url(#teams-grad)"/>
      <defs><linearGradient id="teams-grad" x1="4" y1="9" x2="10.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stopColor="#7B83EB" stopOpacity=".6"/><stop offset="1" stopColor="#7B83EB" stopOpacity=".1"/></linearGradient></defs>
    </svg>
  ),
  Odoo: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="2" y="6" width="20" height="12" rx="6" fill="#714B67"/>
      <circle cx="7.5" cy="12" r="2" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="white"/>
      <circle cx="16.5" cy="12" r="2" fill="white"/>
    </svg>
  ),
  Teamleader: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#00B2B2"/>
      <path d="M6 7h12v2.5H13.25V17h-2.5V9.5H6V7z" fill="white"/>
    </svg>
  ),
  Billit: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="5" fill="#1B1464"/>
      <path d="M7 6h2.5v2H7V6zm0 3.5h2.5V17H7V9.5z" fill="#00C8FF"/>
      <path d="M11.5 6H14v2h-2.5V6zm0 3.5H14v4.5c0 1.66 1.34 3 3 3v2.5c-3.04 0-5.5-2.46-5.5-5.5V9.5z" fill="white"/>
    </svg>
  ),
  Excel: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="2" width="18" height="20" rx="2" fill="#21A366"/>
      <path d="M15 2v6h6" fill="#33C481"/>
      <path d="M8.5 17l2.1-3.2L8.6 10.6h1.6l1.2 2.1c.1.2.2.3.2.4.1-.2.2-.3.3-.4l1.2-2.1h1.5l-2 3.1L14.7 17h-1.6l-1.3-2.5-.1-.2-.1.2L10.2 17H8.5z" fill="white"/>
    </svg>
  ),
};
