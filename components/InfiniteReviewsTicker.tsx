import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS_MOCK } from '../src/data/googleReviewsMock';

const GoogleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

const TestimonialCard: React.FC<{ review: any }> = ({ review }) => (
    <div className="w-[320px] sm:w-[350px] flex-shrink-0 bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-50"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.author_name}&background=random`
                        }}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                        <GoogleIcon className="w-3 h-3" />
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-gray-900 text-[12px] tracking-tight truncate max-w-[120px]">{review.author_name}</h5>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < review.rating ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'} />
                        ))}
                    </div>
                </div>
            </div>
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest truncate max-w-[60px]">{review.time.split('·').pop()}</span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed italic line-clamp-3">"{review.text}"</p>
    </div>
);

const InfiniteReviewsTicker: React.FC = () => {
    return (
        <div className="flex overflow-hidden relative py-4 mask-fade h-[160px]">
            <motion.div
                animate={{ x: [0, -2000] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex gap-4 w-max absolute"
            >
                {[...GOOGLE_REVIEWS_MOCK, ...GOOGLE_REVIEWS_MOCK, ...GOOGLE_REVIEWS_MOCK].map((review, idx) => (
                    <TestimonialCard key={`${review.id}-${idx}`} review={review} />
                ))}
            </motion.div>
            <style>{`
                .mask-fade {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </div>
    );
};

export default InfiniteReviewsTicker;
