import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      {/* Header Simples */}
      <header className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-black hover:text-[#F97316] transition-colors font-black uppercase italic"
          >
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
            O site da <strong>R3 Bike Shop</strong> utiliza cookies para
            melhorar sua experiência de navegação e entender como você utiliza
            nossa plataforma.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            O que são Cookies?
          </h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador
            quando você visita um site. Eles ajudam a lembrar suas preferências
            e otimizar o funcionamento da página.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            Como usamos os Cookies?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies Essenciais:</strong> Necessários para que o site
              funcione corretamente (ex: navegação entre seções).
            </li>
            <li>
              <strong>Cookies de Desempenho:</strong> Coletam dados anônimos
              sobre como as pessoas usam o site para que possamos melhorá-lo
              (ex: Google Analytics).
            </li>
            <li>
              <strong>Cookies Funcionais:</strong> Lembram escolhas que você faz
              para personalizar sua experiência.
            </li>
          </ul>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            Como desativar?
          </h2>
          <p>
            Você pode configurar seu navegador para recusar todos os cookies ou
            para indicar quando um cookie está sendo enviado. No entanto,
            algumas funcionalidades do site podem não operar corretamente sem
            eles.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 09 de Janeiro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
