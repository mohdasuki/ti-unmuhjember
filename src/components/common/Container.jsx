function Container({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component
      className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Container
