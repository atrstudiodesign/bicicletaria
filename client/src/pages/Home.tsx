import { MessageCircle, Wrench, Package, Users, Star, MapPin, Phone, ShoppingCart, ArrowRight, Instagram, ChevronRight, ChevronLeft, Facebook, Youtube, Mail, Menu, Maximize2, Quote, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function Home() {
  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Oficina", href: "#oficina" },
    { label: "Serviços", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
    { label: "Sobre", href: "#sobre" },
  ];
  const whatsappNumber = "5511939065111";
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de mais informacoes sobre os servicos de manutencao e venda de bicicletas da R3 Bike Shop."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://www.instagram.com/r3bikeshop";
  const facebookLink = "https://www.facebook.com/share/1B1GX9jXCw/?mibextid=wwXIfr";
  const logoUrl = "https://official-lp.com.br/wp-content/uploads/2025/10/ChatGPT-Image-30_10_2025-23_05_22-e1761917833516.png";
  const facadeUrl = "/uploads/destaquer3bike.PNG"; // Foto de Destaque Oficial

  // Google Ads Conversion Event
  const handleConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17865927460/sOHcCNOs0OAbEKTWkcdC'
      });
    }
  };

  const deliveryImages = [
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-2-e1761915662651.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-1-e1761915681146.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.40-e1761915696692.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-2-e1761915925151.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-1-e1761915952803.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.52.39-e1761915976372.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-3-e1761916003786.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-2-e1761916028777.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.53-e1761916068449.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-09.48.52-e1761916085537.jpeg",
    "https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-31-at-10.00.09-e1761916105228.jpeg"
  ];

  const storeImages = [
    "/uploads/R3(1).jpg",
    "/uploads/R3(2).jpg",
    "/uploads/R3(3).jpg",
    "/uploads/r3(14).jpg",
    "/uploads/r3(15).jpg"
  ];

  const partnerBrands = [
    { name: "Shimano", logo: "/logos/shimano.png" },
    { name: "SRAM", logo: "/logos/sram.png" },
    { name: "RockShox", logo: "/logos/rockshox.png" },
    { name: "Caloi", logo: "/logos/caloi.png" },
    { name: "TSW", logo: "/logos/tsw.png" },
    { name: "First", logo: "/logos/first.png" }
  ];

  const offerImages = [
    "/uploads/promo/Absolute%20Nero%20aro%2029%20de%202300%2C00%20por%20apenas%201999%2C00%20e%20gan.jpeg",
    "/uploads/promo/Bicicleta%20elétrica%20Explore%20Urban%205000w%20de%205400%2C00%20por%20apenas%2.jpeg",
    "/uploads/promo/Caloi%20Explorer%20aro%2029%20de%205400%2C00%20por%20apenas%204990%2C00%20e%20ga.jpeg",
    "/uploads/promo/Caloi%20Explorer%20aro%2029%20de%205600%2C00%20por%20apenas%205199%2C00%20e%20ga.jpeg",
    "/uploads/promo/First%20aro%2029%20de%201400%2C00%20por%20apenas%20999%2C00%20no%20pix.jpeg",
    "/uploads/promo/First%20aro%2029%20de%202900%2C00%20por%20apenas%202490%2C00%20e%20ganha%20capac.jpeg",
    "/uploads/promo/First%20por%20apenas%201499%2C00.jpeg",
    "/uploads/promo/Freeride%20Maria%20por%20apenas%201690%2C00%20com%20freios%20hidraulicos.jpeg",
    "/uploads/promo/GTA%20CLIMB%20aro%2029%20de%203700%2C00%20por%20apenas%203200%2C00%20e%20ganha%2.jpeg",
    "/uploads/promo/GTA%20CLIMB%20aro%2029%20de%203900%2C00%20por%20apenas%203299%2C00%20e%20ganha%2.jpeg",
    "/uploads/promo/GTA%20Gravity%20de%203200%2C00%20por%20apenas%2025acete.jpeg",
    "/uploads/promo/GTA%20start%20aro%2029%20de%203900%2C00%20por%20apenas%203199%2C00%20e%20ganha%2.jpeg",
    "/uploads/promo/Hupi%20Naja%20por%20apenas%204999%2C00%20com%20freios%20hidraulicos.jpeg",
    "/uploads/r3(13).jpg",
    "/uploads/r3(14).jpg",
    "/uploads/r3(15).jpg"
  ];

  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);

  const extractPriceFromUrl = (url: string) => {
    try {
      const decoded = decodeURIComponent(url);
      const match = decoded.match(/por apenas (\d+[.,]\d+)/i) || decoded.match(/(\d+[.,]\d+)/);
      return match ? match[1].replace(".", ",") : "Consulte";
    } catch {
      return "Consulte";
    }
  };

  const extractDescriptionFromUrl = (url: string) => {
    try {
      const decoded = decodeURIComponent(url);
      const filename = decoded.split("/").pop() || "";
      if (filename.toLowerCase().includes("r3(")) return "Oferta Especial R3 Bike Shop";
      return filename.replace(/\.(jpeg|jpg|png|webp|mp4)$/i, "").replace(/%20/g, " ");
    } catch {
      return "Oferta Especial";
    }
  };

  const services = [
    { title: "VENDA DE BICICLETAS", image: "/uploads/R3(1).webp" },
    { title: "REVISÃO COMPLETA", image: "/uploads/R3(7).jpg" },
    { title: "CONSERTO E MANUTENÇÃO", image: "/uploads/R3(12).jpg" },
    { title: "PEÇAS E COMPONENTES", image: "/uploads/destaquer3bike.PNG" },
    { title: "ACESSÓRIOS PARA BIKE", image: "/uploads/r3(9).jpg" },
    { title: "SERVIÇO DE BUSCA E LEVA", image: "/uploads/r3(15).jpg" },
  ];

  const googleReviews = [
    { 
      text: "Extremamente profissionais, me atenderam em pleno dia de Natal (25/12) e montaram 2 bicicletas para meus filhos em menos de duas horas e fizeram nossa alegria. Preço justo e atendimento sensacional. Parabéns!", 
      author: "Lucca Firmino",
      metadata: "Local Guide · 180 avaliações · 2 semanas atrás"
    },
    { 
      text: "Gostaria de expressar minha satisfação com o serviço prestado pela R3 bike shop. A revisão da minha bicicleta foi realizada com excelência, demonstrando um alto nível de profissionalismo e conhecimento técnico. Compramos 4 bicicletas lindas sendo 3 para meus filhos e amamos. O atendimento foi excelente, loja muito bem organizada e um ótimo café.", 
      author: "Clovis Souza de Brito",
      metadata: "4 avaliações · 2 meses atrás"
    },
    { 
      text: "Equipe incrível, bikes de boas qualidades, atendimento maravilhoso, fui bem atendido e fiquei super feliz com a minha compra, recomendo... Comprei duas bicicletas, ótima qualidade, atendimento excelente, preços ótimos e variedade de produtos. Recomendo muito", 
      author: "Sergio Carvalho",
      metadata: "4 avaliações · 2 meses atrás"
    },
    { 
      text: "Loja top, atendimento excelente e produtos de alta qualidade. Super recomendo.", 
      author: "Google User",
      metadata: "Local Guide"
    },
    { 
      text: "Lugar aconchegante e acolhedor, profissionais de ponta com muita experiência.", 
      author: "Google User",
      metadata: "Local Guide"
    },
    { 
      text: "Qualidade, variedade e preço acessível para todos os gostos.", 
      author: "Google User",
      metadata: "Local Guide"
    }
  ];

  const heroSlides = [
    {
      badge: "LOJA Especializada na Zona Norte",
      title: "OFERTA IMPERDÍVEL",
      titleHighlight: "NA R3 BIKE SHOP!",
      description: (
        <p>
          A R3 Bike Shop é sua <strong>LOJA de bicicletas no Lauzane Paulista</strong>. Oferecemos <strong>manutenção de bicicletas em São Paulo</strong> com peças originais e atendimento especializado.
        </p>
      ),
      ctaPrimary: { text: "Solicitar Orçamento", link: whatsappLink, icon: <MessageCircle size={20} /> },
      ctaSecondary: { text: "Ligar Agora", link: "tel:+5511939065111", icon: <Phone size={20} /> },
      image: facadeUrl,
      alt: "R3 Bike Shop LOJA Profissional"
    },
    {
      badge: "Oficina de Alta Performance",
      title: "SUA BIKE EM",
      titleHighlight: "MÃOS DE MESTRE",
      description: (
        <p>
          Revisão completa, ajustes de precisão e <strong>peças originais</strong>. Mecânicos especializados para garantir que sua única preocupação seja o pedal.
        </p>
      ),
      ctaPrimary: { text: "Agendar Manutenção", link: whatsappLink, icon: <Wrench size={20} /> },
      ctaSecondary: { text: "Conhecer Oficina", link: "#servicos", icon: <ArrowRight size={20} /> },
      image: "/uploads/R3(7).jpg",
      alt: "Oficina R3 Bike Shop"
    },
    {
      badge: "Melhores Marcas do Mercado",
      title: "OFERTAS DE BIKES",
      titleHighlight: "E COMPONENTES",
      description: (
        <p>
          As melhores <strong>bicicletas novas e seminovas</strong> com condições que cabem no seu bolso. Shimano, SRAM e as principais marcas do mundo.
        </p>
      ),
      ctaPrimary: { text: "Ver Ofertas", link: "#servicos", icon: <ShoppingCart size={20} /> },
      ctaSecondary: { text: "Chamar no Whats", link: whatsappLink, icon: <MessageCircle size={20} /> },
      image: "/uploads/R3(4).webp",
      alt: "Ofertas de Bicicletas R3"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deliveryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deliveryImages.length) % deliveryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header id="home" className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logoUrl} alt="R3 Bike Shop - Oficina de Bicicletas no Lauzane Paulista" className="h-12 w-auto" />
              <span className="font-montserrat font-black text-xl text-black hidden lg:inline uppercase tracking-tight italic">
                R3 BIKE <span className="text-[#F97316]">SHOP</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-black uppercase italic tracking-wider text-gray-600 hover:text-[#F97316] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F97316] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConversion}
              className="inline-flex items-center gap-2 bg-[#F97316] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold hover:bg-[#EA580C] transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 text-[#F97316] hover:bg-gray-50 rounded-lg transition-all active:scale-95">
                  <Menu size={32} strokeWidth={2.5} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-4 border-l-[#F97316]">
                <SheetHeader className="text-left border-b border-gray-100 pb-6">
                  <SheetTitle className="flex items-center gap-3">
                    <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
                    <span className="font-montserrat font-black text-lg italic uppercase">
                      R3 BIKE <span className="text-[#F97316]">SHOP</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 py-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-2xl font-black uppercase italic tracking-tighter text-gray-800 hover:text-[#F97316] transition-colors flex items-center justify-between group"
                    >
                      {item.label}
                      <ChevronRight size={24} className="text-gray-300 group-hover:text-[#F97316] transition-colors" />
                    </a>
                  ))}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Siga-nos</p>
                    <div className="flex gap-4">
                      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#F97316] hover:text-white transition-all">
                        <Instagram size={22} />
                      </a>
                      <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#F97316] hover:text-white transition-all">
                        <Facebook size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section Slideshow */}
      <section className="relative overflow-hidden bg-white border-b border-gray-50">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="pt-16 pb-24 container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                      <span className="inline-block bg-[#F97316]/10 text-[#F97316] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        {slide.badge}
                      </span>
                      <h1 className="font-montserrat font-black text-4xl md:text-6xl text-black mb-6 leading-tight uppercase italic">
                        {slide.title} <br />
                        <span className="text-[#F97316]">{slide.titleHighlight}</span>
                      </h1>
                      <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {slide.description}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={slide.ctaPrimary.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleConversion}
                          className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-[#F97316] transition-all shadow-xl hover:-translate-y-1 uppercase italic"
                        >
                          {slide.ctaPrimary.icon}
                          {slide.ctaPrimary.text}
                        </a>
                        <a
                          href={slide.ctaSecondary.link}
                          onClick={handleConversion}
                          className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-xl font-black text-lg hover:bg-black hover:text-white transition-all uppercase italic"
                        >
                          {slide.ctaSecondary.icon}
                          {slide.ctaSecondary.text}
                        </a>
                      </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl -z-10"></div>
                      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/5 rounded-full blur-3xl -z-10"></div>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block">
                        <div className="flex items-center gap-4">
                          <div className="bg-[#F97316] p-3 rounded-xl">
                            <Star className="text-white" size={24} fill="currentColor" />
                          </div>
                          <div>
                            <p className="font-black text-2xl leading-none">100%</p>
                            <p className="text-xs text-gray-500 uppercase font-bold">Qualidade R3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-8 bg-white/80 hover:bg-[#F97316] hover:text-white border-none shadow-lg" />
            <CarouselNext className="right-8 bg-white/80 hover:bg-[#F97316] hover:text-white border-none shadow-lg" />
          </div>
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F97316]/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Atendimento Local</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">+500</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Clientes Satisfeitos</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">10+</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Anos de Experiência</p>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-black text-[#F97316] mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <p className="text-sm text-gray-400 uppercase font-black tracking-widest">Suporte WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oficina Section - Alta Performance */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative" id="oficina">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block bg-[#F97316] text-white px-4 py-1 rounded-sm text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Expertise Técnica
                </span>
                <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6 leading-tight uppercase italic">
                  OFICINA DE <br />
                  <span className="text-[#F97316]">ALTA PERFORMANCE</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  Na R3 Bike Shop, sua bicicleta recebe tratamento de elite. Somos especialistas em <strong>manutenção de bicicletas de alta performance</strong>, utilizando ferramentas de precisão e processos rigorosos de qualidade.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Wrench className="text-[#F97316]" />, title: "Revisão Premium", desc: "Desmontagem completa e lubrificação técnica." },
                  { icon: <Package className="text-[#F97316]" />, title: "Peças Originais", desc: "Shimano, SRAM e as melhores marcas." },
                  { icon: <Star className="text-[#F97316]" />, title: "Mecânicos Elite", desc: "Profissionais certificados e experientes." },
                  { icon: <Clock className="text-[#F97316]" />, title: "Entrega Rápida", desc: "Agilidade sem comprometer a perfeição." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-[#F97316]/50 transition-colors group">
                    <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-black uppercase italic mb-2 text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConversion}
                  className="inline-flex items-center gap-3 bg-[#F97316] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#F97316] transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] uppercase italic"
                >
                  <MessageCircle size={24} />
                  Agendar Minha Revisão
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#F97316]/20 rounded-full blur-[100px]"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <img 
                  src="/uploads/R3(7).jpg" 
                  alt="Oficina R3 Bike Shop - Manutenção Profissional" 
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#F97316] p-4 rounded-xl">
                      <Wrench className="text-white" size={32} />
                    </div>
                    <div>
                      <p className="text-[#F97316] font-black uppercase text-xs tracking-widest mb-1">Diferencial R3</p>
                      <h3 className="text-xl font-black uppercase italic">Ferramentas de Precisão</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" id="sobre">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F97316] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagem */}
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#F97316]/20 to-black/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src="https://official-lp.com.br/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-30-at-18.51.18-e1761874792514.jpeg"
                alt="R3 Bike Shop - Quem Somos"
                className="relative w-full rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#F97316] text-white px-6 py-3 rounded-full font-black text-lg shadow-xl">
                5.0 ★
              </div>
            </div>
            
            {/* Conteúdo */}
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block">
                <span className="bg-[#F97316]/10 text-[#F97316] px-4 py-2 rounded-full font-black text-sm uppercase tracking-widest">Nossa História</span>
              </div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-8 uppercase italic leading-tight">
                R3 Bike Shop: <span className="text-[#F97316]">Quem Somos</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">•</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A <strong>R3 Bike Shop</strong> nasceu da paixão pelo ciclismo e do compromisso com a excelência técnica. Somos uma <strong>LOJA de bicicletas no Lauzane Paulista</strong> especializada em <strong>venda e manutenção de bicicletas</strong> de todos os tipos.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">•</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nossa LOJA é equipada com ferramentas de precisão e nossa equipe é treinada para lidar com desde ajustes simples até revisões complexas de performance.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">•</div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Somos uma <strong>bike shop na Zona Norte SP</strong> com foco total na satisfação do cliente e 5.0 estrelas no Google!
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-[#F97316]/10 rounded-2xl border-2 border-[#F97316]">
                <p className="font-montserrat font-black text-xl text-[#F97316] italic">
                  "Mais de 300 avaliações de clientes satisfeitos na Zona Norte!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Imperdível Section */}
      <section className="py-20 bg-[#F97316] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl group-hover:bg-white/30 transition-all"></div>
              
              <Carousel
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="relative w-full"
                onSelect={(api) => setCurrentOfferSlide(api.selectedIndex)}
              >
                <CarouselContent>
                  {offerImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={img} 
                        alt={`Oferta ${index + 1}`} 
                        className="w-full h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                  <CarouselPrevious className="pointer-events-auto h-10 w-10 rounded-full bg-black/50 border-none text-white hover:bg-black" />
                  <CarouselNext className="pointer-events-auto h-10 w-10 rounded-full bg-black/50 border-none text-white hover:bg-black" />
                </div>
              </Carousel>

              <p className="text-white/50 text-xs mt-2 text-right italic">Foto ilustrativa</p>
              <div className="absolute top-4 left-4 bg-black text-white px-6 py-2 rounded-full font-black uppercase italic tracking-widest shadow-xl z-20">
                Promoção Ativa
              </div>
            </div>
            <div>
              <span className="inline-block bg-white text-[#F97316] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
                Oportunidade Única
              </span>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 leading-tight uppercase italic drop-shadow-lg">
                OFERTA IMPERDÍVEL <br />
                <span className="text-black">NA R3 BIKE SHOP!</span>
              </h2>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-8 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight text-white uppercase italic">
                  {extractDescriptionFromUrl(offerImages[currentOfferSlide])}
                </h3>
                <div className="inline-block bg-black text-white px-8 py-4 rounded-2xl shadow-xl">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Preço Imbatível</p>
                  <p className="text-4xl md:text-5xl font-black">
                    R$ {extractPriceFromUrl(offerImages[currentOfferSlide])}
                  </p>
                  <p className="text-xs font-bold mt-2">À VISTA NO PIX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços com Carrossel Automático */}
      <section className="py-24 bg-black relative overflow-hidden" id="servicos">
        {/* Background image with overlay style footer */}
        <div 
          className="absolute inset-0 z-0 opacity-30 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('${facadeUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4 uppercase italic">Serviços da <span className="text-[#F97316]">R3 Bike Shop</span></h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-bold italic">
              Excelência técnica e cuidado especial: a melhor <strong>manutenção de bicicletas em São Paulo</strong>.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-transparent rounded-none shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                    <div className="relative aspect-[4/5] overflow-hidden border-[4px] border-[#F97316]">
                      <img 
                        src={service.image} 
                        alt={`${service.title} - R3 Bike Shop Lauzane Paulista Zona Norte SP`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16">
                        <h3 className="text-white font-montserrat font-black text-2xl text-center uppercase italic leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/10 text-white hover:bg-[#F97316] hover:text-white border-2 border-white/20" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white/10 text-white hover:bg-[#F97316] hover:text-white border-2 border-white/20" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Carrossel de Entregas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Nossas <span className="text-[#F97316]">Entregas</span></h2>
            <p className="text-gray-600 text-xl">Transparência e satisfação em cada entrega realizada.</p>
          </div>

          <div className="relative max-w-5xl mx-auto group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white">
              {deliveryImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <img src={img} alt={`Entrega de bicicleta R3 Bike Shop Lauzane Paulista - Foto ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F97316] hover:text-white p-4 rounded-full shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#F97316] hover:text-white p-4 rounded-full shadow-2xl transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {deliveryImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-[#F97316] w-12' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização e Mapa Corrigido */}
      <section className="py-24 bg-gray-50" id="localizacao">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-8 uppercase italic">Localização da <span className="text-[#F97316]">LOJA</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic text-[#F97316]">LOJA de bicicletas no Lauzane Paulista</h4>
                    <p className="text-gray-600 text-lg mt-2 leading-tight mb-4">Visite a R3 Bike Shop, sua <strong>bike shop na Zona Norte SP</strong>:</p>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=R3BikeShop+Lauzane+Paulista" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-gray-200 hover:border-[#F97316] text-black px-4 py-2 rounded-xl text-sm font-black uppercase italic transition-all flex items-center gap-2 shadow-sm"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="#4285F4"/>
                        </svg>
                        Google Maps
                      </a>
                      <a 
                        href="https://waze.com/ul?q=R3BikeShop+Lauzane+Paulista&navigate=yes" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-gray-200 hover:border-[#33CCFF] text-black px-4 py-2 rounded-xl text-sm font-black uppercase italic transition-all flex items-center gap-2 shadow-sm"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.5 12.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-13 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="#33CCFF"/>
                          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.5.3 2.9.9 4.2L2 21l4.8-.9c1.3.6 2.7.9 4.2.9 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 17.5c-1.3 0-2.5-.3-3.6-.9l-.3-.1-2.7.5.5-2.6-.2-.3c-.7-1.1-1.1-2.3-1.1-3.6 0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z" fill="#33CCFF"/>
                        </svg>
                        Waze
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-black text-white p-4 rounded-2xl shadow-lg">
                    <ShoppingCart size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic text-[#F97316]">Fácil Acesso</h4>
                    <p className="text-gray-600 text-lg mt-1 leading-tight">
                      Localização estratégica no <strong>Lauzane Paulista</strong> (PROX. AO SHOPPING SANTANA PARTAGE), com facilidade para estacionar e acesso rápido para quem vem de toda a Zona Norte.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#F97316] text-white p-4 rounded-2xl shadow-lg animate-pulse">
                    <Star size={28} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase italic text-black">Paixão pelo Pedal</h4>
                    <p className="text-[#F97316] text-2xl font-black mt-1 leading-tight uppercase italic tracking-tighter">
                      Sua bike em boas mãos, <br />
                      você seguro na pista!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="https://maps.app.goo.gl/DBC8XZpn7RLLHAYd9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F97316] font-black text-lg hover:underline uppercase italic"
                >
                  Abrir no Google Maps <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.560316935854!2d-46.650629099999996!3d-23.476319300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef70041fec2eb%3A0xce8dfaf42ae7cfc0!2sR3BikeShop!5e0!3m2!1spt-BR!2sbr!4v1768005391319!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Geometric Bike Chain Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4 uppercase italic">Dúvidas <span className="text-[#F97316]">Frequentes</span></h2>
            <p className="text-gray-400 text-xl italic">Tudo o que você precisa saber sobre nossos serviços.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Onde vocês atendem?", a: "Nossa loja física está no Lauzane Paulista (Rua Conselheiro Moreira de Barros, 3809), mas atendemos toda a Zona Norte com nosso serviço de Busca e Leva." },
              { q: "As bicicletas têm garantia?", a: "Sim! Todas as bikes novas possuem garantia de fábrica. Nossos serviços de manutenção também contam com garantia de execução." },
              { q: "Quais as formas de pagamento?", a: "Aceitamos cartões de crédito (em até 12x), PIX e dinheiro. Oferecemos condições especiais para revisões completas." },
              { q: "Fazem busca e leva da bicicleta?", a: "Com certeza! Esse é um dos nossos diferenciais. Coletamos sua bike na sua casa ou trabalho na Zona Norte e devolvemos pronta." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl px-6 bg-white/5 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-black text-xl py-6 hover:no-underline text-white hover:text-[#F97316] transition-colors uppercase italic">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-lg pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Marcas Parceiras Section */}
      <section className="py-20 bg-[#F97316] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-16 uppercase italic drop-shadow-lg">
            Trabalhamos com as <span className="text-black">Melhores Marcas</span>
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 flex items-center">
              {partnerBrands.map((brand, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="bg-transparent transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-24 group mx-2">
                    <img 
                      src={brand.logo} 
                      alt={`Logo ${brand.name} - Marca parceira R3 Bike Shop`} 
                      className="max-h-12 w-auto object-contain transition-all duration-500 opacity-60 grayscale brightness-0 invert group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.className = "font-black text-xl text-white/60 group-hover:text-white uppercase italic tracking-tighter transition-all";
                          span.textContent = brand.name;
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Nossa Loja por Dentro Section - Carrossel com Zoom */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-black mb-4 uppercase italic">Nossa Loja <span className="text-[#F97316]">por Dentro</span></h2>
            <p className="text-gray-600 text-xl italic">Um espaço completo para cuidar da sua paixão.</p>
          </div>

          <div className="max-w-6xl mx-auto relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[facadeUrl, ...storeImages].map((img, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative group cursor-zoom-in overflow-hidden rounded-2xl aspect-square border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500">
                          <img 
                            src={img} 
                            alt={`Fachada e Interior da R3 Bike Shop no Lauzane Paulista Zona Norte SP - Foto ${index + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                              <Maximize2 className="text-[#F97316]" size={24} />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex items-center justify-center">
                        <VisuallyHidden.Root>
                          <DialogTitle>Imagem da Loja {index + 1}</DialogTitle>
                        </VisuallyHidden.Root>
                        <img 
                          src={img} 
                          alt={`Foto Detalhada R3 Bike Shop Lauzane Paulista - ${index + 1}`} 
                          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-[#F97316] hover:bg-black text-white border-none size-12" />
              <CarouselNext className="hidden md:flex -right-12 bg-[#F97316] hover:bg-black text-white border-none size-12" />
            </Carousel>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest animate-pulse">
              ← Deslize para ver mais →
            </p>
          </div>
        </div>
      </section>

      {/* Avaliações do Google Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden" id="avaliacoes">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-30 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('/uploads/r3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-4 uppercase italic">Avaliações: <span className="text-[#F97316]">R3 Bike Shop</span></h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Avaliações R3 Bike Shop Lauzane Paulista" className="w-8 h-8" />
              <div className="text-2xl font-black">5,0 ★ <span className="text-gray-400 font-normal text-lg">no Google</span></div>
            </div>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {googleReviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#F97316]/50 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex text-[#F97316] gap-0.5 mb-6">
                          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg italic mb-8 text-gray-300 leading-relaxed line-clamp-6">"{review.text}"</p>
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center font-black text-white shrink-0">
                          {review.author.charAt(0)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-black uppercase italic text-sm truncate">{review.author}</p>
                          <p className="text-gray-500 text-xs truncate">{review.metadata}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-[#F97316] hover:bg-white hover:text-[#F97316] text-white border-none size-12 transition-all" />
              <CarouselNext className="hidden md:flex -right-12 bg-[#F97316] hover:bg-white hover:text-[#F97316] text-white border-none size-12 transition-all" />
            </Carousel>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Nota 5,0 no Google • 315 avaliações</p>
            <a 
              href="https://maps.app.goo.gl/DBC8XZpn7RLLHAYd9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-black hover:bg-[#F97316] hover:text-white transition-all uppercase italic shadow-2xl"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
              Ver Todas no Google
            </a>
          </div>
        </div>
      </section>

      {/* Footer Ajustado */}
      <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 grayscale pointer-events-none"
          style={{
            backgroundImage: `url('${facadeUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-30 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase italic tracking-wider text-[#F97316]">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-base">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-base">Quem Somos</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors text-base">Serviços</a></li>
                <li><a href="#localizacao" className="text-gray-400 hover:text-white transition-colors text-base">Localização</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase italic tracking-wider text-[#F97316]">Institucional</h4>
              <ul className="space-y-2">
                <li><Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer">Política de Privacidade</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer">Política de Cookies</Link></li>
                <li><Link href="/aviso-legal" className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer">Aviso Legal</Link></li>
                <li><Link href="/termos-de-servico" className="text-gray-400 hover:text-white transition-colors text-base cursor-pointer">Termos de Serviço</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-black text-lg mb-6 uppercase italic tracking-wider text-[#F97316]">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 group">
                  <MapPin size={20} className="text-[#F97316] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base">Rua Conselheiro Moreira de Barros, 3809<br />Lauzane Paulista, SP - CEP: 02430-002</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 group">
                  <Clock size={20} className="text-[#F97316] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base">
                    <span className="text-white font-bold">Atendimento:</span><br />
                    Segunda a sexta: 9h às 18h<br />
                    Sábado: 9h às 15h
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group">
                  <Mail size={20} className="text-[#F97316] group-hover:scale-110 transition-transform" />
                  <a 
                    href="mailto:suporte@r3bikeshop.com" 
                    className="bg-white/5 hover:bg-[#F97316] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase italic transition-all border border-white/10 hover:border-transparent flex items-center gap-2"
                  >
                    Enviar E-mail
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group">
                  <Phone size={20} className="text-[#F97316] group-hover:scale-110 transition-transform" />
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleConversion}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase italic transition-all flex items-center gap-2 shadow-lg"
                  >
                    Chama no Zap
                  </a>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                    CNPJ: 54.875.734/0001-43
                  </p>
                </li>
              </ul>
            </div>

            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white p-2 border border-white/10 flex items-center justify-center shadow-xl">
                  <img src={logoUrl} alt="Logo R3 Bike Shop - Oficina no Lauzane Paulista" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-black italic tracking-tighter flex flex-col leading-none">
                  <span className="text-white">R3</span>
                  <div className="flex gap-1">
                    <span className="text-[#F97316]">BIKE</span>
                    <span className="text-[#F97316]">SHOP</span>
                  </div>
                </h3>
              </div>
              <p className="text-gray-400 text-base mb-6 leading-relaxed italic">
                R3 Bike Shop – Oficina de Bicicletas no Lauzane Paulista, Zona Norte de São Paulo. Manutenção, revisão, peças e acessórios.
              </p>
              <div className="flex gap-3">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Instagram className="text-white group-hover:scale-110" size={20} />
                </a>
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Facebook className="text-white group-hover:scale-110" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <Youtube className="text-white group-hover:scale-110" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-widest text-center md:text-left">
              © {new Date().getFullYear()} R3 BIKE SHOP - TODOS OS DIREITOS RESERVADOS
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase">
              <span>Desenvolvido por</span>
              <a 
                href="https://agenciatrampos.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white hover:text-[#F97316] transition-colors group"
              >
                <img 
                  src="https://agenciatrampos.vercel.app/_next/image?url=%2Fimages%2Flogo%2Fagencia-trampos-logo.png&w=32&q=75" 
                  alt="Agência Trampos Logo" 
                  className="w-4 h-auto brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
                <span>Agência Trampos</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating Google Review Button */}
        <a 
          href="https://maps.app.goo.gl/DBC8XZpn7RLLHAYd9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-32 right-8 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-[9999] border border-gray-100 group"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-7 h-7" />
          <div className="flex flex-col">
            <span className="text-[13px] font-black text-black leading-none uppercase italic">5,0 ★ no Google</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">315 avaliações</span>
          </div>
          <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
            <Star size={14} className="text-[#F97316] group-hover:text-white" fill="currentColor" />
          </div>
        </a>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleConversion}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group flex items-center gap-3"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase italic whitespace-nowrap">Falar com Especialista</span>
      </a>
    </div>
  );
}
