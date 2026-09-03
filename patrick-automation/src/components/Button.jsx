import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 label-mono text-xs font-semibold px-6 py-3.5 transition-all duration-300 ease-engineer focus-ring whitespace-nowrap'

const variants = {
  primary: 'bg-ink text-paper hover:bg-accent border border-ink hover:border-accent',
  secondary: 'bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-paper',
  ghost: 'bg-transparent text-ink border border-transparent hover:border-ink/30',
  accent: 'bg-accent text-paper hover:bg-accent-dark border border-accent hover:border-accent-dark',
  inverse: 'bg-paper text-ink border border-paper hover:bg-accent hover:text-paper hover:border-accent',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
