import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, ArrowLeft, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../../types';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    if (!slug) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 size={48} className="animate-spin mb-4 text-brand-red" />
        <p className="text-[10px] font-normal uppercase tracking-widest text-gray-400">Cargando artículo...</p>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Schema.org Structured Data (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.meta_description,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.published_at,
    "image": post.featured_image,
    "publisher": {
      "@type": "Organization",
      "name": "Big Cat - Control de Plagas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bigcat.mx/logo.png" // Replace with actual logo URL
      }
    }
  };

  // Schema.org BreadcrumbList
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://bigcat.mx/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://bigcat.mx/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://bigcat.mx/blog/${post.slug}`
      }
    ]
  };

  // Format content to render paragraphs properly
  const formattedContent = post.content.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
    <p key={idx} className="mb-6 text-lg text-gray-600 leading-relaxed">
      {paragraph.trim()}
    </p>
  ));

  return (
    <main className="relative pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>{post.title} | Big Cat - Control de Plagas</title>
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.keywords.join(',')} />
        <link rel="canonical" href={`https://bigcat.mx/blog/${post.slug}`} />
        
        {/* OpenGraph / Social Media */}
        <meta property="og:title" content={`${post.title} | Big Cat - Control de Plagas`} />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bigcat.mx/blog/${post.slug}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Big Cat - Control de Plagas`} />
        <meta name="twitter:description" content={post.meta_description} />
        <meta name="twitter:image" content={post.featured_image} />

        {/* JSON-LD Article */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* JSON-LD Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-normal uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-red transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <Link to="/blog" className="hover:text-brand-red transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-brand-red truncate max-w-[200px] md:max-w-xs">{post.title}</span>
        </div>

        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-normal uppercase tracking-widest text-gray-400 hover:text-brand-red transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-normal uppercase tracking-[0.2em] mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-brand-dark tracking-tighter leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-brand-red" />
                <span className="text-xs font-normal uppercase tracking-wider">
                  {new Date(post.published_at).toLocaleDateString('es-MX', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-brand-red" />
                <span className="text-xs font-normal uppercase tracking-wider">{post.author}</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Feature Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-black/10"
        >
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg prose-red max-w-none"
        >
          {formattedContent}
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-brand-dark rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-normal mb-4">¿Tienes un problema de plagas?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">No dejes que se convierta en una infestación grave. Contáctanos hoy para una inspección profesional y protege tu hogar.</p>
            <Link to="/#cotizacion" className="inline-block bg-brand-red text-white px-8 py-4 rounded-xl font-normal uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300">
              Cotizar Servicio
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
};

export default BlogPostPage;

