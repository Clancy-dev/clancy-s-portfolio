'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '../data/projects';
import { CurrencyToggle } from '../components/currency-toggle';

/* ✅ SAME ICONS AS PROJECT CARD */
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiFirebase,
  SiStripe,
  SiAwsamplify,
  SiPaypal,
  SiFlutter,
  SiAuth0,
} from 'react-icons/si';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { useAuth } from '@/hooks/use-auth';

// test

export default function ProjectDetailPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const params = useParams();
  const projectId = params.id as string;

  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  const [showFullProblems, setShowFullProblems] = useState(false);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-foreground">
              Project not found
            </h1>
            <p className="text-muted-foreground mt-2">
              The project you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

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

  /* ✅ SAME TECH ICON MAPPING AS PROJECT CARD */
  const techIcons: Record<string, React.ElementType> = {
    'Next.js': SiNextdotjs,
    TypeScript: SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    PostgreSQL: SiPostgresql,
    'Mongo db': SiMongodb,
    Prisma: SiPrisma,
    Firebase: SiFirebase,
    Stripe: SiStripe,
    AWS: SiAwsamplify,
    'Pay Pal': SiPaypal,
    Flutterwave: SiFlutter,
    Auth: SiAuth0,
    React: FaReact,
    'Node.js': FaNodeJs,
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href={`/projects${
            project.categories[0]
              ? `?category=${project.categories[0]}`
              : ''
          }`}
          className="mb-6 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="capitalize">{project.tier}</Badge>
                <Badge variant="secondary" className="capitalize">
                  {project.categories[0]}
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-foreground text-balance">
                {project.title}
              </h1>
            </div>

            <CurrencyToggle currency={currency} onChange={setCurrency} />
          </div>

          <p className="text-muted-foreground">{project.companyName}</p>
        </div>

        {/* Price */}
        <div className="mb-8 text-3xl font-bold text-primary">
          {price}
        </div>

        {/* Image */}
        {project.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg bg-muted mb-8">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Live Link */}
        {project.liveLink && (
          <div className="mb-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Project
            </a>
          </div>
        )}

        {/* ✅ Tech Stack with SAME ICONS */}
        <div className="mb-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => {
              const Icon = techIcons[tech];

              return (
                <Badge
                  key={`${tech}-${i}`}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {tech}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Features
          </h2>

          <ul className="space-y-3">
            {featuresToShow.map((feature, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {hasMoreFeatures && (
            <button
              onClick={() => setShowFullFeatures((prev) => !prev)}
              className="inline-flex items-center gap-1 text-primary hover:underline mt-4 font-medium"
            >
              {showFullFeatures
                ? 'Show Less'
                : `Show ${project.features.length - 3} More Features`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showFullFeatures ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </div>

        {/* Problems Solved */}
        <div className="border-t border-border pt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Problems Solved
          </h2>

          <ul className="space-y-6">
            {problemsToShow.map((problem, i) => (
              <li key={i} className="text-muted-foreground leading-relaxed">
                <div className="font-semibold text-lg text-foreground">
                  {problem.problemTitle}
                </div>
                <div className="mt-1">
                  {problem.problemDescription}
                </div>

                <div className="mt-4 pl-4 border-l-2 border-primary/30">
                  <div className="text-sm font-medium text-primary mb-1">
                    Solution
                  </div>
                  <div className="font-semibold text-foreground">
                    {problem.solutionTitle}
                  </div>
                  <div className="mt-1">
                    {problem.solutionDescription}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {hasMoreProblems && (
            <button
              onClick={() => setShowFullProblems((prev) => !prev)}
              className="inline-flex items-center gap-1 text-primary hover:underline mt-4 font-medium"
            >
              {showFullProblems
                ? 'Show Less'
                : `Show ${project.problems.length - 2} More Problems`}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showFullProblems ? 'rotate-180' : ''
                }`}
              />
            </button>
          )}
        </div>

        {/* ✅ Project Details Section */}
        {isLoading ? (
  <div className="mt-12 text-center text-muted-foreground">
    Loading project details...
  </div>
) : isAuthenticated && project.projectOtherData ? (
  <div className="mt-12 border-t border-border pt-8 space-y-8">
    <h2 className="text-2xl font-bold text-foreground">Project Details</h2>

    {/* Technical Requirements */}
    <div>
      <h3 className="font-semibold mb-2">Technical Requirements</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 marker:text-blue-500">
        {project.projectOtherData.technicalRequirements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Duration */}
    <div>
      <h3 className="font-semibold mb-2">Project Duration</h3>
      <p className="text-muted-foreground">
        {project.projectOtherData.duration}
      </p>
    </div>

    {/* Payment Terms */}
    <div>
      <h3 className="font-semibold mb-2">Payment Terms</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 marker:text-blue-500">
        {project.projectOtherData.paymentTerms.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Client Requirement Days */}
    <div>
      <h3 className="font-semibold mb-2">
        Days for Providing Client Requirements
      </h3>
      <p className="text-muted-foreground">
        {project.projectOtherData.clientRequirementDays}
      </p>
    </div>

    {/* Pause Policy */}
    <div>
      <h3 className="font-semibold mb-2">Project Pause Policy</h3>
      <p className="text-muted-foreground">
        {project.projectOtherData.projectPausePolicy}
      </p>
    </div>

    {/* Client Requirements */}
    <div>
      <h3 className="font-semibold mb-2">Client Requirements</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-1 marker:text-blue-500">
        {project.projectOtherData.clientRequirements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
) : (
  <div className="mt-12 text-center text-muted-foreground">
    Please <Link href="/login" className="text-primary underline">log in</Link> to view more technical project details.
  </div>
)}

 

        
      </div>
    </main>
  );
}
