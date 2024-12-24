'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { blogs, categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import FeaturedSection from '@/components/sections/featured-section';
import BlogGrid from '@/components/blog/blog-grid';
import AdBanner from '@/components/ads/ad-banner';
import TopicsList from '@/components/sections/topics-list';

export default function HomePage() {
  const router = useRouter();
  const featuredBlogs = blogs.slice(0, 3);
  const latestBlogs = blogs.slice(3, 9);

  const navigateToCategory = (categorySlug) => {
    router.push(`/category/${categorySlug}`);
  };

  return (
    <div className="space-y-16 pb-16">
      <section className="animate-fade-in space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Stay curious.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8"
            onClick={() => router.push('/category/tech')}
          >
            Start reading
          </Button>
        </div>
      </section>

      <FeaturedSection blogs={featuredBlogs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-16">
          <section className="animate-fade-in space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Latest Stories</h2>
              <Button 
                variant="ghost" 
                className="group"
                onClick={() => router.push('/category/tech')}
              >
                See all
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <BlogGrid blogs={latestBlogs} />
          </section>

          <AdBanner className="animate-fade-in" />

          {categories.map((category) => {
            const categoryBlogs = blogs
              .filter(blog => blog.category === category.slug)
              .slice(0, 3);

            if (categoryBlogs.length === 0) return null;
            
            return (
              <section key={category.slug} className="animate-fade-in space-y-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="group"
                    onClick={() => navigateToCategory(category.slug)}
                  >
                    More stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <BlogGrid blogs={categoryBlogs} />
              </section>
            );
          })}
        </div>

        <div className="space-y-16">
          <aside className="animate-fade-in sticky top-24 space-y-16">
            <TopicsList />
            <AdBanner variant="sidebar" />
          </aside>
        </div>
      </div>
    </div>
  );
}