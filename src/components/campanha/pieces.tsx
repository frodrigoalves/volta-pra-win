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

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Grupo WIN — Associação de Benefícios"
      className={`${className} w-auto object-contain`}
      loading="lazy"
    />
  );
}

export function Selo({ children = "PROGRAMA ESPECIAL DE REATIVAÇÃO" }: { children?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-win-orange/50 bg-win-orange/12 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-win-orange">
      <span className="h-1.5 w-1.5 rounded-full bg-win-orange" />
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
      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[0.8em] font-extrabold uppercase tracking-[0.1em] text-win-graphite-deep shadow-glow transition-transform hover:scale-[1.03]"
      style={{ backgroundImage: "var(--gradient-win)" }}
    >
      {label}
    </a>
  );
}

export function Qr({ size = 76 }: { size?: number }) {
  return (
    <div className="rounded-xl bg-white p-2 shadow-soft">
      <QRCodeSVG value={URL_FULL} size={size} level="M" bgColor="#ffffff" fgColor="#2b2b2a" />
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
        className="relative w-full overflow-hidden rounded-2xl border border-border shadow-soft"
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