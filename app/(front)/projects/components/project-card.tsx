'use client';

import { Button } from '@/components/ui/button';
import { Project } from '../data/projects';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  currency: 'UGX' | 'USD';
}

export function ProjectCard({ project, currency }: ProjectCardProps) {
  const getCategoryName = () => {
    const categoryMap: { [key: string]: string } = {
      'business-websites': 'Business Website',
      'charity-websites': 'Charity Website',
    };
    return categoryMap[project.categories[0]] || 'Website';
  };

  const getTierName = () => {
    return project.tier.charAt(0).toUpperCase() + project.tier.slice(1);
  };

  return (
    <div className="group w-full max-w-md flex flex-col gap-0 rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-2xl hover:border-primary/30 duration-300">
      {/* Header Section - Compact */}
      <div className="px-6 pt-5 pb-0">
        <p className="text-xs font-medium text-muted-foreground mb-1">
          {getTierName()} {getCategoryName()}
        </p>
        <h2 className="text-3xl font-bold text-foreground">
          Category {project.tier === 'basic' ? 'I' : project.tier === 'standard' ? 'II' : 'III'}
        </h2>
      </div>

      {/* Image - Premium presentation */}
      <div className="flex justify-center mt-4 mb-6 px-6">
        <div className="relative w-full aspect-video overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 px-6 pb-6 flex-1">
        {/* Major Purpose - Prominent Highlight */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
            Major Purpose
          </p>
          <h3 className="text-lg font-bold text-foreground leading-snug">
            {project.majorPurpose}
          </h3>
        </div>

        {/* Website Information Section */}
        <div className="space-y-2 flex-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Website Information
          </p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">
              {project.companyName}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* View Details Button */}
        <Button
          className="w-full mt-2"
          asChild
        >
          <Link href={`/projects/${project.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}
