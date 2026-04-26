import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogArchivePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative pt-32 pb-24 bg-white min-h-screen">
      <Helmet>
        <title>Blog de Fumigación y Control de Plagas | Big Cat</title>
        <meta name="description" content="Descubre consejos expertos, noticias y guías sobre el control de plagas. Mantén tu hogar libre de insectos y roedores con la información de Big Cat Fumigaciones." />
        <meta name="keywords" content="blog control de plagas, fumigacion tips, prevenir plagas, blog big cat" />
        <meta property="og:title" content="Blog de Fumigación y Control de Plagas | Big Cat" />
        <meta property="og:description" content="Descubre consejos expertos, noticias y guías sobre el control de plagas." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-red transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-brand-red">Blog</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Educación y Prevención
            </span>
            <h1 className="text-4xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-none mb-6">
              Nuestros <span className="text-brand-red italic">Tips y Trucos</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Descubre consejos expertos para mantener tu hogar libre de plagas y proteger a tu familia con la última tecnología en fumigación.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg shadow-black/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-dark">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-brand-red" />
                      <span className="text-[10px] font-bold uppercase">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-brand-red" />
                      <span className="text-[10px] font-bold uppercase">{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-black text-brand-dark leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-black text-brand-red uppercase tracking-[0.2em] pt-2">
                    Continuar Leyendo
                    <div className="w-6 h-[1px] bg-brand-red/30 group-hover:w-10 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogArchivePage;
