'use client'

import { useNumberTicker } from '@/hooks/UseNumberTicker';
import { useState, useEffect, useRef } from 'react';


interface Statistic {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const statistics: Statistic[] = [
    { value: 250, label: 'Cross-Functional Synergies Realized', suffix: '+' },
    { value: 4, label: 'Years of Multidisciplinary Paradigm Expertise', suffix: '+' },
    { value: 45000, label: 'Quantum Units of Scalable Outputs Delivered', suffix: '+' },
    { value: 150, label: 'Strategic Partnerships Cultivated', suffix: '+' },
    { value: 180, label: 'Hyper-Niche Client Engagements Executed', suffix: '+' },
    { value: 96.8, label: 'Empirical Optimization Index', suffix: '%' },
    { value: 20, label: 'Open Source Contributions', suffix: '+' },
    { value: 97.5, label: 'Client Retention Metric', suffix: '%' },
    { value: 15, label: 'Hackathons Participated', suffix: '+' },
    { value: 65, label: 'Neuro-Adaptive Process Iterations Orchestrated', suffix: '+' },
  ];

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-4xl font-semibold text-center mb-4 mt-3 text-white name-header">My MileStones At Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 200} />
          ))}
        </div>
      </div>
      <Cubes />
    </section>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: Statistic; isVisible: boolean; delay: number }) {
  const count = useNumberTicker(isVisible ? stat.value : 0, 2000, delay);

  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm md:text-base lg:text-lg">{stat.label}</div>
    </div>
  );
}

function Cubes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 md:w-16 md:h-16 bg-blue-300 bg-opacity-20 rounded-lg transform rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

