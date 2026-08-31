import Container from './Container.jsx'

function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="border-b border-neutral-200 bg-neutral-50 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-700 uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </Container>
    </header>
  )
}

export default PageHeader
