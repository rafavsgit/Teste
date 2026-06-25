import { FeatureCard } from './FeatureCard'
import { HeroButton } from './HeroButton'

const features = [
  { label: 'Conta + PIX sem burocracia ', highlighted: true },
  { label: 'Wallet Cripto integrada', highlighted: false },
  { label: 'Segurança de banco', highlighted: false },
]

export function HeroSection({ heroBgDesktop, heroBgMobile, arrowIcon }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[745px] overflow-hidden lg:h-[711px]"
    >
      <picture className="absolute inset-0">
        <source media="(min-width: 1024px)" srcSet={heroBgDesktop} />
        <img
          src={heroBgMobile}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
          aria-hidden="true"
        />
      </picture>

      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.1)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(260deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden="true"
      />

      <div className="relative h-full">
        <div className="flex flex-col items-center gap-2.5 px-[30px] pt-[59px] text-center lg:items-start lg:gap-[87px] lg:px-0 lg:pl-[124px] lg:pr-[421px] lg:pt-[106px] lg:text-left">
          <h1
            id="hero-heading"
            className="w-[291px] font-unbounded text-[28px] font-medium leading-[1.15] text-white lg:w-auto lg:text-[42px] lg:leading-[1.2]"
          >
            Seu dinheiro e suas criptos, no mesmo lugar.
          </h1>

          <p className="font-jakarta text-base font-medium leading-normal text-text-muted lg:text-[23px]">
            Conta digital, PIX e Wallet Cripto integrados — simples, rápido e
            seguro.
          </p>
        </div>

        <div className="mt-2.5 flex flex-col items-center gap-2.5 lg:absolute lg:left-[124px] lg:top-[336px] lg:mt-0 lg:flex-row lg:items-stretch lg:gap-[78px]">
          {features.map((feature) => (
            <FeatureCard
              key={feature.label}
              highlighted={feature.highlighted}
            >
              {feature.label}
            </FeatureCard>
          ))}
        </div>

        <div className="absolute left-[43px] top-[557px] lg:left-[125px] lg:top-[495px]">
          <HeroButton arrowIcon={arrowIcon} />
        </div>
      </div>
    </section>
  )
}
