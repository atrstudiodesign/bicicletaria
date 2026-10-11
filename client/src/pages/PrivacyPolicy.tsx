import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      <Seo
        title="Política de Privacidade | R3 Bike Shop"
        description="Saiba como a R3 Bike Shop coleta, utiliza e protege dados pessoais de clientes e visitantes."
        path="/politica-de-privacidade"
      />
      {/* Header Simples */}
      <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-black hover:text-[#F97316] transition-colors font-black uppercase italic">
            <ArrowLeft size={20} /> Voltar para Home
          </Link>
          <span className="font-montserrat font-bold text-xl text-black uppercase tracking-tight italic">
            R3 <span className="text-[#F97316]">Bike</span>
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl mt-16">
        <h1 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-8 uppercase italic">
          Política de <span className="text-[#F97316]">Privacidade</span>
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Esta política explica como a <strong>R3 Bike Shop</strong>, controladora dos dados pessoais tratados em seus canais, utiliza e protege informações conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">1. Coleta de Dados</h2>
          <p>
            Podemos tratar nome, telefone, e-mail, dados de atendimento, orçamento e serviço, além de dados técnicos de navegação quando você autoriza os rastreadores opcionais. As informações são fornecidas por você no WhatsApp, por e-mail, presencialmente ou geradas durante o uso do site.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">2. Uso das Informações</h2>
          <p>
            Seus dados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agendamento de manutenções e revisões;</li>
            <li>Envio de orçamentos e atualizações sobre o serviço;</li>
            <li>Comunicação sobre promoções ou novidades da loja (quando autorizado).</li>
            <li>Medição do desempenho do site e de campanhas, somente após consentimento.</li>
          </ul>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">3. Bases legais</h2>
          <p>
            O tratamento pode ocorrer para executar contrato ou procedimentos solicitados por você, cumprir obrigação legal, atender interesses legítimos relacionados ao atendimento e à segurança ou mediante consentimento, quando exigido. Você pode revogar o consentimento a qualquer momento.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">4. Compartilhamento e operadores</h2>
          <p>
            Não vendemos dados pessoais. Informações podem ser processadas por fornecedores necessários ao atendimento e à operação do site, como WhatsApp, hospedagem Vercel, Google e Meta, de acordo com a finalidade aplicável e sua escolha de cookies. Também podemos compartilhar dados quando houver obrigação legal.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">5. Retenção e segurança</h2>
          <p>
            Mantemos dados pelo tempo necessário para prestar o serviço, cumprir obrigações legais e exercer direitos. Adotamos medidas administrativas e técnicas razoáveis para reduzir acessos não autorizados, perdas e usos indevidos.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">6. Seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode pedir confirmação e acesso, correção, anonimização, bloqueio ou eliminação quando cabível, portabilidade, informação sobre compartilhamentos e revisão ou revogação do consentimento. Para exercer seus direitos, escreva para <strong>suporte@r3bikeshop.com</strong>. Poderemos solicitar informações para confirmar sua identidade.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">7. Cookies e rastreadores</h2>
          <p>
            Rastreadores opcionais permanecem bloqueados até sua autorização. Consulte a <Link href="/cookies" className="font-bold text-[#F97316] underline">Política de Cookies</Link> para conhecer as categorias e alterar suas preferências.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">8. Atualizações</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos a leitura regular desta página.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 11 de outubro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
