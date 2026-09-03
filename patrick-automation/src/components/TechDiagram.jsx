// Lightweight inline-SVG technical illustrations used in place of stock photography.
// Each is a restrained wireframe / CAD-style diagram rendered in currentColor + accent.

function Frame({ children, className = '', label }) {
  return (
    <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="tg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1D2126" strokeOpacity="0.06" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#tg-grid)" />
        {children}
      </svg>
    </div>
  )
}

const stroke = '#1D2126'
const accent = '#2452D9'

export function AMRDiagram(props) {
  return (
    <Frame label="Wireframe diagram of an autonomous mobile robot chassis" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="90" y="120" width="220" height="90" rx="6" />
        <rect x="110" y="140" width="80" height="50" rx="3" stroke={accent} />
        <circle cx="130" cy="230" r="20" />
        <circle cx="270" cy="230" r="20" />
        <circle cx="130" cy="230" r="6" fill={stroke} />
        <circle cx="270" cy="230" r="6" fill={stroke} />
        <rect x="210" y="135" width="70" height="60" rx="3" />
        <path d="M220 145h50M220 155h50M220 165h50" stroke={stroke} strokeOpacity="0.5" />
        <path d="M90 110 L310 110" strokeDasharray="2 3" />
        <path d="M90 100v14M310 100v14" />
        <text x="185" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill={stroke} textAnchor="middle">
          220
        </text>
      </g>
    </Frame>
  )
}

export function MachineDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a custom assembly machine" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="60" y="200" width="280" height="20" />
        <rect x="90" y="80" width="30" height="120" />
        <rect x="280" y="80" width="30" height="120" />
        <circle cx="200" cy="150" r="45" stroke={accent} />
        <circle cx="200" cy="150" r="8" fill={accent} />
        <path d="M200 105v-20M200 195v20M245 150h20M155 150h-20" />
        <path d="M120 100h160" strokeDasharray="2 3" />
        <path d="M120 90v14M280 90v14" />
      </g>
    </Frame>
  )
}

export function FeedingDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a vibratory part feeding bowl and track" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <ellipse cx="140" cy="150" rx="70" ry="45" />
        <ellipse cx="140" cy="150" rx="45" ry="28" stroke={accent} />
        <path d="M205 140 C 260 130, 320 120, 360 100" />
        <path d="M205 160 C 260 150, 320 140, 360 120" />
        <circle cx="330" cy="105" r="4" fill={accent} />
        <circle cx="300" cy="112" r="4" fill={accent} />
        <path d="M70 210h140" strokeDasharray="2 3" />
        <path d="M70 200v14M210 200v14" />
      </g>
    </Frame>
  )
}

export function WorkcellDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a robotic workcell" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="60" y="60" width="280" height="180" strokeDasharray="4 3" />
        <circle cx="150" cy="150" r="10" fill={stroke} />
        <path d="M150 150 L200 100 M150 150 L220 160 M150 150 L180 200" stroke={accent} />
        <rect x="255" y="140" width="50" height="40" />
        <rect x="90" y="140" width="40" height="40" />
      </g>
    </Frame>
  )
}

export function MeasurementDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a precision inspection fixture" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="110" y="170" width="180" height="16" />
        <rect x="150" y="120" width="100" height="50" stroke={accent} />
        <circle cx="200" cy="90" r="14" />
        <path d="M200 104v16" />
        <path d="M150 200h100" strokeDasharray="2 3" />
        <path d="M150 190v14M250 190v14" />
        <text x="200" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill={stroke} textAnchor="middle">
          &plusmn;0.02
        </text>
      </g>
    </Frame>
  )
}

export function ProductDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a handheld product enclosure" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="140" y="70" width="90" height="170" rx="16" />
        <rect x="155" y="95" width="60" height="35" rx="3" stroke={accent} />
        <circle cx="185" cy="200" r="10" />
        <path d="M140 155h90" strokeOpacity="0.4" />
        <path d="M245 90h30" strokeDasharray="2 3" />
        <path d="M245 80v20M275 80v20" />
      </g>
    </Frame>
  )
}

export function FixtureDiagram(props) {
  return (
    <Frame label="Wireframe diagram of a modular workholding fixture" {...props}>
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        <rect x="80" y="180" width="240" height="24" />
        <rect x="110" y="130" width="50" height="50" stroke={accent} />
        <rect x="180" y="130" width="50" height="50" />
        <rect x="250" y="130" width="50" height="50" stroke={accent} />
        <circle cx="135" cy="155" r="4" fill={stroke} />
        <circle cx="205" cy="155" r="4" fill={stroke} />
        <circle cx="275" cy="155" r="4" fill={stroke} />
      </g>
    </Frame>
  )
}

export function HeroAssembly({ className = '' }) {
  return (
    <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
      <svg viewBox="0 0 600 480" className="h-full w-full" role="img" aria-label="Exploded wireframe illustration of a mechanical assembly transforming from concept to finished machine">
        <defs>
          <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1D2126" strokeOpacity="0.06" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="480" fill="url(#hero-grid)" />

        <g stroke="#8A9098" strokeDasharray="2 4" fill="none">
          <path d="M120 380 L480 380" />
          <path d="M120 370v20M480 370v20" />
        </g>

        {/* exploded stack */}
        <g fill="none" stroke="#1D2126" strokeWidth="1.5">
          <rect x="200" y="90" width="200" height="40" />
          <rect x="220" y="160" width="160" height="30" stroke="#2452D9" />
          <rect x="240" y="220" width="120" height="60" />
          <circle cx="300" cy="330" r="34" stroke="#2452D9" />
          <circle cx="300" cy="330" r="6" fill="#2452D9" />
        </g>

        <g stroke="#8A9098" strokeWidth="1">
          <path d="M300 130v30" strokeDasharray="1 4" />
          <path d="M300 190v30" strokeDasharray="1 4" />
          <path d="M300 280v16" strokeDasharray="1 4" />
        </g>

        <g fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#4A5158">
          <text x="410" y="112">ASSY-001</text>
          <text x="390" y="180">SUBSYS-A</text>
          <text x="365" y="255">CORE</text>
          <text x="340" y="330">DRIVE</text>
        </g>

        <g stroke="#1D2126" strokeOpacity="0.15">
          <circle cx="300" cy="240" r="180" fill="none" />
        </g>
      </svg>
    </div>
  )
}

export const diagramByKind = {
  amr: AMRDiagram,
  machine: MachineDiagram,
  feeding: FeedingDiagram,
  workcell: WorkcellDiagram,
  measurement: MeasurementDiagram,
  product: ProductDiagram,
  fixture: FixtureDiagram,
}
