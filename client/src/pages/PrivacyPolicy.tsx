import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
          Política de <span className="text-[#F97316]">Privacidade</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Na <strong>R3 Bike Shop</strong>, a privacidade e segurança dos
            nossos clientes são prioridades. Esta política descreve como
            coletamos, usamos e protegemos suas informações.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            1. Coleta de Dados
          </h2>
          <p>
            Coletamos apenas as informações necessárias para prestar nossos
            serviços de oficina e venda, como nome, telefone e e-mail,
            geralmente fornecidos por você através do WhatsApp ou contato
            direto.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            2. Uso das Informações
          </h2>
          <p>Seus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Agendamento de manutenções e revisões;</li>
            <li>Envio de orçamentos e atualizações sobre o serviço;</li>
            <li>
              Comunicação sobre promoções ou novidades da loja (quando
              autorizado).
            </li>
          </ul>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            3. Compartilhamento
          </h2>
          <p>
            Não vendemos ou compartilhamos seus dados com terceiros para fins de
            marketing. O acesso às suas informações é restrito apenas à nossa
            equipe administrativa e técnica.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            4. Seus Direitos
          </h2>
          <p>
            Você pode solicitar a qualquer momento a exclusão de seus dados do
            nosso cadastro entrando em contato conosco pelo e-mail:{" "}
            <strong>suporte@r3bikeshop.com</strong>.
          </p>

          <h2 className="text-2xl font-black text-black uppercase italic mt-12">
            5. Atualizações
          </h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos a
            leitura regular desta página.
          </p>

          <p className="mt-12 text-sm italic">
            Última atualização: 09 de Janeiro de 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
