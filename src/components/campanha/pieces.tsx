import { QRCodeSVG } from "qrcode.react";
import logo from "@/assets/grupowin-logo.png.asset.json";
import heroEstrada from "@/assets/hero-estrada.jpg";
import vistoriaImg from "@/assets/vistoria.jpg";
import consultaImg from "@/assets/consulta-cpf.jpg";

export const URL_CAMPANHA = "reativacao.grupowin.site";
export const URL_FULL = "https://reativacao.grupowin.site";
export const AVISO =
  "Condição sujeita à elegibilidade, vistoria aprovada, confirmação administrativa e regulamento da campanha. A proteção não é retroativa e somente terá início após a confirmação formal da reintegração.";

export const imagens = { heroEstrada, vistoriaImg, consultaImg };

export function Logo({
  className = "h-8",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const img = (
    <img
      src={logo.url}
      alt="Grupo WIN — Associação de Benefícios"
      className={`${className} w-auto object-contain`}
      loading="lazy"
    />
  );
  if (!onDark) return img;
  return (
    <span className="inline-flex items-center rounded-lg bg-white px-[0.5em] py-[0.35em] shadow-soft">
      {img}
    </span>
  );
}

export function Selo({ children = "PROGRAMA ESPECIAL DE REATIVAÇÃO" }: { children?: string }) {
  return (
    <span className="inline-flex items-center gap-[0.5em] rounded-full border border-win-orange/50 bg-win-orange/12 px-[0.9em] py-[0.35em] text-[0.62em] font-bold uppercase tracking-[0.18em] text-win-orange">
      <span className="h-[0.4em] w-[0.4em] rounded-full bg-win-orange" />
      {children}
    </span>
  );
}

export function Check({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2 text-[0.95em] leading-snug">
      <span className="mt-[0.15em] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-win-orange text-[0.6rem] font-bold text-win-graphite-deep">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Cta({ label = "CONSULTE SEU CPF" }: { label?: string }) {
  return (
    <a
      href={URL_FULL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full px-[1.3em] py-[0.65em] text-[0.8em] font-extrabold uppercase tracking-[0.08em] text-win-graphite-deep shadow-glow transition-transform hover:scale-[1.03]"
      style={{ backgroundImage: "var(--gradient-win)" }}
    >
      {label}
    </a>
  );
}

export function Qr({ size = 76, fluid = false }: { size?: number; fluid?: boolean }) {
  return (
    <div
      className="shrink-0 rounded-[0.6em] bg-white p-[0.35em] shadow-soft"
      style={fluid ? { width: "5.2em" } : undefined}
    >
      <QRCodeSVG
        value={URL_FULL}
        size={size}
        level="M"
        bgColor="#ffffff"
        fgColor="#2b2b2a"
        style={fluid ? { width: "100%", height: "auto" } : undefined}
      />
    </div>
  );
}

/** Moldura de peça com proporção real e legenda técnica. */
export function Peca({
  titulo,
  medida,
  ratio,
  className = "",
  children,
}: {
  titulo: string;
  medida: string;
  ratio: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className="@container relative w-full overflow-hidden rounded-2xl border border-border shadow-soft"
        style={{ aspectRatio: ratio }}
      >
        {children}
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 text-xs">
        <span className="font-semibold text-foreground">{titulo}</span>
        <span className="font-mono text-muted-foreground">{medida}</span>
      </figcaption>
    </figure>
  );
}

/** Fundo padrão da campanha: grafite + estrada iluminada. */
export function Fundo({
  img = heroEstrada,
  position = "center",
  overlay = "var(--gradient-overlay)",
}: {
  img?: string;
  position?: string;
  overlay?: string;
}) {
  return (
    <>
      <img
        src={img}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: overlay }} />
      <div
        className="absolute inset-x-0 bottom-0 h-1.5"
        style={{ backgroundImage: "var(--gradient-win)" }}
      />
    </>
  );
}