import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../src/data/blogPosts';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-[10px] font-normal uppercase tracking-[0.2em] mb-6">
              Educación y Prevención
            </span>
            <h2 className="text-4xl lg:text-6xl font-normal text-brand-dark tracking-tighter leading-none mb-6">
              Nuestros <span className="text-brand-red italic">Tips y Trucos</span>
            </h2>
            <p className="text-xl text-gray-500 font-normal leading-relaxed">
              Descubre consejos expertos para mantener tu hogar libre de plagas y proteger a tu familia con la última tecnología en fumigación.
            </p>
          </motion.div>
          
          <Link to="/blog">
            <motion.button
               whileHover={{ x: 5 }}
               className="flex items-center gap-2 text-brand-dark font-normal uppercase tracking-widest text-xs group"
            >
               Ver Todo el Blog
               <ArrowRight size={16} className="text-brand-red group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg shadow-black/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-normal uppercase tracking-widest text-brand-dark">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-brand-red" />
                      <span className="text-[10px] font-normal uppercase">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-brand-red" />
                      <span className="text-[10px] font-normal uppercase">{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-normal text-brand-dark leading-snug group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-normal leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-normal text-brand-red uppercase tracking-[0.2em] pt-2">
                    Continuar Leyendo
                    <div className="w-6 h-[1px] bg-brand-red/30 group-hover:w-10 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination Simplified to Page 1 */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center">
           <div className="flex items-center gap-2 mx-auto md:mx-0">
              <Link to="/blog" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-red text-white shadow-lg shadow-brand-red/20 font-normal text-sm hover:bg-brand-dark transition-colors">
                1
              </Link>
           </div>

           <div className="text-[10px] font-normal text-gray-400 uppercase tracking-[0.2em]">
             Página 1 de 1 — Mostrando {BLOG_POSTS.length} artículos
           </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

