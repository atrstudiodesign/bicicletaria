import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function LegalNotice() {
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
          Aviso <span className="text-[#F97316]">Legal</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            As informações contidas neste site são apenas para fins informativos
            sobre os serviços e produtos da <strong>R3 Bike Shop</strong>.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo deste site (textos, imagens, logotipos e design) é
            de propriedade exclusiva da R3 Bike Shop ou de seus parceiros, sendo
            protegida por leis de direitos autorais. A reprodução não autorizada
            é proibida.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            Limitação de Responsabilidade
          </h2>
          <p>
            Embora nos esforcemos para manter as informações atualizadas e
            corretas, não garantimos a precisão absoluta de todos os preços ou
            disponibilidade de produtos, que podem ser alterados sem aviso
            prévio. Os orçamentos finais são sempre validados presencialmente ou
            via contato direto.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            Dados da Empresa
          </h2>
          <p>
            <strong>Razão Social:</strong> R3 Bike Shop
            <br />
            <strong>CNPJ:</strong> 54.875.734/0001-43
            <br />
            <strong>Endereço:</strong> Rua Conselheiro Moreira de Barros, 3809,
            Lauzane Paulista, São Paulo/SP.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 09 de Janeiro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
