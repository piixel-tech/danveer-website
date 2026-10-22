// Lightweight inline SVG icons (no icon library needed)
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const InstagramIcon = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
  </svg>
)

export const XIcon = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
)

export const ChatIcon = ({ size = 20, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
  </svg>
)

export const PhoneIcon = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const MailIcon = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 6L2 7" />
  </svg>
)

export const PinIcon = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ArrowRightIcon = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const MenuIcon = ({ size = 24, open, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

export const ArrowLeftIcon = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const ChevronLeftIcon = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
)

export const ChevronRightIcon = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
)

export const CloseIcon = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
