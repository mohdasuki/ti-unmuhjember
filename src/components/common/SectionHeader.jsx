function SectionHeader({ eyebrow, title, titleId, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <header className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-700 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 id={titleId} className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
          {description}
        </p>
      )}
    </header>
  )
}

export default SectionHeader
