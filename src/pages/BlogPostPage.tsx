import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { canonical } from '../lib/urls';
import { descripcion } from '../lib/descriptions';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, ArrowLeft, Loader2 } from 'lucide-react';
import { BlogPost } from '../../types';

import { BLOG_POSTS, PESTS_LIST, formatBlogDate } from '../../constants';
import { breadcrumbSchema, articuloSchema, urlAbsoluta } from '../lib/schema';
import NotFound from './NotFound';
import SedesLinks from '../../components/SedesLinks';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundPost = BLOG_POSTS.find(p => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 size={48} className="animate-spin mb-4 text-brand-red" />
        <p className="text-[10px] font-normal uppercase tracking-widest text-gray-400">Cargando artículo...</p>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const descripcionPost = descripcion(`/blog/${post.slug}`, post.meta_description);
  const imagen = urlAbsoluta(post.featured_image);
  // <title> de 60 caracteres o menos: el título completo queda en el H1.
  const title = post.seoTitle ?? post.title;
  const jsonLd = articuloSchema({ ...post, description: descripcionPost, image: imagen });

  // Schema.org BreadcrumbList
  const breadcrumbLd = breadcrumbSchema([['Inicio', '/'], ['Blog', '/blog/'], [post.title, `/blog/${post.slug}/`]]);

  const servicio = PESTS_LIST.find(p => p.slug === post.servicioRelacionado);

  return (
    <main className="relative pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={descripcionPost} />
        <link rel="canonical" href={canonical(`/blog/${post.slug}`)} />
        
        {/* OpenGraph / Social Media */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descripcionPost} />
        <meta property="og:image" content={imagen} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical(`/blog/${post.slug}`)} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={descripcionPost} />
        <meta name="twitter:image" content={imagen} />

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
          <Link to="/blog/" className="hover:text-brand-red transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-brand-red truncate max-w-[200px] md:max-w-xs">{post.title}</span>
        </div>

        <Link to="/blog/" className="inline-flex items-center gap-2 text-sm font-normal uppercase tracking-widest text-gray-400 hover:text-brand-red transition-colors mb-8 group">
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
                  {formatBlogDate(post.published_at)}
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Servicio relacionado: cada artículo enlaza al menos a un servicio */}
        {servicio && (
          <Link
            to={`/servicios/${servicio.slug}/`}
            className="mt-16 flex items-center justify-between gap-6 p-8 rounded-[2rem] border border-brand-red/20 bg-brand-red/5 hover:bg-brand-red/10 transition-colors group"
          >
            <span>
              <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-brand-red mb-2">Servicio relacionado</span>
              <span className="text-2xl font-normal text-brand-dark">{servicio.name}</span>
              <span className="block text-gray-500 mt-1">{servicio.description}</span>
            </span>
            <ChevronRight className="text-brand-red shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}

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

        <SedesLinks variante="bloque" titulo="Sedes" />
      </article>
    </main>
  );
};

export default BlogPostPage;

