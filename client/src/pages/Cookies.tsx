import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import { openCookiePreferences } from "@/components/CookieConsent";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      <Seo
        title="Política de Cookies | R3 Bike Shop"
        description="Entenda como o site da R3 Bike Shop utiliza cookies essenciais, funcionais e de desempenho."
        path="/cookies"
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
          Política de <span className="text-[#F97316]">Cookies</span>
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            O site da <strong>R3 Bike Shop</strong> usa armazenamento estritamente necessário para guardar sua escolha de privacidade. Ferramentas de medição e publicidade só são ativadas depois do seu consentimento.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site. Eles ajudam a lembrar suas preferências e otimizar o funcionamento da página.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">Como usamos os Cookies?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Armazenamento essencial:</strong> Guarda sua escolha de consentimento no próprio navegador e não pode ser desativado pelo banner.</li>
            <li><strong>Medição e publicidade:</strong> Google Tag Manager e as ferramentas configuradas nele podem medir visitas e conversões.</li>
            <li><strong>Meta Pixel:</strong> Pode medir visitas e ações relacionadas a campanhas nas plataformas da Meta.</li>
          </ul>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">Consentimento e revogação</h2>
          <p>
            Você pode aceitar ou recusar os rastreadores opcionais sem perder o acesso ao site. Também pode rever sua escolha a qualquer momento pelo botão abaixo. Ao revogar uma autorização já concedida, a página é recarregada para interromper os rastreadores ativos.
          </p>

          <button
            type="button"
            onClick={openCookiePreferences}
            className="min-h-11 rounded-full bg-[#F97316] px-6 py-3 font-black uppercase text-white transition-colors hover:bg-[#EA580C]"
          >
            Gerenciar preferências
          </button>

          <p>
            Você também pode excluir cookies e dados de sites nas configurações do seu navegador. Para dúvidas sobre privacidade, escreva para <strong>suporte@r3bikeshop.com</strong>.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 11 de outubro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
