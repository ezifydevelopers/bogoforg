import type { Metadata } from "next";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Script from "next/script";
import { generateArticleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    image: post.image,
    slug: post.slug,
  });

  const readingTime = Math.ceil(post.content.split(' ').length / 200);
  const suggestedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h1 key={`h1-${index}`} className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={`h2-${index}`} className="mb-4 mt-8 text-2xl font-bold text-neutral-900 dark:text-white">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={`h3-${index}`} className="mb-3 mt-6 text-xl font-semibold text-neutral-900 dark:text-white">{line.substring(4)}</h3>);
      } else if (line.startsWith('- ')) {
        if (!inList) {
          if (currentParagraph.length > 0) {
            elements.push(<p key={`p-${index}`} className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
            currentParagraph = [];
          }
          listItems = [];
          inList = true;
        }
        listItems.push(line.substring(2));
      } else if (line.trim() === '') {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="mb-4 ml-6 list-disc space-y-2 text-neutral-600 dark:text-neutral-300">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
      } else if (line.trim().length > 0) {
        if (inList) {
          if (listItems.length > 0) {
            elements.push(
              <ul key={`ul-${index}`} className="mb-4 ml-6 list-disc space-y-2 text-neutral-600 dark:text-neutral-300">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
            listItems = [];
            inList = false;
          }
        }
        currentParagraph.push(line.trim());
      }
    });

    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="mb-4 ml-6 list-disc space-y-2 text-neutral-600 dark:text-neutral-300">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    if (currentParagraph.length > 0) {
      elements.push(<p key="p-final" className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{currentParagraph.join(' ')}</p>);
    }

    return elements;
  };

  const shareUrl = `https://bogoforg.example.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            {post.image && (
              <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            {/* Share Buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-neutral-600 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-neutral-600 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300 bg-white text-neutral-600 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Author Bio */}
            <div className="mb-12 rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl text-white">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">{post.author}</h3>
                  <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Expert in {post.category} with years of experience helping businesses succeed.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Connect with {post.author.split(' ')[0]} on LinkedIn to learn more about {post.category.toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {renderContent(post.content)}
            </div>
          </div>
        </article>

        {/* Suggested Posts */}
        {suggestedPosts.length > 0 && (
          <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
                Suggested Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {suggestedPosts.map((suggested) => (
                  <Link key={suggested.slug} href={`/blog/${suggested.slug}`}>
                    <div className="group h-full rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={suggested.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
                          alt={suggested.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-2 text-xs font-medium text-primary">{suggested.category}</div>
                        <h3 className="mb-2 text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors dark:text-white">
                          {suggested.title}
                        </h3>
                        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                          {suggested.excerpt}
                        </p>
                        <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
