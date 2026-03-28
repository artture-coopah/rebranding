export function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative -mt-px" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        preserveAspectRatio="none"
        style={{ height: "56px" }}
      >
        <path
          d="M0 24C240 56 480 56 720 32C960 8 1200 8 1440 24V56H0V24Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
