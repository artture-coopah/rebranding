export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="var(--color-bolt-light)" />
          <stop offset="100%" stopColor="var(--color-bolt-dark)" />
        </linearGradient>
      </defs>
      {/* Stylized "ai" letterform with upward arrow */}
      <path
        d="M30 78c-8 0-14-6-14-14V46c0-8 6-14 14-14s14 6 14 14v4H34v-4c0-2.2-1.8-4-4-4s-4 1.8-4 4v18c0 2.2 1.8 4 4 4s4-1.8 4-4v-4h10v4c0 8-6 14-14 14z"
        fill="url(#logo-grad)"
      />
      <path
        d="M56 28h10v50H56z"
        fill="url(#logo-grad)"
        rx="5"
      />
      <circle cx="61" cy="20" r="6" fill="var(--color-bolt)" />
      {/* Arrow tip */}
      <path
        d="M74 30l8-16 8 16h-5v14h-6V30z"
        fill="var(--color-bolt)"
      />
    </svg>
  );
}
