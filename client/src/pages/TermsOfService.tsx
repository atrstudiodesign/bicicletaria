import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
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
          Termos de <span className="text-[#F97316]">Serviço</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Ao utilizar os serviços da <strong>R3 Bike Shop</strong>, você
            concorda com os seguintes termos e condições.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            1. Orçamentos
          </h2>
          <p>
            Todos os orçamentos têm validade de 7 dias úteis. A execução do
            serviço só é iniciada após a aprovação formal do cliente via
            WhatsApp ou presencialmente.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            2. Garantia
          </h2>
          <p>
            Oferecemos garantia de 90 dias sobre a mão de obra realizada em
            nossa oficina. Para peças e componentes novos, a garantia segue o
            prazo estabelecido pelo fabricante.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            3. Prazo de Entrega
          </h2>
          <p>
            Os prazos de manutenção são combinados individualmente. Caso haja
            necessidade de peças sob encomenda, o prazo pode ser estendido,
            sendo o cliente sempre notificado.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            4. Coleta e Entrega (Busca e Leva)
          </h2>
          <p>
            O serviço de coleta e entrega está disponível para a Zona Norte de
            São Paulo. Taxas de deslocamento podem ser aplicadas dependendo da
            distância, sendo informadas no momento do agendamento.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            5. Pagamento
          </h2>
          <p>
            Aceitamos cartões de débito, crédito (com parcelamento), PIX e
            dinheiro. A bicicleta só será liberada para entrega após a
            confirmação do pagamento.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 09 de Janeiro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
