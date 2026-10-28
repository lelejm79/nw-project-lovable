import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, Brain, Check, ChevronDown, CircleHelp, Compass,
  Eye, Heart, LockKeyhole, Menu, Play, Sparkles, Target, X, Zap
} from "lucide-react";

const PRODUCT_NAME = "O Código da Manifestação";
const PRICE = "R$ 27,90";
const VSL_VIDEO_URL = import.meta.env.VITE_VSL_VIDEO_URL?.trim() ?? "";
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL?.trim() ?? "";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL?.trim() ?? "";

const faqs = [
  { q: "O que é O Código da Manifestação?", a: "É um ebook digital sobre Lei da Atração, desenvolvimento pessoal, mentalidade e práticas de reflexão." },
  { q: "Como vou receber o ebook?", a: "O material será disponibilizado pelo processo de entrega digital configurado no checkout." },
  { q: "Preciso ter experiência com Lei da Atração?", a: "Não. O material foi pensado para pessoas que desejam começar a explorar o tema." },
  { q: "O ebook garante resultados?", a: "Não. O conteúdo oferece ideias e práticas de desenvolvimento pessoal. Os resultados dependem de diversos fatores e não podem ser garantidos." },
  { q: "Posso acessar pelo celular?", a: "O ebook é um produto digital. Confira as informações de formato e compatibilidade disponibilizadas na plataforma de compra." },
  { q: "Como faço para comprar?", a: "Clique em um dos botões de compra e siga as instruções do checkout configurado pelo produtor." },
];

function CheckoutButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const handleClick = () => {
    if (CHECKOUT_URL) window.location.href = CHECKOUT_URL;
    else window.alert("Checkout ainda não configurado. Adicione a URL real em VITE_CHECKOUT_URL no arquivo .env.local.");
  };
  return <button className={`button button-gold ${className}`} onClick={handleClick}>{children}</button>;
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const youtubeId = VSL_VIDEO_URL.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/)?.[1];
  const vimeoId = VSL_VIDEO_URL.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];

  if (playing && youtubeId) return <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`} title="VSL — O Código da Manifestação" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>;
  if (playing && vimeoId) return <div className="video-frame"><iframe src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`} title="VSL — O Código da Manifestação" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>;
  if (playing && VSL_VIDEO_URL && /\.mp4(?:\?|$)/i.test(VSL_VIDEO_URL)) return <div className="video-frame"><video src={VSL_VIDEO_URL} controls autoPlay playsInline /></div>;

  return (
    <button className="video-placeholder" onClick={() => VSL_VIDEO_URL ? setPlaying(true) : window.alert("Configure VITE_VSL_VIDEO_URL no arquivo .env.local para adicionar sua VSL.")} aria-label="Reproduzir vídeo de apresentação">
      <div className="video-orbit orbit-one" /><div className="video-orbit orbit-two" />
      <div className="video-center"><Sparkles size={28} /><span>O CÓDIGO DA MANIFESTAÇÃO</span><strong>Seu próximo capítulo<br />começa aqui.</strong></div>
      <span className="play-button"><Play size={25} fill="currentColor" /></span>
      <span className="video-caption"><span className="live-dot" /> APRESENTAÇÃO DO MÉTODO</span>
    </button>
  );
}

