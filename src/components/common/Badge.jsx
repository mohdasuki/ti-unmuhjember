const variants = {
  brand: 'bg-brand-50 text-brand-800 ring-brand-200',
  neutral: 'bg-neutral-100 text-neutral-700 ring-neutral-200',
}

function Badge({ variant = 'brand', className = '', children, ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
