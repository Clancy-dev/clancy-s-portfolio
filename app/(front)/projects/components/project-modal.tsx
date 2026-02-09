'use client';

import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '../data/projects';
import { projectsData } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  currency: 'UGX' | 'USD';
  onClose: () => void;
}

export function ProjectModal({
  project,
  currency,
  onClose,
}: ProjectModalProps) {
  const price =
    currency === 'UGX'
      ? `UGX ${project.priceUGX.toLocaleString()}`
      : `USD $${project.priceUSD.toLocaleString()}`;

  // Get similar projects (same tier AND same category)
  const similarProjects = projectsData.filter(
    p =>
      p.id !== project.id &&
      p.tier === project.tier &&
      p.categories.some(c => project.categories.includes(c))
  ).slice(0, 6);

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
      </DialogHeader>

      {/* Image */}
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Basic Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Category</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {project.categories.map(cat => (
              <Badge key={cat} variant="secondary" className="capitalize">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm text-muted-foreground">Description</p>
        <p className="mt-2 text-foreground">{project.description}</p>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            View Live Website
          </a>
        )}
      </div>

      <Separator />

      {/* Tech Stack */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Features</p>
        <ul className="space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground">
              <span className="text-primary font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Problems Solved */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Problems Solved</p>
        <ul className="space-y-2">
          {project.problems.map((problem, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground">
              <span className="text-primary font-bold">→</span>
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Similar Projects */}
      <Separator />
      <div>
        <p className="text-sm font-semibold text-foreground mb-4">Related Projects in This Category</p>
        {similarProjects.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {similarProjects.map(similar => (
              <div
                key={similar.id}
                className="rounded-lg border border-border bg-card overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                {/* Image */}
                {similar.image && (
                  <div className="relative aspect-video overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={similar.image || "/placeholder.svg"}
                      alt={similar.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="capitalize text-xs">
                      {similar.tier}
                    </Badge>
                  </div>

                  <h4 className="font-semibold text-foreground text-sm line-clamp-2">{similar.title}</h4>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                    {similar.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {similar.techStack.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {similar.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{similar.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  {/* View Live Link */}
                  {similar.liveLink && (
                    <a
                      href={similar.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium pt-2 mt-auto"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-secondary/10 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              No other {project.tier.charAt(0).toUpperCase() + project.tier.slice(1)} projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
