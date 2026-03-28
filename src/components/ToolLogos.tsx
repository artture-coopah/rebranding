import React from "react";

export const toolLogos: Record<string, (props: { className?: string }) => React.ReactNode> = {
  Slack: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M5.04 15.17a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.27 0a2.52 2.52 0 1 1 5.04 0v6.31a2.52 2.52 0 1 1-5.04 0v-6.31z" fill="#E01E5A"/>
      <path d="M8.83 5.04a2.52 2.52 0 1 1 2.52-2.52v2.52H8.83zm0 1.27a2.52 2.52 0 1 1 0 5.04H2.52a2.52 2.52 0 1 1 0-5.04h6.31z" fill="#36C5F0"/>
      <path d="M18.96 8.83a2.52 2.52 0 1 1 2.52 2.52h-2.52V8.83zm-1.27 0a2.52 2.52 0 1 1-5.04 0V2.52a2.52 2.52 0 1 1 5.04 0v6.31z" fill="#2EB67D"/>
      <path d="M15.17 18.96a2.52 2.52 0 1 1-2.52 2.52v-2.52h2.52zm0-1.27a2.52 2.52 0 1 1 0-5.04h6.31a2.52 2.52 0 1 1 0 5.04h-6.31z" fill="#ECB22E"/>
    </svg>
  ),
  Google: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09A6.97 6.97 0 0 1 5.47 12c0-.72.13-1.43.37-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
  Excel: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="2" width="18" height="20" rx="2" fill="#21A366"/>
      <path d="M15 2v6h6" fill="#33C481"/>
      <path d="M8.5 17l2.1-3.2L8.6 10.6h1.6l1.2 2.1c.1.2.2.3.2.4.1-.2.2-.3.3-.4l1.2-2.1h1.5l-2 3.1L14.7 17h-1.6l-1.3-2.5-.1-.2-.1.2L10.2 17H8.5z" fill="white"/>
    </svg>
  ),
  Zapier: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF4A00"/>
      <path d="M16.5 8h-3.2l-2.8 4.5L13.3 8H9l-1.5 3.5h3.2L7.5 16h3.2l2.8-4.5L10.7 16H15l1.5-3.5h-3.2L16.5 8z" fill="white"/>
    </svg>
  ),
};
