export function FeatureCard({ children, highlighted = false }) {
  return (
    <article
      className={[
        'flex shrink-0 items-center justify-center rounded-[20px] border border-[rgba(217,217,217,0.19)]',
        'h-[60px] w-[150px] px-4 lg:h-[95px] lg:w-[210px] lg:px-[31px]',
        highlighted
          ? 'bg-[linear-gradient(180deg,rgba(217,217,217,0.19)_0%,rgba(115,115,115,0.19)_100%)]'
          : 'bg-card-solid',
      ].join(' ')}
    >
      <p className="text-center font-unbounded text-[11px] font-medium leading-tight text-white lg:text-left lg:text-xl lg:leading-snug">
        {children}
      </p>
    </article>
  )
}
