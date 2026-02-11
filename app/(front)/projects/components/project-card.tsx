'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  currency: 'UGX' | 'USD';
}

export function ProjectCard({ project, currency }: ProjectCardProps) {
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  const [showFullProblems, setShowFullProblems] = useState(false);

  const featuresRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);

  const price =
    currency === 'UGX'
      ? `UGX ${project.priceUGX.toLocaleString()}`
      : `USD $${project.priceUSD.toLocaleString()}`;

  const featuresToShow = showFullFeatures
    ? project.features
    : project.features.slice(0, 3);
  const problemsToShow = showFullProblems
    ? project.problems
    : project.problems.slice(0, 2);

  const hasMoreFeatures = project.features.length > 3;
  const hasMoreProblems = project.problems.length > 2;

  const [featuresHeight, setFeaturesHeight] = useState('120px');
  const [problemsHeight, setProblemsHeight] = useState('80px');

  useEffect(() => {
    if (featuresRef.current) {
      setFeaturesHeight(
        showFullFeatures
          ? `${featuresRef.current.scrollHeight}px`
          : '120px'
      );
    }
  }, [showFullFeatures, project.features]);

  useEffect(() => {
    if (problemsRef.current) {
      setProblemsHeight(
        showFullProblems
          ? `${problemsRef.current.scrollHeight}px`
          : '80px'
      );
    }
  }, [showFullProblems, project.problems]);

  return (
    <div className="group h-full flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className="capitalize">
              {project.tier}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {project.categories[0]}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-primary">{price}</div>

      {/* Image */}
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <img
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Company Name */}
      <p className="text-sm font-semibold text-foreground">
        {project.companyName}
      </p>

      {/* Description */}
      <p className="line-clamp-3 text-muted-foreground">{project.description}</p>

      {/* Links */}
      <div className="flex gap-2">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            View Live
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Features Section */}
     <div className="space-y-2">
     <h4 className="text-sm font-semibold text-foreground">Features</h4>
     <div
      ref={featuresRef}
      className="overflow-hidden transition-all duration-300"
      style={{ maxHeight: featuresHeight }}
     >
    <ul className="space-y-1">
      {featuresToShow.map((feature: string, i: number) => (
        <li key={i} className="text-sm text-muted-foreground flex gap-2">
          <span className="text-primary">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
  {/* Move button OUTSIDE overflow-hidden container */}
  {hasMoreFeatures && (
    <button
      onClick={() => setShowFullFeatures(!showFullFeatures)}
      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
    >
      {showFullFeatures ? 'Read Less' : 'Read More'}
      <ChevronDown
        className={`h-4 w-4 transition-transform ${
          showFullFeatures ? 'rotate-180' : ''
        }`}
      />
    </button>
  )}
</div>

      {/* Problems Solved Section */}
     <div className="space-y-2">
  <h4 className="text-sm font-semibold text-foreground">Problems Solved</h4>
  <div
    ref={problemsRef}
    className="overflow-hidden transition-all duration-300"
    style={{ maxHeight: problemsHeight }}
  >
    <ul className="space-y-1">
      {problemsToShow.map((problem, i) => (
        <li key={i} className="text-sm text-muted-foreground flex gap-2">
          <span className="text-primary">•</span>
          <span>{problem}</span>
        </li>
      ))}
    </ul>
  </div>
  {hasMoreProblems && (
    <button
      onClick={() => setShowFullProblems(!showFullProblems)}
      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
    >
      {showFullProblems ? 'Read Less' : 'Read More'}
      <ChevronDown
        className={`h-4 w-4 transition-transform ${
          showFullProblems ? 'rotate-180' : ''
        }`}
      />
    </button>
  )}
</div>


      {/* View Details Button */}
      <Link href={`/projects/${project.id}`} className="w-full">
        <Button className="w-full mt-auto">View Details</Button>
      </Link>
    </div>
  );
}
