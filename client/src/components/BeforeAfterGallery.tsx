import { useState, type KeyboardEvent, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterItem {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
}

const galleryItems: BeforeAfterItem[] = [
  {
    id: 1,
    title: "Mountain Bike - Restauração Completa",
    description: "Bike com ferrugem e componentes desgastados transformada em perfeito estado de funcionamento.",
    before: "/images/before-after-1-before.jpg",
    after: "/images/before-after-1-after.jpg",
  },
  {
    id: 2,
    title: "Road Bike - Manutenção Profissional",
    description: "Bike de estrada restaurada com novos componentes e pintura impecável.",
    before: "/images/before-after-2-before.jpg",
    after: "/images/before-after-2-after.jpg",
  },
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = galleryItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    setSliderPosition(50);
  };

  const updateSliderPosition = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateSliderPosition(event.clientX, event.currentTarget);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      updateSliderPosition(event.clientX, event.currentTarget);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      setSliderPosition((position) => Math.max(0, position - 5));
    }
    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      setSliderPosition((position) => Math.min(100, position + 5));
    }
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
            Galeria de Transformações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o resultado do nosso trabalho profissional. Bikes transformadas de forma completa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Slider */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onKeyDown={handleKeyDown}
            role="slider"
            tabIndex={0}
            aria-label={`Comparar antes e depois: ${currentItem.title}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            style={{ aspectRatio: "16 / 9" }}
            className="relative w-full touch-none cursor-col-resize overflow-hidden rounded-lg bg-muted shadow-lg outline-none ring-[#F97316] focus-visible:ring-4"
          >
            {/* After Image (Background) */}
            <img
              src={currentItem.after}
              alt={`${currentItem.title} - Depois`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Overlay) */}
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <img
                src={currentItem.before}
                alt={`${currentItem.title} - Antes`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <ChevronLeft size={16} />
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded font-bold text-sm">
              ANTES
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded font-bold text-sm">
              DEPOIS
            </div>
          </div>

          {/* Item Info */}
          <div className="mt-8 text-center">
            <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
              {currentItem.title}
            </h3>
            <p className="text-muted-foreground mb-6">{currentItem.description}</p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} className="text-primary" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setSliderPosition(50);
                    }}
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-full"
                    aria-label={`Ir para item ${index + 1}`}
                    aria-pressed={index === currentIndex}
                  >
                    <span className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"}`} />
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-border p-3 transition-colors hover:bg-muted"
                aria-label="Proximo"
              >
                <ChevronRight size={20} className="text-primary" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-sm text-muted-foreground mt-4">
              {currentIndex + 1} de {galleryItems.length}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Quer transformar sua bike também?
            </p>
            <a
              href="https://wa.me/5511939065111?text=Ola!%20Gostaria%20de%20mais%20informacoes%20sobre%20os%20servicos%20de%20manutencao%20e%20venda%20de%20bicicletas%20da%20R3%20Bike%20Shop."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-montserrat font-bold hover:shadow-lg transition-shadow"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
