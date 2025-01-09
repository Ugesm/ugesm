'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { staggerContainer } from '@/utils/motion';
import { publications } from '@/data/publications';
import { posts } from '@/data/posts';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import SectionsShowcase from '@/components/home/SectionsShowcase';

export default function HomeContent() {
  const latestPosts = posts.slice(0, 3);
  const latestPublications = publications.slice(0, 3);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="overflow-hidden"
    >
      <Hero />
      <SectionsShowcase />
      {/* Rest of your existing JSX code */}
    </motion.div>
  );
}
