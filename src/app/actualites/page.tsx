'use client';

import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/shared/Footer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ActualitesPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[200px] sm:h-[250px] md:h-[300px] mb-8 sm:mb-12"
      >
        <Image
          src="/images/contact-hero.png"
          alt="Actualités UGESM"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4"
            >
              Actualités
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl"
            >
              Restez informé des dernières actualités et événements de l'UGESM
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Liste des actualités */}
      <div className="container mx-auto px-4 pb-8 sm:pb-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:gap-8"
        >
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/actualites/${post.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row transform transition-all duration-300 hover:shadow-xl">
                  <div className="relative w-full sm:w-1/3 h-[200px] sm:min-h-[250px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 p-4 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-green-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded"
                      >
                        {post.category}
                      </motion.div>
                      <span className="text-gray-500 text-sm">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 group-hover:text-green-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-green-600">
                      <span className="text-sm sm:text-base font-medium">Lire la suite</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </motion.main>
  );
}
