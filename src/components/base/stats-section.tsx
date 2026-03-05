'use client';

import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 18, suffix: '+', label: 'Years of Experience' },
  { value: 4, suffix: '', label: 'Comprehensive Modules' },
  { value: 1, suffix: ':1', label: 'Personal Training' },
  { value: 90, suffix: '%', label: 'Practical Focus' },
  { value: 454, suffix: '+', label: 'Students Trained' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | undefined;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function StatItem({ value, suffix, label, borderClass }: { value: number; suffix: string; label: string; borderClass: string }) {
  const counter = useCountUp(value, 2000);
  return (
    <div ref={counter.ref} className={`bg-primary px-2 py-5 text-center sm:px-4 sm:py-8 ${borderClass}`}>
      <div className="mb-1 text-base font-medium text-primary sm:text-xl md:text-2xl">{counter.count}{suffix}</div>
      <div className="text-[8px] font-normal uppercase tracking-wider text-tertiary sm:text-[11px]">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl border-x border-secondary">
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {stats.map((stat, i) => {
            // Border right: mobile hides on 3rd & 6th, desktop only hides on 6th
            // Border bottom: only first row (0,1,2) on mobile
            const borderRight = i === 2 ? "border-r-0 sm:border-r border-secondary" : i === 5 ? "" : "border-r border-secondary";
            const borderBottom = i < 3 ? "border-b sm:border-b-0 border-secondary" : "";
            return (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                borderClass={`${borderRight} ${borderBottom}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
