import { useState } from "react";
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
    title: "Mountain Bike - Restauracao Completa",
    description:
      "Bike com ferrugem e componentes desgastados transformada em perfeito estado de funcionamento.",
    before: "/images/before-after-1-before.jpg",
    after: "/images/before-after-1-after.jpg",
  },
  {
    id: 2,
    title: "Road Bike - Manutencao Profissional",
    description:
      "Bike de estrada restaurada com novos componentes e pintura impecavel.",
    before: "/images/before-after-2-before.jpg",
    after: "/images/before-after-2-after.jpg",
  },
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = galleryItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(
      prev => (prev - 1 + galleryItems.length) % galleryItems.length
    );
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % galleryItems.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
            Galeria de Transformacoes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o resultado do nosso trabalho profissional. Bikes transformadas
            de forma completa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Slider */}
          <div
            className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-col-resize bg-muted"
            onClick={handleSliderChange}
            style={{ aspectRatio: "16 / 9" }}
          >
            {/* After Image (Background) */}
            <img
              src={currentItem.after}
              alt={`${currentItem.title} - Depois`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.before}
                alt={`${currentItem.title} - Antes`}
                className="w-full h-full object-cover"
                style={{ width: `${(100 / sliderPosition) * 100}%` }}
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
            <p className="text-muted-foreground mb-6">
              {currentItem.description}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Ir para item ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-lg border border-border hover:bg-muted transition-colors"
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
              Quer transformar sua bike tambem?
            </p>
            <a
              href="https://wa.me/5511939065111?text=Ola!%20Gostaria%20de%20mais%20informacoes%20sobre%20os%20servicos%20de%20manutencao%20e%20venda%20de%20bicicletas%20da%20R3%20Bike%20Shop."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-montserrat font-bold hover:shadow-lg transition-shadow"
            >
              Solicitar Orcamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
