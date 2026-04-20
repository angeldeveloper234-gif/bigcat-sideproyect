import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

// ──────────────────────────────────────────
// PEST ICONS — consistent stroke-based style
// All use: fill="none", stroke="currentColor", round linecaps
// ──────────────────────────────────────────

export const CockroachIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Cucaracha"
  >
    {/* Body */}
    <ellipse cx="16" cy="17" rx="5" ry="8" />
    {/* Head */}
    <ellipse cx="16" cy="9" rx="3" ry="2.5" />
    {/* Antennae */}
    <path d="M14 7 C12 5 9 4 8 2" />
    <path d="M18 7 C20 5 23 4 24 2" />
    {/* legs left */}
    <path d="M11 13 L6 11" />
    <path d="M11 17 L5 16" />
    <path d="M11 21 L6 23" />
    {/* legs right */}
    <path d="M21 13 L26 11" />
    <path d="M21 17 L27 16" />
    <path d="M21 21 L26 23" />
    {/* Wing hint */}
    <path d="M13 12 Q16 10 19 12" strokeDasharray="1.5 1" />
  </svg>
);

export const BedBugIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Chinche de Cama"
  >
    {/* Oval body */}
    <ellipse cx="16" cy="17" rx="6" ry="7" />
    {/* Head — smaller oval */}
    <ellipse cx="16" cy="10" rx="3" ry="2" />
    {/* Antennae */}
    <path d="M14.5 8.5 L11 5" />
    <path d="M17.5 8.5 L21 5" />
    {/* Segmented body lines */}
    <line x1="10.2" y1="15" x2="21.8" y2="15" />
    <line x1="10.5" y1="18.5" x2="21.5" y2="18.5" />
    {/* Legs */}
    <path d="M10.5 13.5 L5 12" />
    <path d="M10.3 17 L4.5 17" />
    <path d="M10.5 20.5 L5 22" />
    <path d="M21.5 13.5 L27 12" />
    <path d="M21.7 17 L27.5 17" />
    <path d="M21.5 20.5 L27 22" />
  </svg>
);

export const RodentIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Roedor"
  >
    {/* Body */}
    <ellipse cx="14" cy="19" rx="7" ry="6" />
    {/* Head */}
    <circle cx="22" cy="14" r="4" />
    {/* Ear */}
    <ellipse cx="20" cy="10.5" rx="2" ry="2.5" />
    {/* Eye */}
    <circle cx="23.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
    {/* Nose */}
    <path d="M25.5 15 L27 15.5" />
    {/* Tail */}
    <path d="M7 21 C4 22 2 20 3 17 C4 14 6 15 7 18" />
    {/* Front legs */}
    <path d="M19 20 L19 27" />
    <path d="M17 21 L16 27" />
    {/* Back legs */}
    <path d="M9 23 L8 28" />
    <path d="M11 24 L11 28" />
    {/* Whiskers */}
    <path d="M25.5 14 L29 13" />
    <path d="M25.5 15.5 L29 16" />
  </svg>
);

export const AntIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Hormiga"
  >
    {/* Abdomen */}
    <ellipse cx="16" cy="22" rx="5" ry="6" />
    {/* Thorax */}
    <circle cx="16" cy="14" r="3" />
    {/* Head */}
    <circle cx="16" cy="7.5" r="2.5" />
    {/* Antennae */}
    <path d="M14.5 5.5 C12 3 10 2 9 1" />
    <path d="M17.5 5.5 C20 3 22 2 23 1" />
    <circle cx="9" cy="1" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="23" cy="1" r="0.8" fill="currentColor" stroke="none" />
    {/* Eyes */}
    <circle cx="14.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
    {/* Front legs (thorax) */}
    <path d="M13 13 L7 11" />
    <path d="M13 15 L7 15" />
    <path d="M19 13 L25 11" />
    <path d="M19 15 L25 15" />
    {/* Rear legs (abdomen) */}
    <path d="M11.5 20 L6 18" />
    <path d="M20.5 20 L26 18" />
  </svg>
);

export const TermiteIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Termita"
  >
    {/* Abdomen — swollen, oval */}
    <ellipse cx="16" cy="22" rx="6" ry="7" />
    {/* Thorax */}
    <ellipse cx="16" cy="12" rx="3.5" ry="3" />
    {/* Head */}
    <ellipse cx="16" cy="6" rx="3" ry="2.5" />
    {/* Mandibles */}
    <path d="M14 4.5 C12.5 3.5 11.5 3.5 11 4.5" />
    <path d="M18 4.5 C19.5 3.5 20.5 3.5 21 4.5" />
    {/* Antennae (longer, beaded) */}
    <path d="M14 4 L10 1" strokeDasharray="1 1.5" />
    <path d="M18 4 L22 1" strokeDasharray="1 1.5" />
    {/* Wings (folded) */}
    <path d="M12.5 11 C9 9 7 10 7 14" opacity="0.7" />
    <path d="M19.5 11 C23 9 25 10 25 14" opacity="0.7" />
    {/* Legs */}
    <path d="M13 11 L7 9" />
    <path d="M13 13 L7 13" />
    <path d="M19 11 L25 9" />
    <path d="M19 13 L25 13" />
    {/* Segmented abdomen */}
    <path d="M10.3 20 Q16 18.5 21.7 20" strokeDasharray="2 1" />
    <path d="M10.1 23 Q16 21.5 21.9 23" strokeDasharray="2 1" />
  </svg>
);

// ──────────────────────────────────────────
// SERVICE icons — same stroke style
// ──────────────────────────────────────────

