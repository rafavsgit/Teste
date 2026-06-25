export function HeroButton({ arrowIcon }) {
  return (
    <button
      type="button"
      className="inline-flex h-[74px] w-[288px] shrink-0 items-center justify-center gap-3 rounded-[122px] bg-brand-accent font-unbounded text-lg font-normal text-black transition-colors hover:bg-[#009d86] active:bg-[#007664] lg:w-[355px] lg:text-2xl"
    >
      <span>Abrir minha conta</span>
      <img
        src={arrowIcon}
        alt=""
        aria-hidden="true"
        className="h-[18px] w-[35px] shrink-0"
        width={35}
        height={18}
      />
    </button>
  )
}
