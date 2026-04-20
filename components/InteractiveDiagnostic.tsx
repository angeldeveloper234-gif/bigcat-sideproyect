import React, { useState } from 'react';
import { Camera, AlertCircle, ArrowRight, CheckCircle2, Zap, Shield, ThumbsUp } from 'lucide-react';
import { CockroachIcon, BedBugIcon, RodentIcon, AntIcon } from './PestIcons';

type PestId = 'cucaracha' | 'chinche' | 'roedor' | 'hormiga';

interface PestData {
  id: PestId;
  name: string;
  emoji: string;
  risk: string;
  riskColor: string;
  dangerLevel: number; // 1-5
  description: string;
  treatment: string;
  treatmentDetail: string;
  urgency: string;
  estimatedTime: string;
  Icon: React.FC<{ size?: number; className?: string; strokeWidth?: number }>;
}

const pests: PestData[] = [
  {
    id: 'cucaracha',
    name: 'Cucaracha',
    emoji: '🪳',
    risk: 'Alto',
    riskColor: 'text-orange-500',
    dangerLevel: 4,
    description: 'Portadora de más de 30 bacterias. Se reproduce exponencialmente: una hembra puede generar 300,000 descendientes al año.',
    treatment: 'Gel Activo Inodoro + Barrera Perimetral',
    treatmentDetail: 'Aplicación de cebo en puntos neurálgicos (bajocubierta, canaletas, enchufes). Sin necesidad de evacuar.',
    urgency: 'Intervención en menos de 48 hrs recomendada.',
    estimatedTime: '2–4 horas de aplicación',
    Icon: CockroachIcon,
  },
  {
    id: 'chinche',
    name: 'Chinche de Cama',
    emoji: '🐛',
    risk: 'Crítico',
    riskColor: 'text-red-600',
    dangerLevel: 5,
    description: 'Afecta el descanso, deja rastros visibles en colchones e impacta severamente la reputación hotelera. Se detecta por manchas oscuras en costuras.',
    treatment: 'Nebulización ULV de Choque + Calor Seco',
    treatmentDetail: 'Protocolo combinado que elimina huevos, ninfas y adultos en una sola sesión. Seguro para colchones y telas.',
    urgency: 'Intervención URGENTE — 24 hrs máximo.',
    estimatedTime: '4–6 horas por habitación',
    Icon: BedBugIcon,
  },
  {
    id: 'roedor',
    name: 'Roedor',
    emoji: '🐀',
    risk: 'Extremo',
    riskColor: 'text-red-700',
    dangerLevel: 5,
    description: 'Capaz de cortar cables eléctricos (riesgo de incendio), contaminar alimentos con hantavirus y leptospirosis. Una colonia puede duplicarse en 3 semanas.',
    treatment: 'Estaciones de Cebado + Exclusión Física',
    treatmentDetail: 'Mapeo de rutas de transito, sellado de accesos > 1cm, colocación de estaciones inviolables seguras para mascotas.',
    urgency: 'Intervención inmediata — riesgo estructural.',
    estimatedTime: '1 día instalación + seguimiento 30 días',
    Icon: RodentIcon,
  },
  {
    id: 'hormiga',
    name: 'Hormiga',
    emoji: '🐜',
    risk: 'Medio',
    riskColor: 'text-yellow-600',
    dangerLevel: 2,
    description: 'Contamina superficies de preparación de alimentos. Las colonias de hormiga argentina pueden superar 1 millón de individuos con múltiples reinas.',
    treatment: 'Cebo Selectivo + Barrera de Gel',
    treatmentDetail: 'Uso de cebo que las obreras transportan a la reina, eliminando la colonia desde adentro. Sin aspersión masiva.',
    urgency: 'Control preventivo recomendado esta semana.',
    estimatedTime: '1–2 horas de aplicación',
    Icon: AntIcon,
  },
];