function EbookMockup() {
  return <div className="book-scene" aria-label="Capa ilustrativa do ebook O Código da Manifestação">
    <div className="book-glow" />
    <div className="book">
      <div className="book-stars">✦　·　✧　·　✦</div>
      <div className="book-symbol"><span /><Sparkles size={36} /></div>
      <div className="book-kicker">UM GUIA DE DESENVOLVIMENTO PESSOAL</div>
      <div className="book-title">O CÓDIGO<br />DA <em>MANIFESTAÇÃO</em></div>
      <div className="book-rule" />
      <div className="book-subtitle">DESPERTE SUA CONSCIÊNCIA<br />TRANSFORME SUA MENTALIDADE</div>
      <div className="book-bottom">LEI DA ATRAÇÃO · SUBCONSCIENTE · AÇÃO</div>
    </div>
    <div className="book-reflection" />
  </div>;
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="site-shell">
    <div className="ambient ambient-top" /><div className="ambient ambient-side" />
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="O Código da Manifestação, início"><span className="brand-mark"><Sparkles size={17} /></span><span>O CÓDIGO <i>DA MANIFESTAÇÃO</i></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#metodo" onClick={() => setMenuOpen(false)}>O método</a>
        <a href="#conteudo" onClick={() => setMenuOpen(false)}>O que você vai explorar</a>
        <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        <a className="nav-cta" href="#oferta" onClick={() => setMenuOpen(false)}>Conhecer o ebook <ArrowRight size={14} /></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> UMA NOVA PERSPECTIVA COMEÇA DENTRO DE VOCÊ</div>
          <h1>Seus pensamentos podem estar influenciando os <span>caminhos que você constrói.</span></h1>
          <p className="hero-sub">Explore a Lei da Atração, o poder do subconsciente e práticas para desenvolver uma mentalidade mais consciente, clara e alinhada aos seus objetivos.</p>
        </div>
        <div className="vsl-shell">
          <div className="vsl-topline"><span><span className="live-dot" /> APRESENTAÇÃO ESPECIAL</span><span>ASSISTA À VSL</span></div>
          <VideoPlayer />
          <div className="under-video"><span><LockKeyhole size={14} /> Conheça o conteúdo do ebook</span><span>Uma jornada de autoconhecimento</span></div>
        </div>
        <div className="hero-buy"><CheckoutButton>QUERO ACESSAR O EBOOK <ArrowRight size={17} /></CheckoutButton><p><LockKeyhole size={13} /> Ebook digital por <strong>{PRICE}</strong></p></div>
        <a className="scroll-cue" href="#reflexao"><span>Continue descobrindo</span><ArrowDown size={15} /></a>
      </section>

      <section className="reflection section-wrap" id="reflexao">
        <div className="section-label">01 / TALVEZ VOCÊ SE IDENTIFIQUE</div>
        <div className="reflection-grid"><h2>Você sente que existe algo que precisa mudar, <em>mas continua repetindo os mesmos padrões?</em></h2>
          <div className="reflection-copy"><p>Você começa motivado, mas perde o foco. Deseja algo novo, mas às vezes se vê preso aos mesmos hábitos e dúvidas.</p><p>E, aos poucos, surge a pergunta: <strong>como posso desenvolver uma relação diferente com meus pensamentos e minhas escolhas?</strong></p></div>
        </div>
        <div className="problem-cards">
          <article className="glass-card"><span className="card-icon"><Brain /></span><h3>Pensamentos que limitam</h3><p>Observe padrões de pensamento que podem influenciar suas decisões e atitudes.</p><span className="card-number">01</span></article>
          <article className="glass-card"><span className="card-icon"><Compass /></span><h3>Falta de clareza</h3><p>Explore formas de definir objetivos e direcionar sua atenção para o que importa.</p><span className="card-number">02</span></article>
          <article className="glass-card"><span className="card-icon"><Zap /></span><h3>Autossabotagem</h3><p>Descubra como construir hábitos mais conscientes, um passo de cada vez.</p><span className="card-number">03</span></article>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-aura" />
        <div className="manifesto-content"><div className="section-label">02 / UMA NOVA PERSPECTIVA</div><Sparkles className="manifesto-sparkle" size={25} /><h2>E se a transformação começasse pela maneira como você <em>pensa, sente e age?</em></h2><p>A mudança não precisa começar com uma grande promessa. Ela pode começar com consciência, intenção e pequenas atitudes repetidas no dia a dia.</p><a className="text-link" href="#metodo">Conheça os pilares do método <ArrowRight size={16} /></a></div>
      </section>

      <section className="method section-wrap" id="metodo">
        <div className="section-label">03 / CONHEÇA O EBOOK</div>
        <div className="method-grid"><div className="method-copy"><h2>Apresentamos <em>O Código da Manifestação.</em></h2><p className="lead">Um guia digital para explorar novas formas de pensar, refletir e agir com mais intenção.</p><p>Uma abordagem acessível que reúne conceitos de desenvolvimento pessoal com práticas de visualização, reflexão e construção de hábitos. Não se trata de esperar que tudo aconteça sozinho — mas de olhar para dentro e dar passos concretos na direção dos seus objetivos.</p><CheckoutButton>QUERO CONHECER O EBOOK <ArrowRight size={17} /></CheckoutButton></div><EbookMockup /></div>
        <div className="pillars">
          <article><span className="pillar-icon"><Eye /></span><span className="pillar-num">PILAR 01</span><h3>Consciência</h3><p>Observe pensamentos e reconheça padrões que influenciam suas escolhas.</p></article>
          <article><span className="pillar-icon"><Target /></span><span className="pillar-num">PILAR 02</span><h3>Clareza</h3><p>Defina objetivos e direcione sua atenção para aquilo que importa.</p></article>
          <article><span className="pillar-icon"><Sparkles /></span><span className="pillar-num">PILAR 03</span><h3>Visualização</h3><p>Explore a visualização como ferramenta de reflexão e preparação mental.</p></article>
          <article><span className="pillar-icon"><Heart /></span><span className="pillar-num">PILAR 04</span><h3>Ação</h3><p>Transforme intenções em pequenas atitudes consistentes no cotidiano.</p></article>
        </div>
      </section>

      <section className="contents section-wrap" id="conteudo">
        <div className="contents-heading"><div><div className="section-label">04 / DENTRO DO EBOOK</div><h2>Um caminho para desenvolver uma <em>nova relação com seus pensamentos.</em></h2></div><p>Explore temas e práticas para levar suas reflexões para a rotina, no seu ritmo.</p></div>
        <div className="contents-list">
          {["Introdução à Lei da Atração","Crenças e padrões mentais","O subconsciente e os hábitos","Clareza para definir seus objetivos","Exercícios de visualização","Afirmações conscientes","Uma rotina de reflexão","Transformar intenções em atitudes","Consistência no desenvolvimento pessoal"].map((item, i) => <div className="contents-item" key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p><Check size={17} /></div>)}
        </div>
        <p className="content-note">Confira a descrição e o arquivo final do ebook para garantir que os tópicos desta página correspondam exatamente ao material entregue.</p>
      </section>

      <section className="audience section-wrap">
        <div className="section-label">05 / É PARA VOCÊ?</div><h2>Este ebook pode fazer sentido se você...</h2>
        <div className="audience-grid"><div className="audience-list"><p><Check /> Deseja desenvolver uma mentalidade mais positiva.</p><p><Check /> Quer compreender melhor seus padrões de pensamento.</p><p><Check /> Busca mais clareza sobre seus objetivos.</p><p><Check /> Gosta de práticas de autoconhecimento.</p><p><Check /> Quer criar hábitos mais alinhados à vida que deseja construir.</p></div><div className="audience-note"><CircleHelp size={25} /><h3>Uma proposta realista</h3><p>O ebook não promete riqueza, cura ou resultados automáticos. É um material de desenvolvimento pessoal para apoiar reflexão e ação consciente.</p></div></div>
      </section>

      <section className="offer-section" id="oferta"><div className="offer-aura" /><div className="offer-card"><div className="section-label">SUA PRÓXIMA JORNADA COMEÇA AQUI</div><EbookMockup /><h2>Conheça <em>O Código da Manifestação</em></h2><p className="offer-description">Um guia digital para explorar a Lei da Atração, a mentalidade e práticas de autoconhecimento.</p><div className="offer-includes"><span><Check /> Ebook digital</span><span><Check /> Conteúdo de desenvolvimento pessoal</span><span><Check /> Consulte no seu ritmo</span></div><div className="offer-price-label">ACESSO AO EBOOK</div><div className="offer-price">{PRICE}</div><p className="offer-format">Produto digital · Não é um produto físico</p><CheckoutButton className="offer-button">QUERO ACESSAR O EBOOK <ArrowRight size={18} /></CheckoutButton><p className="secure-note"><LockKeyhole size={13} /> O pagamento será processado no checkout configurado.</p></div></section>

      <section className="faq section-wrap" id="duvidas"><div className="faq-heading"><div className="section-label">06 / PERGUNTAS FREQUENTES</div><h2>Ficou com alguma <em>dúvida?</em></h2><p>As informações para você comprar com clareza.</p></div><div className="faq-list">{faqs.map((faq, i) => <div className={openFaq === i ? "faq-item faq-open" : "faq-item"} key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown size={19} /></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></section>

      <section className="final-cta"><div className="final-ornament"><Sparkles size={28} /></div><div className="section-label">O PRIMEIRO PASSO É A CONSCIÊNCIA</div><h2>Uma nova maneira de olhar para seus pensamentos pode ser o começo de <em>uma nova jornada.</em></h2><p>Explore O Código da Manifestação e descubra práticas que podem ajudar você a desenvolver mais consciência, clareza e intenção no dia a dia.</p><div className="final-price">{PRICE}</div><CheckoutButton>QUERO COMEÇAR MINHA JORNADA <ArrowRight size={17} /></CheckoutButton></section>
    </main>

    <footer className="footer"><a className="brand" href="#inicio"><span className="brand-mark"><Sparkles size={16} /></span><span>O CÓDIGO <i>DA MANIFESTAÇÃO</i></span></a><p>Um material de desenvolvimento pessoal.</p><div className="footer-links"><a href="/privacidade.html">Privacidade</a><a href="/termos.html">Termos de uso</a>{CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`}>Contato</a> : <span className="footer-contact-pending" title="Configure VITE_CONTACT_EMAIL antes de publicar">Contato em configuração</span>}</div><p className="disclaimer">O conteúdo é educacional e não constitui aconselhamento médico, psicológico ou financeiro. A Lei da Atração é apresentada como uma abordagem de desenvolvimento pessoal, não como garantia científica de resultados.</p><p className="copyright">© {new Date().getFullYear()} O Código da Manifestação. Todos os direitos reservados.</p></footer>

    {showSticky && <div className="sticky-cta"><div><strong>{PRODUCT_NAME}</strong><span>{PRICE}</span></div><CheckoutButton>QUERO ACESSAR <ArrowRight size={15} /></CheckoutButton></div>}
  </div>;
}