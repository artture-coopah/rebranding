export function MailIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Envelope base */}
      <rect x="10" y="22" width="44" height="32" rx="4" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5"/>
      <path d="M10 26l22 14 22-14" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Stacked emails behind */}
      <rect x="14" y="18" width="44" height="32" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1"/>
      <rect x="10" y="22" width="44" height="32" rx="4" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5"/>
      <path d="M10 26l22 14 22-14" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Lightning bolt */}
      <g transform="translate(52, 8)">
        <path d="M12 2L5 14h5l-2 10 9-14h-5l4-8z" fill="#F27B1C" stroke="#D46A12" strokeWidth="1" strokeLinejoin="round"/>
      </g>
      {/* Sparkles */}
      <circle cx="62" cy="8" r="1.5" fill="#F27B1C" opacity=".6"/>
      <circle cx="72" cy="18" r="1" fill="#F27B1C" opacity=".4"/>
      {/* Checkmark result */}
      <circle cx="68" cy="56" r="10" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5"/>
      <path d="M63 56l3 3 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function InvoiceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Document */}
      <rect x="16" y="8" width="36" height="48" rx="4" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
      {/* Lines */}
      <line x1="24" y1="20" x2="44" y2="20" stroke="#FECACA" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="27" x2="40" y2="27" stroke="#FECACA" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="34" x2="36" y2="34" stroke="#FECACA" strokeWidth="2" strokeLinecap="round"/>
      {/* Euro sign */}
      <circle cx="34" cy="44" r="5" fill="#FEE2E2"/>
      <text x="34" y="47.5" textAnchor="middle" fill="#F87171" fontSize="8" fontWeight="bold" fontFamily="system-ui">&euro;</text>
      {/* Arrow */}
      <path d="M54 32l8 0" stroke="#F27B1C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 28l4 4-4 4" stroke="#F27B1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Result document with check */}
      <rect x="66" y="18" width="10" height="28" rx="2" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1"/>
      <circle cx="71" cy="58" r="10" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5"/>
      <path d="M66 58l3 3 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FollowUpIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Paper plane */}
      <g transform="translate(8, 12)">
        <path d="M4 20L28 8l-6 14-18 2z" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M28 8L22 22l-8-6" stroke="#F87171" strokeWidth="1.5" strokeLinejoin="round"/>
      </g>
      {/* Trail dots */}
      <circle cx="40" cy="28" r="2" fill="#F27B1C" opacity=".3"/>
      <circle cx="48" cy="24" r="2.5" fill="#F27B1C" opacity=".5"/>
      <circle cx="56" cy="20" r="3" fill="#F27B1C" opacity=".7"/>
      {/* Circular arrow (auto-follow-up) */}
      <g transform="translate(50, 36)">
        <path d="M14 8a10 10 0 1 0-4 8" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M10 20l2-4-4-1" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Bolt inside */}
        <path d="M11 5L8 12h3l-1.5 5 5-7h-3l2.5-5z" fill="#F27B1C" strokeLinejoin="round"/>
      </g>
      {/* Notification bell */}
      <circle cx="68" cy="60" r="9" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5"/>
      <path d="M68 55v3.5a3.5 3.5 0 0 1-3 3.5h6a3.5 3.5 0 0 1-3-3.5V55z" stroke="#059669" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <circle cx="68" cy="64" r="1" fill="#059669"/>
    </svg>
  );
}

export function ReportIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Spreadsheet grid */}
      <rect x="8" y="12" width="36" height="30" rx="3" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
      <line x1="8" y1="22" x2="44" y2="22" stroke="#FECACA" strokeWidth="1"/>
      <line x1="8" y1="32" x2="44" y2="32" stroke="#FECACA" strokeWidth="1"/>
      <line x1="20" y1="12" x2="20" y2="42" stroke="#FECACA" strokeWidth="1"/>
      <line x1="32" y1="12" x2="32" y2="42" stroke="#FECACA" strokeWidth="1"/>
      {/* Red X marks (manual errors) */}
      <g stroke="#F87171" strokeWidth="1.5" strokeLinecap="round">
        <line x1="23" y1="25" x2="29" y2="29"/>
        <line x1="29" y1="25" x2="23" y2="29"/>
      </g>
      {/* Arrow */}
      <path d="M46 28l8 0" stroke="#F27B1C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M52 24l4 4-4 4" stroke="#F27B1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dashboard result */}
      <rect x="58" y="14" width="18" height="26" rx="3" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5"/>
      {/* Mini bar chart */}
      <rect x="62" y="28" width="3" height="8" rx="1" fill="#059669"/>
      <rect x="66.5" y="24" width="3" height="12" rx="1" fill="#059669" opacity=".7"/>
      <rect x="71" y="20" width="3" height="16" rx="1" fill="#059669" opacity=".5"/>
      {/* Trend line */}
      <path d="M62 22l5-3 5 1" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Checkmark */}
      <circle cx="67" cy="56" r="10" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5"/>
      <path d="M62 56l3 3 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
