// Shared building blocks

const DEVANAGARI = /[ऀ-ॿ]/

/**
 * Small uppercase label, e.g. "ABOUT" or "परिचय · ABOUT".
 * Wide letter-spacing is applied only to Latin parts, because
 * tracking breaks Devanagari letter joins.
 */
export function Label({ text, className = '' }) {
  const parts = text.split(' · ')
  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <span> · </span>}
          <span className={DEVANAGARI.test(part) ? '' : 'tracking-label'}>{part}</span>
        </span>
      ))}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div>
      <Label text={eyebrow} className="block text-[13px] font-bold leading-[18px] text-orange" />
      <h2
        className={`mt-2 text-[32px] leading-[1.25] sm:text-[40px] ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-[17px] leading-[27px] text-grey">{subtitle}</p>}
    </div>
  )
}

export function Button({ href, children, variant = 'primary', className = '', ...rest }) {
  const styles = {
    primary: 'bg-orange text-white transition duration-200 hover:-translate-y-px hover:shadow-lg',
    outline: 'border-2 border-black text-black transition-colors hover:bg-black hover:text-white',
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export const external = { target: '_blank', rel: 'noopener noreferrer' }