export const CommercialPestIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Control Comercial"
  >
    {/* Building */}
    <rect x="4" y="10" width="24" height="19" rx="1" />
    {/* Roof / sign */}
    <path d="M2 10 L16 3 L30 10" />
    {/* Windows */}
    <rect x="7" y="14" width="4" height="4" rx="0.5" />
    <rect x="14" y="14" width="4" height="4" rx="0.5" />
    <rect x="21" y="14" width="4" height="4" rx="0.5" />
    {/* Door */}
    <rect x="13" y="22" width="6" height="7" rx="0.5" />
    {/* Shield / certification badge */}
    <path d="M22 20 L22 24 C22 26 24 27 24 27 C24 27 26 26 26 24 L26 20 L24 19 Z" />
    <path d="M23 23 L24 24 L26 22" />
  </svg>
);

export const SprayCanIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Fumigación"
  >
    {/* Can body */}
    <rect x="10" y="12" width="12" height="17" rx="3" />
    {/* Can top */}
    <path d="M12 12 L12 9 Q16 7 20 9 L20 12" />
    {/* Nozzle */}
    <path d="M20 10 L25 8" />
    <circle cx="26" cy="7.5" r="1.5" />
    {/* Spray mist */}
    <path d="M27 5 Q29 4 30 2" />
    <path d="M28 7 Q30 7 31 5" />
    <path d="M27 9 Q29 10 30 12" />
    {/* Label lines on can */}
    <line x1="12" y1="19" x2="20" y2="19" />
    <line x1="12" y1="22" x2="20" y2="22" />
    {/* Grip ridges */}
    <line x1="13" y1="15" x2="19" y2="15" />
  </svg>
);

export const ShieldPestIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Protección"
  >
    {/* Shield */}
    <path d="M16 3 L28 7 L28 16 C28 22 22 27 16 29 C10 27 4 22 4 16 L4 7 Z" />
    {/* Bug with X over it */}
    <circle cx="16" cy="16" r="4" />
    <path d="M13 13 L19 19" />
    <path d="M19 13 L13 19" />
    {/* small legs suggestion */}
    <path d="M12 15 L9 14" />
    <path d="M12 17 L9 18" />
    <path d="M20 15 L23 14" />
    <path d="M20 17 L23 18" />
  </svg>
);

export const WoodwormIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Termitas / Madera"
  >
    {/* Plank of wood */}
    <rect x="2" y="18" width="28" height="9" rx="1.5" />
    <line x1="10" y1="18" x2="10" y2="27" />
    <line x1="22" y1="18" x2="22" y2="27" />
    {/* Wood grain */}
    <path d="M3 21 Q6 20 9 21" />
    <path d="M3 24 Q6 23 9 24" />
    {/* Termite eating the wood */}
    <ellipse cx="16" cy="14" rx="4" ry="3" />
    <ellipse cx="16" cy="8" rx="2.5" ry="2" />
    {/* Mandibles */}
    <path d="M14 6.5 L12 5" />
    <path d="M18 6.5 L20 5" />
    {/* Antennae */}
    <path d="M14.5 6.5 L12 3.5" />
    <path d="M17.5 6.5 L20 3.5" />
    {/* Legs */}
    <path d="M12.5 13 L8 12" />
    <path d="M12.5 15 L8 16" />
    <path d="M19.5 13 L24 12" />
    <path d="M19.5 15 L24 16" />
    {/* Hole in wood */}
    <ellipse cx="16" cy="18" rx="2.5" ry="1" />
  </svg>
);

export const MouseTrapIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Control de Roedores"
  >
    {/* Rat silhouette */}
    <ellipse cx="16" cy="13" rx="7" ry="5.5" />
    {/* Head */}
    <circle cx="22" cy="11" r="3.5" />
    {/* Ear */}
    <ellipse cx="20.5" cy="8" rx="2" ry="2.2" />
    {/* Eye */}
    <circle cx="23" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
    {/* Nose */}
    <path d="M25 11.5 L27 12" />
    {/* Whiskers */}
    <path d="M25 10.5 L29 9.5" />
    <path d="M25 12.5 L29 13" />
    {/* Tail */}
    <path d="M9 15 C6 16 4 14.5 5 12 C6 9 8 10 9 13" />
    {/* Legs */}
    <path d="M13 17 L13 22" />
    <path d="M16 18 L16 22" />
    <path d="M19 17.5 L19 22" />
    {/* Warning X band */}
    <circle cx="16" cy="13" r="10" strokeDasharray="3 3" />
    <path d="M9 6 L23 20" />
    <path d="M23 6 L9 20" />
  </svg>
);

export const BedBugHotelIcon: React.FC<IconProps> = ({ size = 32, className = '', strokeWidth = 1.5 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Chinches Hotel"
  >
    {/* Bed frame */}
    <rect x="2" y="18" width="28" height="10" rx="2" />
    {/* Headboard */}
    <rect x="2" y="14" width="5" height="14" rx="1" />
    {/* Pillow */}
    <rect x="8" y="19" width="8" height="4" rx="2" />
    {/* Blanket fold */}
    <path d="M16 19 L28 19 L28 23 Q22 25 16 23 Z" />
    {/* Bed leg */}
    <line x1="4" y1="28" x2="4" y2="31" />
    <line x1="28" y1="28" x2="28" y2="31" />
    {/* Bug above bed — alarming */}
    <ellipse cx="22" cy="9" rx="4" ry="3.5" />
    <ellipse cx="22" cy="5.5" rx="2" ry="1.5" />
    {/* Bug antennae */}
    <path d="M21 4 L19 2" />
    <path d="M23 4 L25 2" />
    {/* Bug legs */}
    <path d="M18.5 8 L15 7" />
    <path d="M18.5 10 L15 11" />
    <path d="M25.5 8 L29 7" />
    <path d="M25.5 10 L29 11" />
  </svg>
);
