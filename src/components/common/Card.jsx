function Card({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component
      className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-card sm:p-6 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card
