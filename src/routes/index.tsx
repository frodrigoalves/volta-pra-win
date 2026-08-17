import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AVISO,
  Check,
  Cta,
  Fundo,
  Logo,
  Peca,
  Qr,
  Selo,
  URL_CAMPANHA,
  URL_FULL,
  imagens,
} from "@/components/campanha/pieces";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volta pra WIN | Campanha de Reativação — Grupo WIN" },
      {
        name: "description",
        content:
          "Campanha Volta pra WIN: consulte seu CPF, veja todos os veículos vinculados e agende uma nova vistoria gratuita para o Programa de Reativação da Grupo WIN.",
      },
      { property: "og:title", content: "Volta pra WIN — Seu caminho de volta começa aqui" },
      {
        property: "og:description",
        content:
          "Consulta pelo CPF, vistoria gratuita e análise individual de cada placa no Programa Especial de Reativação da Grupo WIN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const destaques = [
  "Vistoria gratuita",
  "Consulta pelo CPF",
  "Todos os seus veículos em um só lugar",
  "Reativação simples e acompanhada",
];

const headlines = [
  "VOLTE PARA A WIN COM UMA CONDIÇÃO ESPECIAL",
  "UMA NOVA VISTORIA. UM NOVO COMEÇO.",
  "SUA PROTEÇÃO PODE ESTAR A UM PASSO DE VOLTAR",
  "TEM MAIS DE UMA PLACA? CONSULTE TODAS PELO SEU CPF",
  "VISTORIA GRATUITA PARA COMEÇAR SUA REATIVAÇÃO",
  "REGULARIZE. REATIVE. VOLTE PARA A WIN.",
];

const stories = [
  {
    n: "01",
    titulo: "Ficou um tempo longe da WIN?",
    texto: "Seu caminho de volta pode começar agora.",
    img: imagens.heroEstrada,
  },
  {
    n: "02",
    titulo: "Informe seu CPF",
    texto: "Consulte todos os veículos vinculados ao seu cadastro.",
    img: imagens.consultaImg,
  },
  {
    n: "03",
    titulo: "Nova vistoria gratuita",
    texto: "Consulte as condições para os boletos atrasados elegíveis.",
    img: imagens.vistoriaImg,
  },
  {
    n: "04",
    titulo: "Pronto para começar?",
    texto: "CONSULTE SEU CPF",
    img: imagens.heroEstrada,
    qr: true,
  },
];

const legenda = `A Grupo WIN abriu uma condição especial para associados que desejam retornar.

Por meio do Programa Volta pra WIN, você poderá consultar seu CPF, visualizar os veículos vinculados ao seu cadastro e solicitar uma nova vistoria gratuita.

Depois da vistoria, os boletos atrasados elegíveis poderão passar por análise de abono e cada veículo poderá seguir para o processo de reintegração.

Acesse: ${URL_CAMPANHA}
Consulte seu CPF e dê o primeiro passo para voltar à WIN.

Condição sujeita à elegibilidade, vistoria aprovada, confirmação administrativa e regulamento. Sem proteção retroativa.`;

const whatsapp = `Olá, [NOME].

A Grupo WIN abriu uma condição especial para associados que desejam retornar.

Você poderá consultar os veículos vinculados ao seu CPF, solicitar uma nova vistoria gratuita e verificar a elegibilidade dos boletos atrasados para o Programa de Reativação.

Acesse: ${URL_CAMPANHA}

A consulta é rápida e cada veículo é analisado individualmente.

Condição sujeita à vistoria, elegibilidade, confirmação administrativa e regulamento. Sem proteção retroativa.`;

