const navLinks = ['Benefícios', 'Segurança', 'Cripto', 'Ajuda']

function AccountButton({ variant }) {
  const isMobile = variant === 'mobile'

  return (
    <button
      type="button"
      className={
        isMobile
          ? 'inline-flex h-[41px] w-[143px] shrink-0 items-center justify-center rounded-[25px] bg-brand-teal font-jakarta text-sm font-medium leading-[18px] text-white transition-colors hover:bg-[#009f88]'
          : 'inline-flex h-[49px] w-[209px] shrink-0 items-center justify-center rounded-[25px] bg-brand-teal font-jakarta text-xl font-medium leading-[25px] text-white transition-colors hover:bg-[#009f88]'
      }
    >
      Abrir minha conta
    </button>
  )
}

export function Header({ logoDesktop, logoMobile, menuIcon }) {
  return (
    <header className="bg-brand-dark">
      <div className="mx-auto flex h-[67px] max-w-[1440px] items-center justify-center gap-[56px] px-4 py-[5px] lg:hidden">
        <a href="/" className="shrink-0" aria-label="Página inicial">
          <img
            src={logoMobile}
            alt="Global Dex"
            className="h-12 w-[61px] object-contain"
            width={61}
            height={48}
          />
        </a>

        <AccountButton variant="mobile" />

        <button
          type="button"
          className="inline-flex h-[33px] w-[25px] shrink-0 items-center justify-center"
          aria-label="Abrir menu"
        >
          <img
            src={menuIcon}
            alt=""
            className="h-[33px] w-[25px] object-contain"
            width={25}
            height={33}
          />
        </button>
      </div>

      <div className="mx-auto hidden max-w-[1440px] px-[124px] py-[10px] lg:block">
        <div className="flex w-full items-center gap-[115px]">
          <a href="/" className="shrink-0" aria-label="Página inicial">
            <img
              src={logoDesktop}
              alt="Global Dex"
              className="h-[81px] w-40 object-contain"
              width={160}
              height={81}
            />
          </a>

          <nav
            className="flex flex-1 items-center gap-[63px]"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-2.5 py-2.5 font-jakarta text-xl font-medium leading-none text-white transition-colors hover:bg-white/10"
              >
                {link}
              </a>
            ))}
          </nav>

          <AccountButton variant="desktop" />
        </div>
      </div>
    </header>
  )
}
