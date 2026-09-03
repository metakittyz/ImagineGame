export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-content px-6 md:px-10 ${className}`}>{children}</div>
}

export default function Section({ id, className = '', containerClassName = '', children, as: Tag = 'section' }) {
  return (
    <Tag id={id} className={`py-20 md:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`label-mono text-xs text-accent font-semibold mb-4 ${className}`}>
      {children}
    </p>
  )
}
