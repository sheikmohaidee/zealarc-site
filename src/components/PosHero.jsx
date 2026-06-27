import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

/* ── Hexagon point generator ──────────────────────────────── */
function hexPoints(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

/* ── Animated data particle ───────────────────────────────── */
function Particle({ pathId, dur = '6s', delay = '0s', size = 3 }) {
  return (
    <circle r={size} fill="#0071E3" opacity="0">
      <animateMotion dur={dur} repeatCount="indefinite" begin={delay}>
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;0.55;0.55;0" dur={dur} repeatCount="indefinite" begin={delay} />
      <animate attributeName="r" values={`${size * 0.5};${size};${size * 0.5}`} dur={dur} repeatCount="indefinite" begin={delay} />
    </circle>
  );
}

/* ── Large Ecosystem Illustration ─────────────────────────── */
function EcosystemIllustration() {
  const cx = 400, cy = 340;
  const orbitR = 220;

  const nodes = [
    {
      angle: -90,
      label: 'Queen',
      sub: 'Super Admin Platform',
      iconPath: 'M-12 8h24 M-12 8l3-16 5.5 7L0-12l5.5 11L11-8l3 16', // crown
      iconDot: { cx: 0, cy: -14, r: 1.8 },
    },
    {
      angle: 150,
      label: 'Hive',
      sub: 'Manage Branches with Ease',
      iconPath: 'M-8-8h7v7h-7z M1-8h7v7h-7z M-8 1h7v7h-7z M1 1h7v7h-7z', // grid
      iconDot: null,
    },
    {
      angle: 30,
      label: 'Nectar',
      sub: 'Run Operations Smarter',
      iconPath: 'M-9-9h18v18h-18z M-9-3h18 M-3-3v12', // POS screen
      iconDot: { cx: -6, cy: -6, r: 1.5 },
    },
  ];

  const nodePositions = nodes.map(n => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: cx + orbitR * Math.cos(rad), y: cy + orbitR * Math.sin(rad) };
  });

  return (
    <div className="relative w-full">
      <svg viewBox="0 0 800 700" className="w-full h-auto" aria-hidden="true">
        <defs>
          {/* Gradients */}
          <radialGradient id="pCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0071E3" stopOpacity="0.07" />
            <stop offset="60%" stopColor="#0071E3" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="pHexFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#F0F0F2" />
          </linearGradient>

          <linearGradient id="pNodeFill" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#F5F5F7" />
          </linearGradient>

          <linearGradient id="pIconBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071E3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0071E3" stopOpacity="0.14" />
          </linearGradient>

          {/* Filters */}
          <filter id="pCenterShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#000" floodOpacity="0.07" />
          </filter>

          <filter id="pNodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.08" />
          </filter>

          <filter id="pGlowSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Connection paths (curved quadratics) */}
          {nodePositions.map((node, i) => {
            const mx = (cx + node.x) / 2;
            const my = (cy + node.y) / 2;
            const perpX = -(node.y - cy) * 0.18;
            const perpY = (node.x - cx) * 0.18;
            return (
              <path
                key={`cdef-${i}`}
                id={`pConn${i}`}
                d={`M ${cx} ${cy} Q ${mx + perpX} ${my + perpY} ${node.x} ${node.y}`}
                fill="none"
              />
            );
          })}
        </defs>

        {/* ── Background honeycomb lattice ── */}
        {[
          [cx - 78, cy - 45], [cx + 78, cy - 45], [cx, cy + 52],
          [cx - 78, cy + 52], [cx + 78, cy + 52],
          [cx - 156, cy], [cx + 156, cy],
          [cx - 39, cy - 90], [cx + 39, cy - 90],
          [cx - 39, cy + 97], [cx + 39, cy + 97],
        ].map(([hx, hy], i) => (
          <polygon
            key={`bhex-${i}`}
            points={hexPoints(hx, hy, 46)}
            fill="none"
            stroke="#0071E3"
            strokeWidth="0.4"
            opacity="0.05"
          />
        ))}

        {/* ── Concentric pulse rings ── */}
        {[100, 150, 200, 250].map((r, i) => (
          <circle key={`pulse-${i}`} cx={cx} cy={cy} r={r} fill="none" stroke="#0071E3" strokeWidth="0.5" opacity="0">
            <animate attributeName="opacity" values="0;0.1;0" dur={`${5 + i * 1.2}s`} repeatCount="indefinite" begin={`${i * 1}s`} />
            <animate attributeName="r" values={`${r - 5};${r + 5};${r - 5}`} dur={`${5 + i * 1.2}s`} repeatCount="indefinite" begin={`${i * 1}s`} />
          </circle>
        ))}

        {/* ── Orbit ring (faint static) ── */}
        <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="#0071E3" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.08" />

        {/* ── Center glow ── */}
        <circle cx={cx} cy={cy} r="160" fill="url(#pCenterGlow)" />

        {/* ── Connection lines ── */}
        {nodePositions.map((node, i) => {
          const mx = (cx + node.x) / 2;
          const my = (cy + node.y) / 2;
          const perpX = -(node.y - cy) * 0.18;
          const perpY = (node.x - cx) * 0.18;
          return (
            <g key={`conn-${i}`}>
              {/* Glow line */}
              <path
                d={`M ${cx} ${cy} Q ${mx + perpX} ${my + perpY} ${node.x} ${node.y}`}
                fill="none"
                stroke="#0071E3"
                strokeWidth="3"
                opacity="0.04"
                filter="url(#pGlowSoft)"
              />
              {/* Main dashed line */}
              <path
                d={`M ${cx} ${cy} Q ${mx + perpX} ${my + perpY} ${node.x} ${node.y}`}
                fill="none"
                stroke="#0071E3"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                opacity="0.2"
              />
            </g>
          );
        })}

        {/* ── Animated particles on connections ── */}
        {nodePositions.map((_, i) => (
          <g key={`ptcl-${i}`}>
            <Particle pathId={`pConn${i}`} dur="6s" delay="0s" size={3} />
            <Particle pathId={`pConn${i}`} dur="6s" delay="2s" size={2.5} />
            <Particle pathId={`pConn${i}`} dur="6s" delay="4s" size={2} />
          </g>
        ))}

        {/* ── Central hexagonal platform ── */}
        <g filter="url(#pCenterShadow)">
          {/* Outer decorative ring */}
          <polygon points={hexPoints(cx, cy, 78)} fill="none" stroke="#0071E3" strokeWidth="0.6" opacity="0.1" />
          {/* Main hex */}
          <polygon points={hexPoints(cx, cy, 68)} fill="url(#pHexFill)" stroke="#E5E5E7" strokeWidth="1.2" />
          {/* Inner accent hex */}
          <polygon points={hexPoints(cx, cy, 54)} fill="none" stroke="#0071E3" strokeWidth="0.4" opacity="0.1" />
        </g>

        {/* Center content */}
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="2.5" className="fill-apple-accent" style={{ fontFamily: '"DM Sans", sans-serif' }}>POS</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="1.2" className="fill-apple-dark" style={{ fontFamily: '"DM Sans", sans-serif' }}>ECOSYSTEM</text>

        {/* ── Three application nodes ── */}
        {nodePositions.map((node, i) => {
          // Label offset for positioning text outside the hex
          const labelOffsetX = node.angle === -90 ? 0 : (node.angle === 150 ? 0 : 0);
          const labelY = node.angle === -90 ? node.y - 72 : node.y + 72;
          const subY = node.angle === -90 ? node.y - 56 : node.y + 88;

          return (
            <g key={`node-${i}`}>
              {/* Node shadow & hex */}
              <g filter="url(#pNodeShadow)">
                {/* Outer accent ring */}
                <polygon points={hexPoints(node.x, node.y, 62)} fill="none" stroke="#0071E3" strokeWidth="0.4" opacity="0.08" />
                {/* Main hex */}
                <polygon points={hexPoints(node.x, node.y, 52)} fill="url(#pNodeFill)" stroke="#E5E5E7" strokeWidth="1" />
              </g>

              {/* Icon background circle */}
              <circle cx={node.x} cy={node.y} r="18" fill="url(#pIconBg)" />

              {/* Icon */}
              <g transform={`translate(${node.x}, ${node.y})`} fill="none" stroke="#0071E3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={node.iconPath} />
                {node.iconDot && <circle cx={node.iconDot.cx} cy={node.iconDot.cy} r={node.iconDot.r} fill="#0071E3" stroke="none" />}
              </g>

              {/* Label */}
              <text x={node.x + labelOffsetX} y={labelY} textAnchor="middle" fontSize="13" fontWeight="700" className="fill-apple-dark" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {node.label}
              </text>
              <text x={node.x + labelOffsetX} y={subY} textAnchor="middle" fontSize="9.5" fontWeight="400" className="fill-apple-dark" opacity="0.45" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {node.sub}
              </text>
            </g>
          );
        })}

        {/* ── Decorative bee (subtle, integrated) ── */}
        <g transform={`translate(${cx + 135}, ${cy - 95})`} opacity="0.35">
          {/* Body */}
          <ellipse cx="0" cy="0" rx="9" ry="6" fill="#1D1D1F" opacity="0.5" />
          <ellipse cx="-4" cy="0" rx="4" ry="4.5" fill="#0071E3" opacity="0.12" />
          {/* Stripes */}
          <line x1="-1" y1="-5.5" x2="-1" y2="5.5" stroke="#F5F5F7" strokeWidth="0.9" opacity="0.3" />
          <line x1="2.5" y1="-5" x2="2.5" y2="5" stroke="#F5F5F7" strokeWidth="0.9" opacity="0.3" />
          {/* Wings */}
          <ellipse cx="-3" cy="-8" rx="7" ry="4" fill="#0071E3" opacity="0.08" transform="rotate(-10)" />
          <ellipse cx="4" cy="-8" rx="7" ry="4" fill="#0071E3" opacity="0.08" transform="rotate(10)" />
          {/* Gentle hover animation */}
          <animateTransform attributeName="transform" type="translate" values={`${cx + 135} ${cy - 95};${cx + 135} ${cy - 99};${cx + 135} ${cy - 95}`} dur="4s" repeatCount="indefinite" />
        </g>

        {/* ── Second small decorative bee ── */}
        <g transform={`translate(${cx - 160}, ${cy + 30})`} opacity="0.2">
          <ellipse cx="0" cy="0" rx="6" ry="4" fill="#1D1D1F" opacity="0.4" />
          <line x1="0" y1="-3.5" x2="0" y2="3.5" stroke="#F5F5F7" strokeWidth="0.6" opacity="0.3" />
          <ellipse cx="-1" cy="-5" rx="4.5" ry="2.5" fill="#0071E3" opacity="0.06" transform="rotate(-8)" />
          <ellipse cx="2" cy="-5" rx="4.5" ry="2.5" fill="#0071E3" opacity="0.06" transform="rotate(8)" />
        </g>

      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PosHero – exported hero section
   ═══════════════════════════════════════════════════════════ */
export default function PosHero() {
  return (
    <section className="pt-16 pb-8 md:pt-28 md:pb-12 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-apple-accent/[0.025] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-apple-accent/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* ── Left: Content (≈45%) ── */}
          <div className="lg:col-span-5 max-w-lg">
            <FadeIn>
              <span className="px-3 py-1 bg-apple-accent/10 text-apple-accent text-[11px] font-bold rounded-full uppercase tracking-widest border border-apple-accent/20 mb-6 inline-block">
                POS Ecosystem
              </span>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="text-[clamp(2.5rem,5.5vw,4rem)] font-bold text-apple-dark mb-5 leading-[1.1] tracking-tight-heading">
                Three Apps.<br />
                One <span className="text-apple-accent">Connected</span> Ecosystem.
              </h1>
            </FadeIn>

            <FadeIn delay={250}>
              <p className="text-[15px] text-apple-dark/55 font-light leading-relaxed mb-10 max-w-md">
                Hive, Nectar, and Queen work together as one connected platform to simplify daily operations, centralize management, and help businesses run more efficiently.
              </p>
            </FadeIn>

            <FadeIn delay={350}>
              <div className="flex flex-wrap gap-3">
                <a href="#hive" className="inline-flex items-center gap-2 bg-apple-accent text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-apple-accent/90 transition-colors duration-200 shadow-sm">
                  Explore the Ecosystem
                  <ArrowRight size={15} />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-apple-dark/10 text-apple-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-apple-gray transition-colors duration-200">
                  Book a Demo
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Ecosystem Illustration (≈55%) ── */}
          <div className="lg:col-span-7">
            <FadeIn delay={200}>
              <EcosystemIllustration />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-12 md:mt-20">
        <FadeIn delay={450}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/[0.04] rounded-2xl overflow-hidden border border-black/[0.04]">
            {[
              { title: 'Cloud Connected', desc: 'Real-time. Everywhere.', icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10a6 6 0 00-11.18-3A4.5 4.5 0 007.5 16H18a4 4 0 000-8z" />
                </svg>
              )},
              { title: 'Secure & Reliable', desc: 'Built to protect your business.', icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              )},
              { title: 'All in Sync', desc: 'One ecosystem. One flow.', icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" />
                  <circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" />
                  <line x1="9.5" y1="10.5" x2="6.5" y2="7.5" /><line x1="14.5" y1="10.5" x2="17.5" y2="7.5" />
                  <line x1="9.5" y1="13.5" x2="6.5" y2="16.5" /><line x1="14.5" y1="13.5" x2="17.5" y2="16.5" />
                </svg>
              )},
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white px-6 py-5">
                <div className="w-9 h-9 rounded-xl bg-apple-accent/[0.07] text-apple-accent flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-apple-dark">{item.title}</h4>
                  <p className="text-xs text-apple-dark/50 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
