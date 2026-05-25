'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './components/project-card';
import { CurrencyToggle } from './components/currency-toggle';
import { projectsData } from './data/projects';
import { categoriesData } from './data/categories';

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currency, setCurrency] = useState<'UGX' | 'USD'>('UGX');
  const [showCategorySearch, setShowCategorySearch] = useState(false);
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [displayCounts, setDisplayCounts] = useState<Record<string, number>>({
    all: 3,
    basic: 3,
    standard: 3,
    premium: 3,
  });

  // Load category from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      requestAnimationFrame(() => {
        scrollTabIntoViewport(`category-tab-${categoryParam}`);
      });
    }
  }, [searchParams]);

  // Update URL when category changes
  useEffect(() => {
    const newUrl =
      selectedCategory === 'all'
        ? '/projects'
        : `/projects?category=${selectedCategory}`;
    router.push(newUrl);
  }, [selectedCategory, router]);

  const categories = useMemo(() => ['all', ...categoriesData.map(c => c.id)], []);

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return 'All Projects';
    const category = categoriesData.find(c => c.id === cat);
    return category?.name || cat;
  };

  const filteredCategories = useMemo(() => {
    if (!categorySearchTerm.trim()) return categories;
    const term = categorySearchTerm.toLowerCase();
    return categories.filter(cat =>
      getCategoryLabel(cat).toLowerCase().includes(term)
    );
  }, [categorySearchTerm, categories]);

  const getProjectsForDisplay = () => {
    let projects = projectsData.filter(p => p.isMainProject);
    if (selectedCategory !== 'all') {
      projects = projects.filter(p => p.categories.includes(selectedCategory));
    }
    return projects;
  };

  const allProjects = getProjectsForDisplay();

  const projectsByTier = {
    basic: allProjects
      .filter(p => p.tier === 'basic')
      .slice(0, displayCounts.basic ?? 3),

    standard: allProjects
      .filter(p => p.tier === 'standard')
      .slice(0, displayCounts.standard ?? 3),

    premium: allProjects
      .filter(p => p.tier === 'premium')
      .slice(0, displayCounts.premium ?? 3),
  };

  const hasMoreProjects = {
    basic:
      allProjects.filter(p => p.tier === 'basic').length > (displayCounts.basic ?? 3),
    standard:
      allProjects.filter(p => p.tier === 'standard').length >
      (displayCounts.standard ?? 3),
    premium:
      allProjects.filter(p => p.tier === 'premium').length >
      (displayCounts.premium ?? 3),
  };

  const handleLoadMore = (tier: 'basic' | 'standard' | 'premium') => {
    setDisplayCounts(prev => ({
      ...prev,
      [tier]: (prev[tier] ?? 3) + 3,
    }));
  };

  const scrollTabIntoViewport = (tabId: string) => {
    const tab = document.getElementById(tabId);
    if (!tab) return;

    const container = tab.closest('.scroll-container');
    if (container) {
      const offsetLeft = tab.offsetLeft - container.clientWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    }

    // Scroll vertically if tab is out of viewport (sticky header adjustment)
    const stickyHeaderHeight = 80;
    const tabTop = tab.getBoundingClientRect().top + window.scrollY;
    if (tabTop < window.scrollY || tabTop > window.scrollY + window.innerHeight) {
      window.scrollTo({
        top: tabTop - stickyHeaderHeight,
        behavior: 'smooth',
      });
    }
  };

  const selectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCategorySearchTerm('');
    setShowCategorySearch(false);
    setDisplayCounts({
      all: 3,
      basic: 3,
      standard: 3,
      premium: 3,
    });

    requestAnimationFrame(() => {
      scrollTabIntoViewport(`category-tab-${cat}`);
    });
  };

  const handleCategorySearch = () => {
    const term = searchInput.toLowerCase().trim();
    if (!term) return;

    const matchingCategory = categories.find(cat =>
      getCategoryLabel(cat).toLowerCase() === term
    );

    if (matchingCategory) {
      selectCategory(matchingCategory);
      setSearchInput('');
      setCategorySearchTerm('');
    } else {
      setCategorySearchTerm(term);
    }
  };

  const categorySearchResults = filteredCategories.length;
  const noCategoriesFound = categorySearchTerm.trim() && categorySearchResults === 0;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="top-0 pt-3 z-40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-2 py-4 sm:gap-3">
            <button
              onClick={() => setShowCategorySearch(true)}
              className="inline-flex items-center justify-center rounded-lg bg-primary p-2.5 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <CurrencyToggle currency={currency} onChange={setCurrency} />
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showCategorySearch && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setShowCategorySearch(false);
              setSearchInput('');
              setCategorySearchTerm('');
            }}
          />
          <button
            onClick={() => {
              setShowCategorySearch(false);
              setSearchInput('');
              setCategorySearchTerm('');
            }}
            className="absolute top-20 right-4 p-3 bg-white text-foreground hover:bg-white/90 rounded-full transition-colors z-50 shadow-lg"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-2xl mx-4 rounded-2xl border border-border bg-card shadow-2xl">
            <div className="p-6 border-b border-border">
              <div className="relative">
                <Input
                  placeholder="Search categories..."
                  value={searchInput}
                  onChange={e => {
                    setSearchInput(e.target.value);
                    setCategorySearchTerm(e.target.value);
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter') handleCategorySearch();
                  }}
                  className="w-full text-lg pr-10 bg-background"
                  autoFocus
                />
                {searchInput && (
                  <button
                    onClick={() => {
                      setSearchInput('');
                      setCategorySearchTerm('');
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {noCategoriesFound ? (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No categories found for "{categorySearchTerm}".
                  </p>
                </div>
              ) : categorySearchTerm.trim() ? (
                <div className="divide-y divide-border">
                  {filteredCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => selectCategory(cat)}
                      className="w-full px-6 py-4 text-left hover:bg-secondary transition-colors"
                    >
                      <p className="font-medium text-foreground">
                        {getCategoryLabel(cat)}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    Popular Categories
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => selectCategory(cat)}
                        className="px-4 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors text-left"
                      >
                        <p className="text-sm font-medium text-foreground">
                          {getCategoryLabel(cat)}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="mx-auto max-w-7xl px-4 py-3 pb-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground text-balance">
            {getCategoryLabel(selectedCategory)}
          </h1>
          <p className="mt-2 text-muted-foreground">
            Explore my portfolio of premium web solutions
          </p>
        </div>

        <div className="mb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent scroll-container">
            <div className="flex gap-2 pb-4 min-w-min">
              {categories.map(cat => (
                <button
                  key={cat}
                  id={`category-tab-${cat}`}
                  onClick={() => selectCategory(cat)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card text-foreground hover:border-primary hover:bg-secondary'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
                // sample
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        {selectedCategory === 'all' ? (
          <div className="space-y-12">
            {['basic', 'standard', 'premium'].map(tier => {
              const tierProjects = projectsByTier[tier as 'basic' | 'standard' | 'premium'];
              const allTierProjects = allProjects.filter(p => p.tier === tier);
              if (!allTierProjects.length) return null;

              return (
                <div key={tier}>
                  <h2 className="mb-6 text-2xl font-semibold capitalize text-foreground">
                    Type {tier === 'basic' ? 'I' : tier === 'standard' ? 'II' : 'III'} - {tier}
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start mb-8">
                    {tierProjects.map(p => (
                      <ProjectCard key={p.id} project={p} currency={currency} />
                    ))}
                  </div>
                  {hasMoreProjects[tier as 'basic' | 'standard' | 'premium'] && (
                    <div className="flex justify-center">
                      <Button
                        onClick={() =>
                          handleLoadMore(tier as 'basic' | 'standard' | 'premium')
                        }
                        variant="outline"
                        className="px-6"
                      >
                        See More Type {tier === 'basic' ? 'I' : tier === 'standard' ? 'II' : 'III'}
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-8">
            {allProjects.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
                {allProjects.map(p => (
                  <ProjectCard key={p.id} project={p} currency={currency} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
