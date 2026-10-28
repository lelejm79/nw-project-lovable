# O Código da Manifestação

Landing page VSL responsiva para o ebook **O Código da Manifestação**, com copy em português brasileiro e preço de referência de R$ 27,90.

## Rodar localmente

Requer Node.js instalado.

```bash
npm install
npm run dev
```

## Configurar checkout da Kiwify

1. Crie/configure o produto na Kiwify e copie o **link público de checkout** do produto.
2. Crie um arquivo `.env.local` na raiz do projeto (use `.env.example` como modelo).
3. Cole o link real na variável `VITE_CHECKOUT_URL`, por exemplo: `VITE_CHECKOUT_URL=https://pay.kiwify.com.br/SEU-LINK-REAL`.
4. Reinicie o servidor de desenvolvimento depois de alterar o `.env.local`.
5. Teste todos os botões e confirme que abrem o checkout correto antes de anunciar.

Não use o exemplo acima como URL real: substitua pelo link copiado da sua conta Kiwify. Sem um link válido, os botões avisam que o checkout ainda não foi configurado.

## Vídeo de vendas (opcional)

Defina `VITE_VSL_VIDEO_URL` com a URL de um vídeo MP4 ou link de vídeo do YouTube/Vimeo. Se não houver VSL pronta, a página mantém o espaço de apresentação ilustrativo.

## Contato no rodapé (opcional)

Defina `VITE_CONTACT_EMAIL` com um e-mail de atendimento real. Se estiver vazio, a página mostra “Contato em configuração” em vez de apontar para um endereço fictício.

## Build para publicação

```bash
npm run build
npm run preview
```

A pasta gerada para publicação é `dist`. Em uma hospedagem como Vercel ou Cloudflare Pages, use o comando de build `npm run build` e a pasta de saída `dist`. Na Vercel, importe este repositório e mantenha o framework como Vite (ou deixe a detecção automática), com Build Command `npm run build` e Output Directory `dist`. Em **Settings → Environment Variables**, configure `VITE_CHECKOUT_URL` com o checkout real da Kiwify. Opcionalmente, configure `VITE_VSL_VIDEO_URL` e `VITE_CONTACT_EMAIL`. Depois de adicionar ou alterar variáveis, faça um novo deploy. Variáveis `VITE_` são incluídas no código público, portanto não coloque segredos nelas.

O conteúdo é educacional e de desenvolvimento pessoal. Não promete resultados financeiros, médicos ou pessoais garantidos.