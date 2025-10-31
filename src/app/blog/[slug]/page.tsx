import type { Metadata } from "next";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Script from "next/script";
import { generateArticleSchema } from "@/lib/schema";

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
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {renderContent(post.content)}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

