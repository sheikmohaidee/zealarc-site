import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Shield, Zap, Sparkles, TrendingUp, Cpu, 
  Smartphone, Globe, Database, ToggleLeft, Layers, 
  Users, ShoppingBag, Utensils, Store, Building2, CheckCircle2,
  Share2, MessageSquare, CreditCard, Printer, FileText, Truck, Heart
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProductCard from '../components/ProductCard';
import Accordion from '../components/Accordion';

function StatueOfLiberty() {
  return (
    <svg viewBox="0 0 40 60" className="w-10 h-15 text-apple-dark/55 stroke-1 fill-none">
      {/* Pedestal */}
      <path d="M6 58h28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 54h24v4H8z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
      <path d="M11 44h18v10H11z" stroke="currentColor" strokeWidth="1" />
      <path d="M12 44l1-6h14l1 6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
      <path d="M14 38V30c0-2 1-3 3-3h6c2 0 3 1 3 3v8" stroke="currentColor" strokeWidth="1" />
      {/* Body / Robes */}
      <path d="M15 32c-1-4-1-8-1-10c0-3 2-4 4-4h4c2 0 4 1 4 4c0 2 0 6-1 10" stroke="currentColor" strokeWidth="1" />
      <path d="M17 18c-1.5 0-2.5 1-2.5 2.5v1.5h5v-1.5c0-1.5-1-2.5-2.5-2.5z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
      {/* Drapes */}
      <path d="M15 22c1 3 1 7 2 10M25 22c-1 3-1 7-2 10M20 18v14" stroke="currentColor" strokeWidth="0.8" />
      {/* Crown Rays */}
      <path d="M15 17.5l-3.5-2M16 16.5l-2-3M18.5 15.5v-4M21 16.5l2-3M22 17.5l3.5-2" stroke="currentColor" strokeWidth="0.8" />
      {/* Left Arm & Tablet */}
      <path d="M14 22c-1.5 1-3 2-3 4.5v3.5l3.5 1" stroke="currentColor" strokeWidth="1" />
      <path d="M11 25.5l2-1v5.5l-2 1z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
      {/* Right Arm & Torch */}
      <path d="M22.5 18c1-3 2.5-7 3.5-11h2.5l-2.5 5.5l-1.5 5.5" stroke="currentColor" strokeWidth="1" />
      <path d="M27.5 7h4v2h-4z" stroke="currentColor" strokeWidth="1" />
      <path d="M29.5 7c0-2 1.5-3.5 2-3.5s1 1 1 2.5c0 1.5-1.5 2-2.5 2.5l-.5-1.5z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function BurjKhalifa() {
  return (
    <svg viewBox="0 0 40 60" className="w-10 h-15 text-apple-dark/55 stroke-1 fill-none">
      {/* Central Core & Spire */}
      <path d="M20 2v56" stroke="currentColor" strokeWidth="1.2" />
      <path d="M19.2 8h1.6" stroke="currentColor" strokeWidth="1" />
      
      {/* Right Stepped Wings */}
      <path d="M21.5 12v46" stroke="currentColor" strokeWidth="1" />
      <path d="M23 20v38" stroke="currentColor" strokeWidth="1" />
      <path d="M25 28v30" stroke="currentColor" strokeWidth="1" />
      <path d="M27 38v20" stroke="currentColor" strokeWidth="1" />
      <path d="M29 48v10" stroke="currentColor" strokeWidth="1" />

      {/* Left Stepped Wings (Asymmetrical height offsets for spiral architecture) */}
      <path d="M18.5 16v42" stroke="currentColor" strokeWidth="1" />
      <path d="M17 24v34" stroke="currentColor" strokeWidth="1" />
      <path d="M15 32v26" stroke="currentColor" strokeWidth="1" />
      <path d="M13 42v16" stroke="currentColor" strokeWidth="1" />
      <path d="M11 50v8" stroke="currentColor" strokeWidth="1" />

      {/* Horizontal Floor Cladding Lines */}
      <path d="M18.5 20h3M17 28h6M15 36h10M13 44h14M11 52h18" stroke="currentColor" strokeWidth="0.8" />
      <path d="M18.5 30h3M17 40h6M15 48h10" stroke="currentColor" strokeWidth="0.8" />
      
      {/* Foundation Base */}
      <path d="M6 58h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TajMahal() {
  return (
    <svg viewBox="0 0 60 50" className="w-15 h-12 text-apple-dark/55 stroke-1 fill-none">
      {/* Base Platform */}
      <path d="M2 46h56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 43h52" stroke="currentColor" strokeWidth="1.0" />
      
      {/* Symmetrical Left & Right Minarets */}
      <path d="M7 14v29M53 14v29" stroke="currentColor" strokeWidth="1.2" />
      {/* Minaret Balconies */}
      <path d="M6 14h3M51 14h3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 24h3M51 24h3" stroke="currentColor" strokeWidth="1.0" />
      <path d="M6 34h3M51 34h3" stroke="currentColor" strokeWidth="1.0" />
      <path d="M5 43h5M50 43h5" stroke="currentColor" strokeWidth="1.5" />

      {/* Main Building Structure */}
      <path d="M16 26h28v17H16z" stroke="currentColor" strokeWidth="1.2" />
      
      {/* Central Portal (Pishtaq) */}
      <path d="M21 26h18v17H21z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.02" />
      <path d="M24 43V34c0-3 2.5-5 6-5s6 2 6 5v9" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
      
      {/* Main Onion Dome */}
      <path d="M24.5 22c0-5 2-8 5.5-11.5c3.5 3.5 5.5 6.5 5.5 11.5c0 3-2 5-5.5 5s-5.5-2-5.5-5z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />
      {/* Dome Finial */}
      <path d="M30 10.5V6.5" stroke="currentColor" strokeWidth="1" />
      <path d="M29.5 6.5h1" stroke="currentColor" strokeWidth="1" />

      {/* Side Chatris (Small side domes) */}
      <path d="M16.5 26c0-3.5 1.5-5 3.5-5s3.5 1.5 3.5 5" stroke="currentColor" strokeWidth="1" />
      <path d="M36.5 26c0-3.5 1.5-5 3.5-5s3.5 1.5 3.5 5" stroke="currentColor" strokeWidth="1" />
      <path d="M19 21v-2M39 21v-2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function SydneyOperaHouse() {
  return (
    <svg viewBox="0 0 60 45" className="w-15 h-11 text-apple-dark/55 stroke-1 fill-none">
      {/* Base structure / plinth */}
      <path d="M4 36h52" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 39h48" stroke="currentColor" strokeWidth="1.0" />
      
      {/* Shell 1 (Left Major Sail) */}
      <path d="M12 36c4-8 10-18 16-20c1 5-1 12-8 20" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
      <path d="M19 25c-2 3-3.5 7-4.5 11" stroke="currentColor" strokeWidth="0.8" />

      {/* Shell 2 (Center Major Sail, overlaps Shell 1) */}
      <path d="M22 36c5-9 12-22 18-22c1 6-1 14-9 22" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
      <path d="M30 22c-2.5 4-4.5 9-5.5 14" stroke="currentColor" strokeWidth="0.8" />

      {/* Shell 3 (Right Medium Sail) */}
      <path d="M34 36c3-6 8-15 12-15c1 4-1 10-6 15" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
      <path d="M39 26c-1.5 3-2.5 6-3 10" stroke="currentColor" strokeWidth="0.8" />

      {/* Shell 4 (Far Right Small Sail) */}
      <path d="M43 36c2-4 5-9 8-9c1 3-1 6-4 9" stroke="currentColor" strokeWidth="1.2" />

      {/* Water waves below base */}
      <path d="M2 42h56" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 42c3-.5 6 .5 9 0s6-.5 9 0s6 .5 9 0s6-.5 9 0s6 .5 9 0" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function HeroOverlayCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Coordinates mapping relative to the image container dimensions (percentage)
    const hubs = {
      center: { x: 0.48, y: 0.62 },
      usa: { x: 0.16, y: 0.38 },
      uae: { x: 0.84, y: 0.24 },
      india: { x: 0.28, y: 0.74 },
      australia: { x: 0.68, y: 0.78 }
    };

    const leftContinent = [
      { x: 0.06, y: 0.16 },
      { x: 0.24, y: 0.12 },
      { x: 0.29, y: 0.28 },
      { x: 0.22, y: 0.44 },
      { x: 0.32, y: 0.52 },
      { x: 0.26, y: 0.68 },
      { x: 0.23, y: 0.86 },
      { x: 0.09, y: 0.80 },
      { x: 0.06, y: 0.48 }
    ];

    const rightContinent = [
      { x: 0.48, y: 0.35 },
      { x: 0.68, y: 0.22 },
      { x: 0.92, y: 0.16 },
      { x: 0.96, y: 0.34 },
      { x: 0.76, y: 0.48 },
      { x: 0.92, y: 0.68 },
      { x: 0.87, y: 0.88 },
      { x: 0.76, y: 0.82 },
      { x: 0.64, y: 0.74 },
      { x: 0.50, y: 0.54 }
    ];

    const centerHubIsland = [
      { x: 0.36, y: 0.62 },
      { x: 0.42, y: 0.55 },
      { x: 0.48, y: 0.52 },
      { x: 0.54, y: 0.55 },
      { x: 0.60, y: 0.62 },
      { x: 0.54, y: 0.69 },
      { x: 0.48, y: 0.72 },
      { x: 0.42, y: 0.69 }
    ];

    const bgParticles = [];
    const numBgParticles = 18;
    for (let i = 0; i < numBgParticles; i++) {
      bgParticles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0002,
        vy: -Math.random() * 0.0004 - 0.0001,
        r: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.18 + 0.04
      });
    }

    const particles = [
      { startKey: 'center', endKey: 'usa', progress: 0.0, speed: 0.0018 },
      { startKey: 'center', endKey: 'usa', progress: 0.5, speed: 0.0018 },
      { startKey: 'center', endKey: 'uae', progress: 0.2, speed: 0.0022 },
      { startKey: 'center', endKey: 'uae', progress: 0.7, speed: 0.0022 },
      { startKey: 'center', endKey: 'india', progress: 0.1, speed: 0.0020 },
      { startKey: 'center', endKey: 'india', progress: 0.6, speed: 0.0020 },
      { startKey: 'center', endKey: 'australia', progress: 0.3, speed: 0.0021 },
      { startKey: 'center', endKey: 'australia', progress: 0.8, speed: 0.0021 }
    ];

    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      const vpx = width * 0.5;
      const vpy = height * 0.15; // horizon/vanishing point

      const getPos = (hub) => ({
        x: hub.x * width,
        y: hub.y * height
      });

      const center = getPos(hubs.center);
      const destinations = [
        getPos(hubs.usa),
        getPos(hubs.uae),
        getPos(hubs.india),
        getPos(hubs.australia)
      ];

      // 1. Draw soft radial blue depth gradient
      const radGrad = ctx.createRadialGradient(center.x, center.y, 10, center.x, center.y, width * 0.45);
      radGrad.addColorStop(0, 'rgba(0, 102, 204, 0.055)');
      radGrad.addColorStop(0.3, 'rgba(0, 102, 204, 0.015)');
      radGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw subtle keynote spotlight beam
      const beamGrad = ctx.createLinearGradient(vpx, 0, center.x, center.y);
      beamGrad.addColorStop(0, 'rgba(10, 132, 255, 0.018)');
      beamGrad.addColorStop(0.5, 'rgba(10, 132, 255, 0.008)');
      beamGrad.addColorStop(1, 'rgba(10, 132, 255, 0)');
      ctx.fillStyle = beamGrad;
      ctx.beginPath();
      ctx.moveTo(vpx - 50, 0);
      ctx.lineTo(vpx + 50, 0);
      ctx.lineTo(center.x + 100, center.y);
      ctx.lineTo(center.x - 100, center.y);
      ctx.closePath();
      ctx.fill();

      // 3. Draw static thin concentric ecosystem rings in perspective
      const rings = [0.08, 0.16, 0.24, 0.33, 0.43, 0.55];
      ctx.strokeStyle = 'rgba(0, 102, 204, 0.045)';
      ctx.lineWidth = 0.8;
      rings.forEach((r) => {
        const radiusX = r * width;
        const radiusY = radiusX * 0.35;
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
      });

      // 4. Draw background perspective grid
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.015)';
      ctx.lineWidth = 1.0;

      const numRadial = 18;
      for (let i = 0; i <= numRadial; i++) {
        const angle = Math.PI * (0.13 + (i / numRadial) * 0.74);
        ctx.beginPath();
        ctx.moveTo(vpx, vpy);
        ctx.lineTo(vpx + Math.cos(angle) * width * 1.5, vpy + Math.sin(angle) * height * 1.5);
        ctx.stroke();
      }

      const numHorizontal = 12;
      for (let i = 0; i < numHorizontal; i++) {
        const progress = i / numHorizontal;
        const y = vpy + Math.pow(progress, 1.8) * (height - vpy);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 5. Draw sparse background particles
      bgParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = 1.0;
        if (p.x > 1.0) p.x = 0;
        if (p.y < 0) p.y = 1.0;
        if (p.y > 1.0) p.y = 0;

        ctx.fillStyle = `rgba(10, 132, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.r, 0, 2 * Math.PI);
        ctx.fill();
      });

      // 6. Draw Embossed Clay Continents
      const drawEmbossedPath = (points) => {
        if (points.length < 3) return;

        const pixelPoints = points.map(p => ({
          x: p.x * width,
          y: p.y * height
        }));

        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.06)';
        ctx.shadowBlur = 16;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 8;
        ctx.fillStyle = '#f3f3f7';
        
        ctx.beginPath();
        ctx.moveTo(pixelPoints[0].x, pixelPoints[0].y);
        for (let i = 0; i < pixelPoints.length; i++) {
          const xc = (pixelPoints[i].x + pixelPoints[(i + 1) % pixelPoints.length].x) / 2;
          const yc = (pixelPoints[i].y + pixelPoints[(i + 1) % pixelPoints.length].y) / 2;
          ctx.quadraticCurveTo(pixelPoints[i].x, pixelPoints[i].y, xc, yc);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#fcfcfd');
        grad.addColorStop(1, '#f3f3f6');
        ctx.fillStyle = grad;
        ctx.fill();

        const segments = [];
        const numSubdivisions = 8;
        for (let i = 0; i < pixelPoints.length; i++) {
          const p1 = pixelPoints[i];
          const p2 = pixelPoints[(i + 1) % pixelPoints.length];
          const p0 = pixelPoints[i === 0 ? pixelPoints.length - 1 : i - 1];
          
          const xc1 = (p0.x + p1.x) / 2;
          const yc1 = (p0.y + p1.y) / 2;
          const xc2 = (p1.x + p2.x) / 2;
          const yc2 = (p1.y + p2.y) / 2;

          for (let t = 0; t <= numSubdivisions; t++) {
            const ratio = t / numSubdivisions;
            const x = (1 - ratio) * (1 - ratio) * xc1 + 2 * (1 - ratio) * ratio * p1.x + ratio * ratio * xc2;
            const y = (1 - ratio) * (1 - ratio) * yc1 + 2 * (1 - ratio) * ratio * p1.y + ratio * ratio * yc2;
            segments.push({ x, y });
          }
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        let isDrawing = false;
        for (let i = 0; i < segments.length; i++) {
          const p1 = segments[i];
          const p2 = segments[(i + 1) % segments.length];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          
          if (dx < 0 || dy < 0) {
            if (!isDrawing) {
              ctx.moveTo(p1.x, p1.y);
              isDrawing = true;
            }
            ctx.lineTo(p2.x, p2.y);
          } else {
            if (isDrawing) {
              ctx.stroke();
              ctx.beginPath();
              isDrawing = false;
            }
          }
        }
        if (isDrawing) ctx.stroke();

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.055)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        isDrawing = false;
        for (let i = 0; i < segments.length; i++) {
          const p1 = segments[i];
          const p2 = segments[(i + 1) % segments.length];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          
          if (dx >= 0 && dy >= 0) {
            if (!isDrawing) {
              ctx.moveTo(p1.x, p1.y);
              isDrawing = true;
            }
            ctx.lineTo(p2.x, p2.y);
          } else {
            if (isDrawing) {
              ctx.stroke();
              ctx.beginPath();
              isDrawing = false;
            }
          }
        }
        if (isDrawing) ctx.stroke();
      };

      drawEmbossedPath(leftContinent);
      drawEmbossedPath(rightContinent);
      drawEmbossedPath(centerHubIsland);

      // 7. Draw Atmospheric horizon fog overlay
      const fogGrad = ctx.createLinearGradient(0, vpy, 0, vpy + 80);
      fogGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      fogGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, vpy - 20, width, 100);

      // 8. Draw expanding ripples from the cylinder hub
      const rippleTime = (Date.now() / 2500) % 1.0;
      const rippleMaxX = width * 0.42;
      for (let r = 1; r <= 3; r++) {
        const progress = (rippleTime + (r - 1) / 3) % 1.0;
        const radiusX = progress * rippleMaxX;
        const radiusY = radiusX * 0.35;
        const opacity = (1.0 - progress) * 0.18;

        ctx.strokeStyle = `rgba(0, 102, 204, ${opacity})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // 9. Draw elegant curved Bezier arcs
      destinations.forEach((dest) => {
        const mx = (center.x + dest.x) / 2;
        const my = (center.y + dest.y) / 2;
        const ctrlX = mx;
        const ctrlY = my - height * 0.12;

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.quadraticCurveTo(ctrlX, ctrlY, dest.x, dest.y);
        ctx.lineWidth = 4.0;
        ctx.strokeStyle = 'rgba(0, 102, 204, 0.05)';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.quadraticCurveTo(ctrlX, ctrlY, dest.x, dest.y);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = 'rgba(0, 102, 204, 0.28)';
        ctx.stroke();
      });

      // 10. Animate flowing particles
      particles.forEach((part) => {
        part.progress += part.speed;
        if (part.progress > 1.0) part.progress = 0.0;

        const start = getPos(hubs[part.startKey]);
        const end = getPos(hubs[part.endKey]);

        const mx = (start.x + end.x) / 2;
        const my = (start.y + end.y) / 2;
        const ctrlX = mx;
        const ctrlY = my - height * 0.12;

        const t = part.progress;
        const fade = Math.sin(t * Math.PI);

        const px = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * ctrlX + t * t * end.x;
        const py = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * ctrlY + t * t * end.y;

        ctx.fillStyle = `rgba(10, 132, 255, ${0.75 * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = `rgba(10, 132, 255, ${0.1 * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, 2 * Math.PI);
        ctx.fill();

        const t1 = Math.max(0, t - 0.025);
        const px1 = (1 - t1) * (1 - t1) * start.x + 2 * (1 - t1) * t1 * ctrlX + t1 * t1 * end.x;
        const py1 = (1 - t1) * (1 - t1) * start.y + 2 * (1 - t1) * t1 * ctrlY + t1 * t1 * end.y;
        ctx.fillStyle = `rgba(10, 132, 255, ${0.35 * fade})`;
        ctx.beginPath();
        ctx.arc(px1, py1, 1.4, 0, 2 * Math.PI);
        ctx.fill();

        const t2 = Math.max(0, t - 0.05);
        const px2 = (1 - t2) * (1 - t2) * start.x + 2 * (1 - t2) * t2 * ctrlX + t2 * t2 * end.x;
        const py2 = (1 - t2) * (1 - t2) * start.y + 2 * (1 - t2) * t2 * ctrlY + t2 * t2 * end.y;
        ctx.fillStyle = `rgba(10, 132, 255, ${0.12 * fade})`;
        ctx.beginPath();
        ctx.arc(px2, py2, 1.0, 0, 2 * Math.PI);
        ctx.fill();
      });

      // 11. Draw pulsing rings at connection nodes
      const hubKeys = Object.keys(hubs);
      hubKeys.forEach((key, idx) => {
        const pos = getPos(hubs[key]);
        const timeOffset = idx * 0.2;
        
        const t = (Date.now() / 1800 + timeOffset) % 1.0;
        const maxRadius = 15;
        const minRadius = 3.5;
        const radius = minRadius + t * (maxRadius - minRadius);
        const opacity = (1.0 - t) * 0.35;

        ctx.strokeStyle = `rgba(0, 102, 204, ${opacity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, radius, radius * 0.35, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.fillStyle = 'rgba(0, 102, 204, 0.5)';
        ctx.beginPath();
        ctx.ellipse(pos.x, pos.y, 2, 0.7, 0, 0, 2 * Math.PI);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none w-full h-full block z-0"
    />
  );
}


export default function Home() {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const navigate = useNavigate();
  const [customIndustry, setCustomIndustry] = useState('');

  const handleIndustrySubmit = (e) => {
    e.preventDefault();
    if (customIndustry.trim()) {
      navigate(`/contact?industry=${encodeURIComponent(customIndustry.trim())}`);
    } else {
      navigate('/contact');
    }
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let targetX = 0;
    let targetY = 0;
    let targetRotateX = 14;
    let targetRotateY = -8;
    let currentX = 0;
    let currentY = 0;
    let currentRotateX = 14;
    let currentRotateY = -8;
    let animationFrameId;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalized coordinates from -0.5 to 0.5
      const relX = (x / rect.width) - 0.5;
      const relY = (y / rect.height) - 0.5;
      
      // Max translation shift: 16px
      targetX = relX * 32;
      targetY = relY * 32;
      // Max rotation tilt: 6 degrees offset from resting 3D tilt
      targetRotateX = 14 - relY * 10;
      targetRotateY = -8 + relX * 10;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      targetRotateX = 14;
      targetRotateY = -8;
    };

    const update = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    update();

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stats = [
    { label: 'Bills Processed Daily', value: '5,000+' },
    { label: 'Support Availability', value: '24/7' },
    { label: 'Business Solutions', value: '5+' },
    { label: 'Years in Business', value: '6+' }
  ];

  const services = [
    {
      title: 'Consulting',
      description: 'We help you figure out the right tools for your business and guide you through setting them up.',
      icon: Cpu,
      link: '/solutions#consulting'
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications designed around how your business actually works.',
      icon: Globe,
      link: '/solutions#web-apps'
    },
    {
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps that feel polished and work reliably.',
      icon: Smartphone,
      link: '/solutions#mobile-apps'
    },
    {
      title: 'POS Solutions',
      description: 'Billing and management tools for restaurants, cafes, retail stores, and supermarkets — fast, reliable, and easy to use.',
      icon: Store,
      link: '/solutions#pos-solutions'
    },
    {
      title: 'Distribution Management Solutions',
      description: 'Tools that connect your warehouse, sales teams, and vendors so everyone stays in sync.',
      icon: Truck,
      link: '/solutions#dms-solutions'
    },
    {
      title: 'Bayt-Al-Mal (صدقة جارية)',
      description: 'A community charity platform to help organizations manage donations and charitable activities with transparency.',
      icon: Heart,
      link: '/products/bayt-al-mal'
    }
  ];

  const industries = [
    { name: 'Restaurants & Cafes', description: 'Table management, split payments, and instant QR ordering.', icon: Utensils },
    { name: 'Retail Stores', description: 'Real-time inventory levels, barcode scanning, and multi-user access.', icon: ShoppingBag },
    { name: 'Supermarkets', description: 'High-speed billing, barcode queues, and integrated card payments.', icon: Store },
    { name: 'Small Businesses', description: 'SaaS ecosystem designed to simplify daily accounting and billing.', icon: Layers },
    { name: 'Enterprises', description: 'Custom ERP and POS integration with unified business operations.', icon: Building2 }
  ];

  const benefits = [
    { title: 'Faster Billing', description: 'Check out customers in seconds with quick search, keyboard shortcuts, and a clean interface.' },
    { title: 'Inventory Control', description: 'Track stock levels in real time and get alerts when items are running low.' },
    { title: 'Analytics', description: 'Clear financial reports, sales trends, and item-level breakdowns — updated live.' },
    { title: 'QR Ordering', description: 'Customers scan a QR code at their table to order directly — less waiting, fewer mistakes.' },
    { title: 'Multi-user Access', description: 'Separate roles for cashiers, managers, and admins so everyone sees only what they need.' },
    { title: 'Cloud Backup', description: 'Your data is securely hosted in the cloud, giving you real-time visibility and synchronization across all your business locations.' }
  ];

  const integrations = [
    { name: 'Google Pay', logo: './assets/technology-partners/Google-Pay-logo.png', desc: 'UPI transactions' },
    { name: 'PhonePe', logo: './assets/technology-partners/PhonePe-Logo.png', desc: 'Instant UPI sync' },
    { name: 'Paytm', logo: './assets/technology-partners/paytm.png', desc: 'Secure wallet payments' },
    { name: 'Stripe', logo: './assets/technology-partners/Stripe-Emblem.png', desc: 'Online card processing' },
    { name: 'Swiggy', logo: './assets/technology-partners/Swiggy-logo.png', desc: 'Direct order routing' },
    { name: 'Google Cloud', logo: './assets/technology-partners/Google-Cloud-Logo.png', desc: 'Secure cloud hosting' }
  ];


  const faqItems = [
    {
      question: "What products are included in the Zealarc ecosystem?",
      answer: "The Zealarc ecosystem consists of Nectar (a smart point-of-sale platform), Hive (a tenant provisioning platform), Queen (a super admin console), and BeezDMS (a distribution management system). They are designed to connect seamlessly for automated data synchronization."
    },
    {
      question: "Is Nectar POS cloud-based?",
      answer: "Yes. Nectar is fully cloud-based. This architecture ensures that all your branches, inventory levels, and transaction logs are synchronized in real-time, providing you with an accurate, up-to-the-second view of your entire business."
    },
    {
      question: "What hardware is compatible with Zealarc POS solutions?",
      answer: "Our systems are built on open web and native Android/Windows architectures, meaning they run on almost all standard hardware including thermal printers, barcode scanners, cash drawers, Android tablets, iPads, and standard desktop computers."
    },
    {
      question: "How long does a typical custom software implementation take?",
      answer: "Depending on the scope and complexity, a standard consulting and development deployment takes anywhere from 4 to 12 weeks. We follow a modular, milestone-driven approach to ensure quick releases and iterations."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-b from-white via-[#f8f8fb] to-[#eff0f5] border-b border-black/[0.03] py-8 md:py-12"
      >
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: rotateX(15deg) rotateY(-18deg) rotateZ(3deg) translateZ(60px) translateY(0); }
            50% { transform: rotateX(15deg) rotateY(-18deg) rotateZ(3deg) translateZ(60px) translateY(-12px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
            transform-style: preserve-3d;
          }
        `}</style>

        {/* Ambient Blue Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_62%,rgba(0,102,204,0.07),transparent_55%)] pointer-events-none z-0" />

        {/* Atmospheric Fog Overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

        {/* Full-Screen Visual Environment (Background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}>
          {/* Inner wrapper applying mouse parallax */}
          <div 
            ref={parallaxRef}
            className="relative w-full h-full transition-transform duration-300 ease-out"
            style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
          >
            {/* Canvas Overlay for Grid, Continental Outlines & Flow Arcs */}
            <HeroOverlayCanvas />

            {/* USA Marker */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '16%', top: '38%', transform: 'translate3d(-50%, -50%, 25px)', transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center gap-1" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative w-28 h-18 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  {/* 3D double shadow pedestal base */}
                  <div className="absolute bottom-0 w-28 h-9 rounded-full bg-black/[0.03] blur-[1px] transform rotateX(60deg) z-0" />
                  <div className="absolute bottom-0.5 w-26 h-8 rounded-full bg-gradient-to-b from-[#e5e5ea] to-[#f5f5f7] border border-black/[0.06] flex items-center justify-center transform rotateX(60deg) z-5" />
                  <div className="absolute bottom-1 w-24 h-7 rounded-full bg-gradient-to-b from-white to-[#f5f5f7] border border-black/[0.04] shadow-sm flex items-center justify-center transform rotateX(60deg) z-10">
                    <div className="w-18 h-5 rounded-full bg-white border border-black/[0.02] shadow-inner" />
                  </div>
                  {/* Soft sculpture shadow */}
                  <div className="absolute bottom-2.5 w-10 h-3 rounded-full bg-black/10 blur-[2px] z-15" />
                  {/* Landmark Miniature Model */}
                  <div className="absolute bottom-2.5 z-20 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)] pointer-events-auto cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                    <StatueOfLiberty />
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-black/[0.04] rounded-full px-3.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[10px] font-bold text-apple-dark/60 flex items-center gap-1.5 tracking-wider uppercase mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-accent animate-pulse"></span>
                  USA
                </div>
              </div>
            </div>

            {/* UAE Marker */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '84%', top: '24%', transform: 'translate3d(-50%, -50%, 25px)', transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center gap-1" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative w-28 h-18 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute bottom-0 w-28 h-9 rounded-full bg-black/[0.03] blur-[1px] transform rotateX(60deg) z-0" />
                  <div className="absolute bottom-0.5 w-26 h-8 rounded-full bg-gradient-to-b from-[#e5e5ea] to-[#f5f5f7] border border-black/[0.06] flex items-center justify-center transform rotateX(60deg) z-5" />
                  <div className="absolute bottom-1 w-24 h-7 rounded-full bg-gradient-to-b from-white to-[#f5f5f7] border border-black/[0.04] shadow-sm flex items-center justify-center transform rotateX(60deg) z-10">
                    <div className="w-18 h-5 rounded-full bg-white border border-black/[0.02] shadow-inner" />
                  </div>
                  {/* Soft sculpture shadow */}
                  <div className="absolute bottom-2.5 w-10 h-3 rounded-full bg-black/10 blur-[2px] z-15" />
                  {/* Landmark Miniature Model */}
                  <div className="absolute bottom-2.5 z-20 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)] pointer-events-auto cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                    <BurjKhalifa />
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-black/[0.04] rounded-full px-3.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[10px] font-bold text-apple-dark/60 flex items-center gap-1.5 tracking-wider uppercase mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-accent animate-pulse"></span>
                  UAE
                </div>
              </div>
            </div>

            {/* INDIA Marker */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '28%', top: '74%', transform: 'translate3d(-50%, -50%, 25px)', transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center gap-1" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative w-32 h-18 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute bottom-0 w-32 h-10 rounded-full bg-black/[0.03] blur-[1px] transform rotateX(60deg) z-0" />
                  <div className="absolute bottom-0.5 w-30 h-9 rounded-full bg-gradient-to-b from-[#e5e5ea] to-[#f5f5f7] border border-black/[0.06] flex items-center justify-center transform rotateX(60deg) z-5" />
                  <div className="absolute bottom-1 w-28 h-8 rounded-full bg-gradient-to-b from-white to-[#f5f5f7] border border-black/[0.04] shadow-sm flex items-center justify-center transform rotateX(60deg) z-10">
                    <div className="w-22 h-6 rounded-full bg-white border border-black/[0.02] shadow-inner" />
                  </div>
                  {/* Soft sculpture shadow */}
                  <div className="absolute bottom-1.5 w-14 h-4 rounded-full bg-black/10 blur-[2px] z-15" />
                  {/* Landmark Miniature Model */}
                  <div className="absolute bottom-1.5 z-20 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)] pointer-events-auto cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                    <TajMahal />
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-black/[0.04] rounded-full px-3.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[10px] font-bold text-apple-dark/60 flex items-center gap-1.5 tracking-wider uppercase mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-accent animate-pulse"></span>
                  India
                </div>
              </div>
            </div>

            {/* AUSTRALIA Marker */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '68%', top: '78%', transform: 'translate3d(-50%, -50%, 25px)', transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center gap-1" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative w-32 h-18 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute bottom-0 w-32 h-10 rounded-full bg-black/[0.03] blur-[1px] transform rotateX(60deg) z-0" />
                  <div className="absolute bottom-0.5 w-30 h-9 rounded-full bg-gradient-to-b from-[#e5e5ea] to-[#f5f5f7] border border-black/[0.06] flex items-center justify-center transform rotateX(60deg) z-5" />
                  <div className="absolute bottom-1 w-28 h-8 rounded-full bg-gradient-to-b from-white to-[#f5f5f7] border border-black/[0.04] shadow-sm flex items-center justify-center transform rotateX(60deg) z-10">
                    <div className="w-22 h-6 rounded-full bg-white border border-black/[0.02] shadow-inner" />
                  </div>
                  {/* Soft sculpture shadow */}
                  <div className="absolute bottom-2.5 w-14 h-4 rounded-full bg-black/10 blur-[2px] z-15" />
                  {/* Landmark Miniature Model */}
                  <div className="absolute bottom-2.5 z-20 flex items-center justify-center filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)] pointer-events-auto cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                    <SydneyOperaHouse />
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-black/[0.04] rounded-full px-3.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-[10px] font-bold text-apple-dark/60 flex items-center gap-1.5 tracking-wider uppercase mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-accent animate-pulse"></span>
                  Australia
                </div>
              </div>
            </div>

            {/* Center Hub Pedestal */}
            <div 
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ left: '48%', top: '62%', transform: 'translate3d(-50%, -50%, 40px)', transformStyle: 'preserve-3d' }}
            >
              <div className="relative flex flex-col items-center">
                {/* Blue A Chevron Mark */}
                <div className="relative z-30 mb-0.5">
                  <svg viewBox="0 0 36 36" className="w-11 h-11 drop-shadow-[0_4px_16px_rgba(10,132,255,0.35)]">
                    <path d="M18 6L9 28h5l4-9 4 9h5L18 6z" fill="#0A84FF" />
                  </svg>
                </div>
                {/* Multi-tier Platform */}
                <div className="relative w-48 h-24 flex flex-col items-center">
                  {/* Pulsing glow ring */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-44 h-14 rounded-full bg-apple-accent/4 border border-apple-accent/15 animate-ping opacity-40 z-0" />
                  {/* Top tier */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-9 rounded-full bg-gradient-to-b from-white to-[#f0f0f5] border border-black/[0.05] shadow-sm z-20 flex items-center justify-center">
                    <div className="w-16 h-5 rounded-full bg-apple-accent/5 border border-apple-accent/10 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-apple-accent animate-pulse shadow-[0_0_8px_rgba(10,132,255,0.5)]" />
                    </div>
                  </div>
                  {/* Middle tier */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-10 rounded-full bg-gradient-to-b from-[#ededf2] to-[#e4e4e9] border border-black/[0.06] shadow-md z-15" />
                  {/* Bottom tier */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-44 h-11 rounded-full bg-gradient-to-b from-[#e0e0e5] to-[#d5d5da] border border-black/[0.07] shadow-lg z-10" />
                  {/* Base shadow */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full bg-black/[0.04] blur-[3px] z-5" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Foreground Content (Centered) */}
        <div className="absolute inset-0 flex flex-col items-center z-30 pointer-events-none" style={{ paddingTop: '10vh' }}>
          {/* Subtle text backdrop glow — nearly invisible separation from busy background */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[520px] h-[280px] rounded-full bg-white/60 blur-[60px] pointer-events-none" style={{ top: '8vh' }} />
          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-[0.04em] text-[#111111] mb-4 text-center select-none" style={{ fontFeatureSettings: '"kern" 1, "liga" 1' }}>
              ZEAL<span className="text-apple-accent">A</span>RC
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg sm:text-2xl md:text-[28px] lg:text-[32px] italic text-[#2a2a2e] font-light text-center leading-snug mb-4">
              Software that simply works.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#555558] font-light text-center leading-relaxed">
              POS systems, distribution tools, and custom software<br />
              built for growing businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Statistics Ribbon */}
      <section className="bg-apple-gray border-y border-black/[0.04] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-apple-dark tracking-tight mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-apple-dark/50 font-medium uppercase tracking-wider">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Zealarc Narrative */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-6">About Zealarc</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-h2 text-apple-dark mb-8">
              We build software that works.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60">
              Zealarc builds tools that help businesses run better. From point-of-sale systems for restaurants and retail, to distribution management for warehouses and field teams — we focus on building things that are reliable, straightforward, and genuinely useful.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 md:py-40 bg-apple-gray/50 border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center md:text-left">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Our Expertise</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark">
                What we do best.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <FadeIn key={idx} delay={100 * idx}>
                <ProductCard 
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.description}
                  link={svc.link}
                  linkText="View service details"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Beez AI Layer */}
      <section className="py-20 md:py-28 bg-white border-t border-black/[0.03]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Intelligent Assistant</h2>
            <h3 className="text-h2 text-apple-dark mb-6">One AI. Every Product.</h3>
            <p className="text-body text-apple-dark/60 max-w-2xl mx-auto">
              Beez AI is seamlessly integrated across the Zealarc ecosystem, helping businesses analyze data, streamline operations, surface insights, and make informed decisions—right where they work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Zealarc Ecosystem */}
      <section className="py-28 md:py-40 bg-apple-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-24">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-blue uppercase tracking-widest mb-4">Connected Software</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 leading-none mb-6">
                The Zealarc Ecosystem.
              </h3>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-body text-white/60">
                Our products are built to work together. Sales data from Nectar flows into Queen's reports automatically, while Hive handles all the setup behind the scenes.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* POS Ecosystem */}
            <FadeIn delay={100} className="h-full">
              <div className="p-8 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-32 flex flex-col justify-between h-full group transition-all duration-350 ease-out">
                <div>
                  <div className="text-apple-blue text-xs font-semibold uppercase tracking-wider mb-2 flex items-center justify-between gap-4">
                    <span>Billing & Management</span>
                    <span className="px-2.5 py-0.5 bg-white/5 text-white/90 text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/10 flex-shrink-0">
                      Powered by Beez AI
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">POS Ecosystem</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                    A unified suite of tools featuring Nectar for smart billing, Hive for tenant setup, and Queen for enterprise admin control.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <Link to="/products/pos" className="text-apple-blue font-medium hover:underline inline-flex items-center gap-1 text-sm">
                    Explore POS Ecosystem <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* BeezDMS */}
            <FadeIn delay={200} className="h-full">
              <div className="p-8 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-32 flex flex-col justify-between h-full group transition-all duration-350 ease-out">
                <div>
                  <div className="text-apple-blue text-xs font-semibold uppercase tracking-wider mb-2 flex items-center justify-between gap-4">
                    <span>Distribution System</span>
                    <span className="px-2.5 py-0.5 bg-white/5 text-white/90 text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/10 flex-shrink-0">
                      Powered by Beez AI
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">BeezDMS</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                    Connects your warehouse, sales teams, and vendors. Plan delivery routes, track stock, and keep field operations in sync.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <Link to="/products/dms" className="text-apple-blue font-medium hover:underline inline-flex items-center gap-1 text-sm">
                    Explore BeezDMS <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Bayt-Al-Mal */}
            <FadeIn delay={300} className="h-full">
              <div className="p-8 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-32 flex flex-col justify-between h-full group transition-all duration-350 ease-out relative overflow-hidden">
                <div className="mt-8">
                  <div className="text-apple-blue text-xs font-semibold uppercase tracking-wider mb-2 flex items-center justify-between gap-4">
                    <span>Community Charity Platform</span>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-0.5 bg-white/5 text-white/90 text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/10 flex-shrink-0">
                        Powered by Beez AI
                      </span>
                      <span className="px-2.5 py-0.5 bg-white/5 text-white/90 text-[9px] font-bold rounded-full uppercase tracking-widest border border-white/10 flex-shrink-0">
                        Free Forever
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Bayt-Al-Mal</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                    A transparent and community-driven platform built to help organizations manage charitable activities with trust, accountability, and simplicity.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <Link to="/products/bayt-al-mal" className="text-apple-blue font-medium hover:underline inline-flex items-center gap-1 text-sm">
                    Explore Bayt-Al-Mal <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-28 md:py-40 bg-apple-gray/30 border-y border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Why it Works</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                Built for measurable outcomes.
              </h3>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((ben, idx) => (
              <FadeIn key={idx} delay={100 * idx} className="flex gap-4">
                <CheckCircle2 size={24} className="text-apple-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-h4 text-apple-dark mb-2">{ben.title}</h4>
                  <p className="text-body-sm text-apple-dark/60">{ben.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Language Support */}
      <section className="py-20 md:py-28 bg-white border-y border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Global Reach</h2>
            <h3 className="text-h2 text-apple-dark mb-6">Built for Diverse Teams.</h3>
            <p className="text-body text-apple-dark/60 max-w-2xl mx-auto mb-12">
              Our products are designed for teams across different regions with support for multiple languages, making everyday operations familiar and easy for every user.
            </p>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'English', code: 'EN', native: 'English' },
              { name: 'Tamil', code: 'TA', native: 'தமிழ்' },
              { name: 'Hindi', code: 'HI', native: 'हिन्दी' },
              { name: 'Arabic', code: 'AR', native: 'العربية' },
              { name: 'French', code: 'FR', native: 'Français' },
              { name: 'Spanish', code: 'ES', native: 'Español' }
            ].map((lang) => (
              <span key={lang.code} className="px-5 py-2.5 bg-apple-gray text-apple-dark rounded-full text-sm font-medium border border-black/[0.03] shadow-sm flex items-center gap-2 hover:bg-black/[0.02] transition-colors">
                <span className="text-[10px] bg-apple-accent/10 text-apple-accent px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{lang.code}</span>
                <span>{lang.name}</span>
                <span className="text-apple-dark/40 text-xs font-light">({lang.native})</span>
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Integrations</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <h3 className="text-h2 text-apple-dark">
              Works with what you already use.
            </h3>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-body text-apple-dark/60 max-w-2xl mx-auto mb-16">
              Zealarc connects with your existing hardware and payment services — printers, scanners, UPI apps, and modern transactional APIs.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {integrations.map((item, idx) => (
              <FadeIn key={idx} delay={50 * idx} className="p-6 bg-apple-gray rounded-24 flex flex-col items-center justify-center border border-black/[0.01] hover:border-black/[0.03] hover:bg-white hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-350 ease-out group">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="h-8 max-w-full object-contain mb-3 transition-all duration-300" />
                ) : (
                  <item.icon size={28} className="text-apple-dark/80 mb-3" />
                )}
                <span className="font-semibold text-apple-dark text-sm block mb-1">{item.name}</span>
                <span className="text-[10px] text-apple-dark/40 tracking-tight">{item.desc}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Target Verticals</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark">
                Designed for your industry.
              </h3>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-body text-apple-dark/60">
                We build specialized solutions that address the specific needs of each industry we serve.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <FadeIn key={idx} delay={100 * idx}>
                <div className="p-8 bg-apple-gray rounded-24 h-full flex flex-col justify-between border border-black/[0.01] hover:border-black/[0.03] hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-350 ease-out group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:opacity-90 transition-opacity duration-350">
                    <ind.icon size={20} className="text-apple-accent" />
                  </div>
                  <div>
                    <h4 className="text-h4 text-apple-dark mb-2">{ind.name}</h4>
                    <p className="text-body-sm text-apple-dark/60">{ind.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={100 * industries.length}>
              <form onSubmit={handleIndustrySubmit} className="p-8 bg-apple-gray/50 rounded-24 h-full flex flex-col justify-between border border-black/[0.04] hover:border-black/[0.08] transition-all duration-350 group">
                <div>
                  <h4 className="text-h4 text-apple-dark mb-2">Don't See Your Industry?</h4>
                  <p className="text-body-sm text-apple-dark/60 mb-6">
                    Tell us about your business, and we'll help you find the right solution.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="e.g. Healthcare, Manufacturing"
                    value={customIndustry}
                    onChange={(e) => setCustomIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-black/[0.05] focus:border-apple-accent outline-none rounded-xl text-sm transition-colors"
                  />
                  <button type="submit" className="w-full py-3 bg-apple-dark text-white rounded-xl text-sm font-medium hover:bg-black transition-colors">
                    Book a Consultation
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Zealarc - Split Layout */}
      <section className="py-28 md:py-40 bg-apple-gray/50 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Our Commitment</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark mb-6">
                Built to be reliable.
              </h3>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="text-body text-apple-dark/60 mb-8">
                We believe software should stay out of your way. Our products are tested for reliability, built for teams, and backed by real support from real people — available whenever you need help.
              </p>
            </FadeIn>
            
            <div className="flex flex-col gap-4">
              <FadeIn delay={400} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="text-apple-accent mt-0.5" />
                <div>
                  <h4 className="font-bold text-apple-dark text-sm">Enterprise-grade Security</h4>
                  <p className="text-xs text-apple-dark/60">Encrypted databases and secure PDO statements for data transactions.</p>
                </div>
              </FadeIn>
              <FadeIn delay={500} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="text-apple-accent mt-0.5" />
                <div>
                  <h4 className="font-bold text-apple-dark text-sm">Continuous Support</h4>
                  <p className="text-xs text-apple-dark/60">Live agents available standard on all accounts for onboarding and configuration support.</p>
                </div>
              </FadeIn>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <FadeIn delay={450}>
              <div className="p-3 bg-black rounded-[36px] border-[8px] border-[#222] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] overflow-hidden group">
                <img 
                  src="./assets/nectar_checkout.jpg" 
                  alt="Nectar POS Checkout screen" 
                  className="rounded-[22px] w-full object-cover aspect-[16/10] group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-28 md:py-40 bg-apple-gray/20 border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <FadeIn>
              <h2 className="text-xs font-semibold text-apple-accent uppercase tracking-widest mb-4">Questions</h2>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-h2 text-apple-dark">
                Frequently asked questions.
              </h3>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <Accordion items={faqItems} />
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn className="p-16 md:p-24 bg-apple-dark text-white rounded-32 text-center relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 bg-radial-gradient from-apple-accent/20 to-transparent pointer-events-none"></div>
            
            <h2 className="text-h2 leading-none mb-6">
              Let's talk about your business.
            </h2>
            <p className="text-body text-white/60 mb-10 max-w-xl">
              Get in touch and we'll help you find the right solution.
            </p>
            <Link to="/contact" className="px-6 py-3.5 bg-white text-apple-dark hover:bg-white/90 rounded-full font-medium text-sm active:scale-95 transition-all duration-300">
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