const DangerMeter: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex items-center gap-1.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-2 flex-1 rounded-full transition-all ${
          i <= level
            ? level >= 5 ? 'bg-red-600' : level >= 4 ? 'bg-orange-500' : 'bg-yellow-500'
            : 'bg-gray-200'
        }`}
      />
    ))}
    <span className="text-[10px] font-black text-gray-400 ml-1 uppercase tracking-wider">
      {level}/5
    </span>
  </div>
);

const InteractiveDiagnostic: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedPest, setSelectedPest] = useState<PestId | null>(null);

  const selected = pests.find((p) => p.id === selectedPest) ?? null;

  return (
    <section id="diagnostico" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Text Area ── */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-yellow font-black tracking-widest uppercase text-xs mb-4">
                Inteligencia Preventiva
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                Identifica tu Plaga <br />
                <span className="text-brand-red">con IA FE™</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              No todas las plagas se tratan igual. Usa nuestro diagnosticador para entender el nivel de riesgo y obtener una{' '}
              <span className="text-white font-bold">cotización instantánea</span> basada en el tipo de intruso.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-brand-red flex-shrink-0" size={20} />
                <span>Diagnóstico Preciso en 30 segundos</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-brand-red flex-shrink-0" size={20} />
                <span>Recomendación de Tratamiento Grado Alimenticio</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="bg-brand-red p-3 rounded-2xl flex-shrink-0">
                  <Camera className="text-white" size={24} />
                </div>
                <p className="text-white font-bold">
                  ¿Tienes una foto?{' '}
                  <span className="text-gray-400 font-normal">
                    Envíala por WhatsApp para identificación humana experta.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Interactive Module ── */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative">

            {/* ── STEP 1: Pest picker ── */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-brand-red font-black text-xs uppercase tracking-widest text-center">
                    Paso 1 de 2
                  </p>
                  <h3 className="text-2xl font-black text-brand-dark text-center">
                    ¿Qué has visto?
                  </h3>
                  <p className="text-center text-gray-400 text-sm">
                    Selecciona la especie más parecida a lo que encontraste
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {pests.map((pest) => {
                    const { Icon } = pest;
                    return (
                      <button
                        key={pest.id}
                        onClick={() => {
                          setSelectedPest(pest.id);
                          setStep(2);
                        }}
                        className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-red hover:bg-red-50 transition-all group"
                      >

                        <Icon
                          size={36}
                          className="text-gray-300 group-hover:text-brand-red transition-all group-hover:scale-110"
                          strokeWidth={1.3}
                        />
                        <span className="font-bold text-brand-dark text-sm text-center leading-tight">
                          {pest.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-center text-[11px] text-gray-400 mt-2">
                  * Simulado para la demostración
                </p>
              </div>
            )}

            {/* ── STEP 2: Diagnosis result ── */}
            {step === 2 && selected && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <p className="text-brand-red font-black text-xs uppercase tracking-widest text-center mb-1">
                    Resultado del Diagnóstico IA FE™
                  </p>
                  <h3 className="text-2xl font-black text-brand-dark text-center">
                    {selected.name} Detectada
                  </h3>
                </div>

                {/* Pest Icon + Risk badge */}
                <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 border-2 border-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <selected.Icon size={40} className="text-brand-red" strokeWidth={1.3} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                      Nivel de Riesgo Sanitario
                    </p>
                    <p className={`font-black text-lg ${selected.riskColor}`}>
                      {selected.risk}
                    </p>
                    <DangerMeter level={selected.dangerLevel} />
                  </div>
                </div>

                {/* Description */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl relative">
                  <AlertCircle className="text-amber-500 absolute -top-3 -right-3 bg-white rounded-full" size={22} />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-black text-brand-dark">Análisis: </span>
                    {selected.description}
                  </p>
                </div>

                {/* Treatment */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-brand-red flex-shrink-0" />
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">
                      Tratamiento Recomendado
                    </p>
                  </div>
                  <div className="bg-brand-dark text-white rounded-2xl p-4 space-y-2">
                    <p className="font-black text-brand-red text-sm">{selected.treatment}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{selected.treatmentDetail}</p>
                  </div>
                </div>

                {/* Urgency + Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                    <Zap size={16} className="text-brand-red mx-auto mb-1" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-0.5">Urgencia</p>
                    <p className="text-xs font-bold text-brand-dark leading-tight">{selected.urgency}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-center">
                    <ThumbsUp size={16} className="text-green-600 mx-auto mb-1" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-0.5">Duración</p>
                    <p className="text-xs font-bold text-brand-dark leading-tight">{selected.estimatedTime}</p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="w-full py-4 bg-brand-red text-white rounded-2xl font-black flex items-center justify-center gap-3 text-base hover:bg-brand-dark transition-all shadow-xl shadow-brand-red/20"
                >
                  Obtener Cotización Ahora
                  <ArrowRight size={18} />
                </a>

                <button
                  onClick={() => setStep(1)}
                  className="w-full py-3 text-gray-400 font-bold hover:text-brand-dark transition-colors text-sm"
                >
                  ← Elegir otro tipo de plaga
                </button>

                {/* Disclaimer */}
                <p className="text-center text-[11px] text-gray-400 border-t border-gray-100 pt-4">
                  * Simulado para la demostración. El diagnóstico real requiere inspección presencial.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDiagnostic;

