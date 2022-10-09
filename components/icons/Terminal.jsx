const TerminalIcon = () => {
  return (
    <svg viewBox="0 0 256 256" height="35" width="35">
      <rect fill="none" height="170" width="200" />
      <polyline
        fill="none"
        points="80 96 120 128 80 160"
        stroke="rgb(106, 115, 125)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
      <line
        fill="rgb(106, 115, 125)"
        stroke="rgb(106, 115, 125)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        x1="136"
        x2="176"
        y1="160"
        y2="160"
      />
      <rect
        fill="none"
        height="160"
        rx="8.5"
        stroke="rgb(106, 115, 125)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        width="192"
        x="32"
        y="48"
      />
    </svg>
  );
};

export default TerminalIcon;
