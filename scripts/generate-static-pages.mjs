import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const outputDirectory = resolve("dist/public");
const baseHtml = await readFile(resolve(outputDirectory, "index.html"), "utf8");

const pages = [
  {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade | R3 Bike Shop",
    description: "Saiba como a R3 Bike Shop coleta, utiliza e protege dados pessoais de clientes e visitantes.",
    heading: "Política de Privacidade",
    body: "Informações sobre coleta, uso, proteção e direitos relacionados aos dados pessoais de clientes e visitantes."
  },
  {
    path: "/cookies",
    title: "Política de Cookies | R3 Bike Shop",
    description: "Entenda como o site da R3 Bike Shop utiliza cookies essenciais, funcionais e de desempenho.",
    heading: "Política de Cookies",
    body: "Informações sobre cookies essenciais, funcionais e de desempenho usados neste site."
  },
  {
    path: "/aviso-legal",
    title: "Aviso Legal | R3 Bike Shop",
    description: "Informações legais, propriedade intelectual e dados empresariais da R3 Bike Shop.",
    heading: "Aviso Legal",
    body: "Informações legais, propriedade intelectual e dados empresariais da R3 Bike Shop."
  },
  {
    path: "/termos-de-servico",
    title: "Termos de Serviço | R3 Bike Shop",
    description: "Consulte os termos de orçamento, garantia, entrega, busca e leva e pagamento da R3 Bike Shop.",
    heading: "Termos de Serviço",
    body: "Condições de orçamento, garantia, entrega, busca e leva e pagamento dos serviços da R3 Bike Shop."
  }
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderPage(page, noindex = false) {
  const canonical = `https://r3bikeshop.com${page.path}`;
  const fallback = `<!-- SEO_FALLBACK_START -->
    <main style="max-width:800px;margin:40px auto;padding:0 24px;font-family:Arial,sans-serif;color:#171717">
      <p><a href="/">R3 Bike Shop</a></p>
      <h1>${escapeHtml(page.heading)}</h1>
      <p>${escapeHtml(page.body)}</p>
      <p>Rua Conselheiro Moreira de Barros, 3809 — Lauzane Paulista, São Paulo — SP.</p>
    </main>
    <!-- SEO_FALLBACK_END -->`;

  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<!-- SEO_FALLBACK_START -->[\s\S]*?<!-- SEO_FALLBACK_END -->/, fallback);
}

for (const page of pages) {
  const destination = resolve(outputDirectory, page.path.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, renderPage(page));
}

const notFound = {
  path: "/404",
  title: "Página não encontrada | R3 Bike Shop",
  description: "A página solicitada não foi encontrada.",
  heading: "Página não encontrada",
  body: "O endereço informado não existe ou foi removido. Volte para a página inicial da R3 Bike Shop."
};
await writeFile(resolve(outputDirectory, "404.html"), renderPage(notFound, true));
