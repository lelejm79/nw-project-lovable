# O Código da Manifestação

Landing page VSL responsiva para o ebook **O Código da Manifestação**, com copy em português brasileiro e preço de referência de R$ 27,90.

## Rodar localmente

```bash
npm install
npm run dev
```

## Configuração

Crie um arquivo `.env.local` a partir de `.env.example` e configure:

- `VITE_VSL_VIDEO_URL`: URL de um vídeo MP4 ou link de incorporação do YouTube/Vimeo.
- `VITE_CHECKOUT_URL`: URL real de checkout (Kiwify, Hotmart, Eduzz ou outra plataforma).

Sem uma URL real de checkout, os botões exibem uma mensagem de configuração pendente e não simulam uma compra. Não coloque chaves secretas no frontend.

## Build

```bash
npm run build
```

O conteúdo é educacional e de desenvolvimento pessoal. Não promete resultados financeiros, médicos ou pessoais garantidos.