function Copiavel({ titulo, texto }: { titulo: string; texto: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold">{titulo}</h3>
        <button
          onClick={() => {
            void navigator.clipboard.writeText(texto);
            setOk(true);
            setTimeout(() => setOk(false), 1800);
          }}
          className="rounded-full border border-win-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-win-orange transition-colors hover:bg-win-orange hover:text-win-graphite-deep"
        >
          {ok ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground">
        {texto}
      </pre>
    </div>
  );
}

function Secao({
  id,
  kicker,
  titulo,
  descricao,
  children,
}: {
  id: string;
  kicker: string;
  titulo: string;
  descricao?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-win-orange">{kicker}</p>
        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{titulo}</h2>
        {descricao && <p className="mt-3 text-muted-foreground">{descricao}</p>}
      </header>
      {children}
    </section>
  );
}

/** Arte principal, adaptável a qualquer proporção. */
function KeyArt({
  compact = false,
  vertical = false,
  scale = 4.2,
}: {
  compact?: boolean;
  vertical?: boolean;
  scale?: number;
}) {
  return (
    <div
      className="surface-graphite absolute inset-0"
      style={{ fontSize: `clamp(7px, ${scale}cqi, 20px)` }}
    >
      <Fundo
        position={vertical ? "72% 60%" : "70% center"}
        overlay={
          vertical
            ? "linear-gradient(180deg, color-mix(in oklab, var(--win-graphite-deep) 94%, transparent) 0%, color-mix(in oklab, var(--win-graphite-deep) 72%, transparent) 55%, color-mix(in oklab, var(--win-graphite-deep) 88%, transparent) 100%)"
            : "var(--gradient-overlay)"
        }
      />
      <div
        className={`relative flex h-full flex-col justify-between p-[5%] ${
          compact ? "max-w-[60%] gap-[0.4em]" : "gap-[0.8em]"
        }`}
      >
        <div className="flex flex-col items-start gap-[0.6em]">
          <Logo className="h-[1.5em]" onDark />
          <Selo />
        </div>
        <div className="text-secondary-foreground">
          <h3 className="text-[2em] font-extrabold uppercase leading-[0.95]">
            Seu caminho de volta{" "}
            <span className="text-gradient-win">começa aqui</span>
          </h3>
          {!compact && (
            <p className="mt-[0.7em] text-[0.85em] leading-snug text-secondary-foreground/80">
              Faça uma nova vistoria gratuita e consulte a possibilidade de abono dos boletos
              atrasados elegíveis.
            </p>
          )}
          <ul className="mt-[0.9em] grid grid-cols-2 gap-[0.4em] text-[0.8em] text-secondary-foreground/90">
            {destaques.slice(0, compact ? 2 : 4).map((d) => (
              <Check key={d}>{d}</Check>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-between gap-[1em]">
          <div className="flex flex-col items-start gap-[0.4em]">
            <Cta />
            <span className="text-[0.62em] font-semibold tracking-wide text-secondary-foreground/70">
              {URL_CAMPANHA}
            </span>
          </div>
          {!compact && <Qr size={128} fluid />}
        </div>
      </div>
      {compact && (
        <div className="absolute bottom-[8%] right-[4%]">
          <Qr size={128} fluid />
        </div>
      )}
    </div>
  );
}

function CardMensagem({
  headline,
  sub,
  destaque,
  cta,
  aviso,
  img,
  position,
}: {
  headline: string;
  sub: string;
  destaque?: string;
  cta: string;
  aviso?: string;
  img: string;
  position?: string;
}) {
  return (
    <div
      className="surface-graphite absolute inset-0"
      style={{ fontSize: "clamp(7px, 4.2cqi, 20px)" }}
    >
      <Fundo
        img={img}
        position={position ?? "center"}
        overlay="linear-gradient(200deg, color-mix(in oklab, var(--win-graphite-deep) 55%, transparent) 0%, color-mix(in oklab, var(--win-graphite-deep) 93%, transparent) 62%)"
      />
      <div className="relative flex h-full flex-col justify-end gap-[0.6em] p-[7%]">
        <Logo className="h-[1.4em]" onDark />
        <div className="flex-1" />
        <h3 className="text-[1.5em] font-extrabold uppercase leading-[1] text-secondary-foreground">
          {headline}
        </h3>
        <p className="text-[0.82em] leading-snug text-secondary-foreground/80">{sub}</p>
        {destaque && (
          <p className="text-[0.72em] font-semibold text-win-orange">{destaque}</p>
        )}
        <div className="mt-[0.2em] flex items-end justify-between gap-[0.8em]">
          <div className="flex flex-col items-start gap-[0.4em]">
            <Cta label={cta} />
            <span className="text-[0.6em] text-secondary-foreground/70">{URL_CAMPANHA}</span>
          </div>
          <Qr size={128} fluid />
        </div>
        {aviso && (
          <p className="text-[0.55em] leading-tight text-secondary-foreground/55">{aviso}</p>
        )}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={imagens.heroEstrada}
          alt="Estrada iluminada ao entardecer com veículo bem conservado"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "70% center" }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-overlay)" }} />
        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-between px-5 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-xl bg-white/95 px-4 py-2 shadow-soft">
              <Logo className="h-8" />
            </span>
            <Selo />
          </div>

          <div className="max-w-3xl text-secondary-foreground">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-win-orange">
              Volta pra WIN
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] sm:text-6xl md:text-7xl">
              Seu caminho de volta{" "}
              <span className="text-gradient-win">começa aqui</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-secondary-foreground/85 md:text-lg">
              Faça uma nova vistoria gratuita e consulte a possibilidade de abono dos boletos
              atrasados elegíveis.
            </p>
            <ul className="mt-6 grid max-w-xl gap-2 text-secondary-foreground sm:grid-cols-2">
              {destaques.map((d) => (
                <Check key={d}>{d}</Check>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Cta />
              <a
                href={URL_FULL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-secondary-foreground/80 underline underline-offset-4"
              >
                {URL_CAMPANHA}
              </a>
              <Qr size={72} />
            </div>
            <p className="mt-6 text-sm font-medium text-secondary-foreground/70">
              Um CPF. Todos os seus veículos. Cada placa analisada individualmente.
            </p>
          </div>

          <p className="max-w-3xl text-[0.7rem] leading-snug text-secondary-foreground/60">
            {AVISO}
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <Secao
        id="programa"
        kicker="Programa Especial de Reativação"
        titulo="Um processo simples, respeitoso e acompanhado"
        descricao="Da consulta pelo CPF ao acompanhamento digital do pedido de reintegração — cada etapa é individual para cada placa."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Consulte pelo CPF",
              d: "Identificamos todos os veículos vinculados ao seu cadastro na WIN.",
              img: imagens.consultaImg,
            },
            {
              n: "02",
              t: "Nova vistoria gratuita",
              d: "Escolha as placas e agende a vistoria veicular sem custo para iniciar a análise.",
              img: imagens.vistoriaImg,
            },
            {
              n: "03",
              t: "Análise e reintegração",
              d: "Boletos atrasados elegíveis passam por análise de abono e o retorno é acompanhado digitalmente.",
              img: imagens.heroEstrada,
            },
          ].map((e) => (
            <article
              key={e.n}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={e.img}
                alt=""
                aria-hidden
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <span className="font-mono text-xs font-bold text-win-orange">{e.n}</span>
                <h3 className="mt-2 text-lg font-bold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-xl border border-border bg-muted p-4 text-xs text-muted-foreground">
          {AVISO}
        </p>
      </Secao>

      {/* PEÇAS */}
      <Secao
        id="pecas"
        kicker="Kit de peças"
        titulo="Uma identidade, todos os formatos"
        descricao="Mesma arte-chave adaptada às proporções oficiais de cada canal, com margens de segurança, espaço para CTA e área reservada para QR Code real."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Peca titulo="Instagram Feed vertical" medida="1080 × 1350" ratio="1080/1350">
            <KeyArt vertical scale={4.2} />
          </Peca>
          <Peca titulo="Instagram / Facebook quadrado" medida="1080 × 1080" ratio="1/1">
            <KeyArt vertical scale={3.6} />
          </Peca>
          <Peca titulo="Stories / Status WhatsApp" medida="1080 × 1920" ratio="1080/1920">
            <KeyArt vertical scale={4.4} />
          </Peca>
          <Peca titulo="Card para envio no WhatsApp" medida="1080 × 1080" ratio="1/1">
            <CardMensagem
              headline="Volte para a WIN com uma condição especial"
              sub="Consulte seu CPF, veja seus veículos e agende a nova vistoria gratuita."
              cta="Consultar agora"
              img={imagens.consultaImg}
            />
          </Peca>
          <Peca
            titulo="Banner do portal"
            medida="1920 × 640"
            ratio="1920/640"
            className="md:col-span-2"
          >
            <KeyArt compact scale={1.9} />
          </Peca>
          <Peca titulo="Banner mobile" medida="1080 × 1350" ratio="1080/1350">
            <KeyArt vertical scale={4.2} />
          </Peca>
          <Peca titulo="Capa para Facebook" medida="1640 × 624" ratio="1640/624">
            <KeyArt compact scale={2.2} />
          </Peca>
          <Peca titulo="Flyer A4 digital e impressão" medida="210 × 297 mm" ratio="210/297">
            <KeyArt vertical scale={4} />
          </Peca>
          <Peca titulo="Faixa de assinatura de e-mail" medida="1200 × 300" ratio="1200/300">
            <div
              className="surface-graphite absolute inset-0 flex items-center justify-between gap-[1em] px-[2em]"
              style={{ fontSize: "clamp(7px, 2.4cqi, 18px)" }}
            >
              <div className="flex items-center gap-[1em]">
                <Logo className="h-[1.6em]" onDark />
                <div>
                  <p className="text-[0.6em] font-bold uppercase tracking-[0.2em] text-win-orange">
                    Programa de Reativação
                  </p>
                  <p className="text-[1.15em] font-extrabold uppercase leading-tight text-secondary-foreground">
                    Seu caminho de volta começa aqui
                  </p>
                  <p className="text-[0.65em] text-secondary-foreground/70">{URL_CAMPANHA}</p>
                </div>
              </div>
              <Qr size={128} fluid />
            </div>
          </Peca>
        </div>
      </Secao>

      {/* CARDS TEMÁTICOS */}
      <Secao
        id="cards"
        kicker="Cards de campanha"
        titulo="Mensagens específicas, mesma unidade visual"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Peca titulo="Últimos dias" medida="1080 × 1080" ratio="1/1">
            <CardMensagem
              headline="Últimos dias para consultar sua elegibilidade"
              sub="O Programa de Reativação segue aberto por tempo limitado. Consulte seu CPF."
              cta="Consulte seu CPF"
              img={imagens.heroEstrada}
              position="65% center"
            />
          </Peca>
          <Peca titulo="Vistoria gratuita" medida="1080 × 1080" ratio="1/1">
            <CardMensagem
              headline="Sua nova vistoria é gratuita"
              sub="Consulte sua elegibilidade, escolha o veículo e agende sua vistoria para iniciar o processo de retorno à WIN."
              cta="Quero começar"
              aviso="A vistoria gratuita não representa aprovação automática ou início imediato da proteção."
              img={imagens.vistoriaImg}
            />
          </Peca>
          <Peca titulo="Mais de uma placa" medida="1080 × 1080" ratio="1/1">
            <CardMensagem
              headline="Tem mais de um veículo no seu CPF?"
              sub="Consulte todas as placas vinculadas e escolha quais deseja incluir no Programa de Reativação."
              destaque="Cada veículo possui vistoria e análise independentes."
              cta="Consultar meus veículos"
              img={imagens.consultaImg}
            />
          </Peca>
          <Peca titulo="Reativação concluída" medida="1080 × 1080" ratio="1/1">
            <CardMensagem
              headline="Reativação concluída"
              sub="Seu retorno à WIN foi confirmado administrativamente. Bem-vindo de volta."
              destaque="Comunicação individual — enviar somente após confirmação formal."
              cta="Acompanhar meu cadastro"
              img={imagens.heroEstrada}
              position="55% center"
            />
          </Peca>
        </div>
      </Secao>

      {/* STORIES */}
      <Secao
        id="stories"
        kicker="Sequência de Stories"
        titulo="Quatro telas, um único caminho"
        descricao="Área segura preservada no topo e na base; o QR Code do Story 4 é funcional e aponta para a URL oficial."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <Peca key={s.n} titulo={`Story ${s.n}`} medida="1080 × 1920" ratio="1080/1920">
              <div
                className="surface-graphite absolute inset-0"
                style={{ fontSize: "clamp(7px, 4.6cqi, 20px)" }}
              >
                <Fundo
                  img={s.img}
                  position="70% 55%"
                  overlay="linear-gradient(180deg, color-mix(in oklab, var(--win-graphite-deep) 88%, transparent) 0%, color-mix(in oklab, var(--win-graphite-deep) 55%, transparent) 45%, color-mix(in oklab, var(--win-graphite-deep) 94%, transparent) 100%)"
                />
                <div className="relative flex h-full flex-col justify-between p-[9%] pb-[16%] pt-[16%]">
                  <div className="flex flex-col items-start gap-[0.6em]">
                    <Logo className="h-[1.4em]" onDark />
                    <span className="font-mono text-[0.7em] font-bold text-win-orange">
                      {s.n}/04
                    </span>
                  </div>
                  <div className="text-secondary-foreground">
                    <h3 className="text-[1.5em] font-extrabold uppercase leading-tight">
                      {s.titulo}
                    </h3>
                    <p className="mt-[0.6em] text-[0.85em] leading-snug text-secondary-foreground/80">
                      {s.texto}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-[0.8em]">
                    <span className="text-[0.62em] font-semibold text-secondary-foreground/70">
                      {URL_CAMPANHA}
                    </span>
                    {s.qr && <Qr size={128} fluid />}
                  </div>
                </div>
              </div>
            </Peca>
          ))}
        </div>
      </Secao>

      {/* HEADLINES */}
      <Secao
        id="headlines"
        kicker="Variações de headline"
        titulo="Mesma promessa, sem promessa automática"
        descricao="Nenhuma variação afirma que o associado já está protegido."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {headlines.map((h, i) => (
            <div
              key={h}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="font-mono text-xs text-win-orange">0{i + 1}</span>
              <p className="mt-3 text-lg font-extrabold uppercase leading-tight">{h}</p>
            </div>
          ))}
        </div>
      </Secao>

      {/* TEXTOS */}
      <Secao
        id="textos"
        kicker="Textos prontos"
        titulo="Legenda e abordagem individual"
        descricao="Linguagem acolhedora, sem cobrança e sem uso da palavra restrita — sempre proteção veicular ou patrimonial."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Copiavel titulo="Legenda para redes sociais" texto={legenda} />
          <Copiavel titulo="Mensagem para WhatsApp" texto={whatsapp} />
        </div>
      </Secao>

      {/* CTA FINAL */}
      <section className="surface-graphite relative overflow-hidden">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center">
          <Selo />
          <h2 className="text-3xl font-black uppercase leading-tight text-secondary-foreground md:text-5xl">
            Regularize. Reative. <span className="text-gradient-win">Volte para a WIN.</span>
          </h2>
          <p className="max-w-xl text-secondary-foreground/80">
            Um CPF. Todos os seus veículos. Cada placa analisada individualmente.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Cta />
            <Qr size={88} />
          </div>
          <p className="max-w-2xl text-xs leading-relaxed text-secondary-foreground/55">{AVISO}</p>
          <div className="mt-4 rounded-xl bg-white/95 px-4 py-2">
            <Logo className="h-7" />
          </div>
        </div>
      </section>
    </main>
  );
}
