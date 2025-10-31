export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "bogoforg",
  "url": "https://bogoforg.example.com",
  "logo": "https://bogoforg.example.com/logo.png",
  "description": "We help entrepreneurs and businesses turn ideas into reality through business planning, software development, and growth services.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-890",
    "contactType": "customer service",
    "email": "hello@bogoforg.com"
  },
  "sameAs": [
    "https://twitter.com/bogoforg",
    "https://linkedin.com/company/bogoforg"
  ]
};

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "bogoforg",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bogoforg.example.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bogoforg.example.com/blog/${article.slug}`
    },
    ...(article.image && {
      "image": {
        "@type": "ImageObject",
        "url": article.image
      }
    })
  };
}

