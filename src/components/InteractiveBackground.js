"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let width;
    let height;

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const settings = {
      size: 58,
      gap: 8,
      influenceRadius: 220,
    };

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawOctagon(x, y, radius, intensity) {
      const sides = 8;

      ctx.beginPath();

      for (let i = 0; i < sides; i++) {
        const angle =
          (Math.PI * 2 * i) / sides + Math.PI / 8;

        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();

      const baseAlpha = 0.055;
      const activeAlpha = intensity * 0.55;

      ctx.strokeStyle = `rgba(0, 88, 171, ${
        baseAlpha + activeAlpha
      })`;

      ctx.lineWidth = 1 + intensity * 1.2;

      if (intensity > 0.05) {
        ctx.shadowColor = "#0058AB";
        ctx.shadowBlur = intensity * 18;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.stroke();

      ctx.shadowBlur = 0;

      if (intensity > 0) {
        ctx.fillStyle = `rgba(0, 88, 171, ${
          intensity * 0.035
        })`;

        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const spacing = settings.size + settings.gap;

      const columns = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < columns; col++) {
          const offset =
            row % 2 === 0 ? 0 : spacing / 2;

          const x = col * spacing + offset;
          const y = row * spacing;

          const dx = mouse.x - x;
          const dy = mouse.y - y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          let intensity = 0;

          if (distance < settings.influenceRadius) {
            intensity =
              1 - distance / settings.influenceRadius;
          }

          const push = intensity * 7;

          const angle = Math.atan2(
            y - mouse.y,
            x - mouse.x
          );

          const movedX =
            x + Math.cos(angle) * push;

          const movedY =
            y + Math.sin(angle) * push;

          drawOctagon(
            movedX,
            movedY,
            settings.size / 2,
            intensity
          );
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-background"
    />
  );
}