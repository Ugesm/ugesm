'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSections, setShowSections] = useState(false);
  const [showBourses, setShowBourses] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const pathname = usePathname();

  const sections = [
    { name: 'UGESM Agadir', id: 'agadir' },
    { name: 'UGESM Beni Mellal-Khouribga', id: 'beni-mellal-khouribga' },
    { name: 'UGESM Casablanca', id: 'casablanca' },
    { name: 'UGESM El Jadida', id: 'el-jadida' },
    { name: 'UGESM Errachidia', id: 'errachidia' },
    { name: 'UGESM Fès', id: 'fes' },
    { name: 'UGESM Kénitra', id: 'kenitra' },
    { name: 'UGESM Laâyoune', id: 'laayoune' },
    { name: 'UGESM Marrakech', id: 'marrakech' },
    { name: 'UGESM Meknès', id: 'meknes' },
    { name: 'UGESM Mohammedia', id: 'mohammedia' },
    { name: 'UGESM Oujda', id: 'oujda' },
    { name: 'UGESM Rabat', id: 'rabat' },
    { name: 'UGESM Settat', id: 'settat' },
    { name: 'UGESM Tanger-Tétouan', id: 'tanger' },
    { name: 'UGESM Ben Guerir', id: 'benguerir' }
  ];

  const bourses = [
    { href: '/bourse-amci', label: 'Bourse AMCI' },
    { href: '/bourse-senegal', label: 'Bourse Sénégal' }
  ];

  const links = [
    { label: 'Publications', href: '/publications' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Guide Étudiant', href: '#', hasDropdown: true, dropdownType: 'guide' },
    { label: 'Sections', href: '#', hasDropdown: true, dropdownType: 'sections' },
    { label: 'Bourses', href: '#', hasDropdown: true, dropdownType: 'bourses' }
  ];

  const guide = [
    { href: '/bourse-senegal', label: 'Bourse Sénégal' },
    { href: '/bourse-amci', label: 'Bourse AMCI' },
    { href: '/carte-sejour', label: 'Carte de Séjour' },
    { href: '/couverture-medicale', label: 'Couverture Médicale' }
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    }),
    hover: {
      x: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className="fixed w-full z-50 bg-green-700 shadow-lg py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Logo et Titre */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="UGESM Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  UGESM
                </span>
                <span className="text-[10px] text-gray-100 leading-tight">
                  Union Générale des Etudiants Et <br /> Stagiaires sénégalais au Maroc
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center ml-auto space-x-8">
            {links.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => {
                      if (link.dropdownType === 'bourses') {
                        setShowBourses(true);
                        setShowSections(false);
                        setShowGuide(false);
                      } else if (link.dropdownType === 'sections') {
                        setShowSections(true);
                        setShowBourses(false);
                        setShowGuide(false);
                      } else if (link.dropdownType === 'guide') {
                        setShowGuide(true);
                        setShowSections(false);
                        setShowBourses(false);
                      }
                    }}
                    className="text-white hover:text-green-200 hover:underline transition-colors duration-200 flex items-center"
                  >
                    {link.label}
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: link.dropdownType === 'bourses' ? (showBourses ? 180 : 0) : (link.dropdownType === 'sections' ? (showSections ? 180 : 0) : (link.dropdownType === 'guide' ? (showGuide ? 180 : 0) : 0)) }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:text-green-200 hover:underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
                <AnimatePresence>
                  {link.dropdownType === 'bourses' && showBourses && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setShowBourses(false)}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      {bourses.map((bourse, index) => (
                        <motion.div
                          key={bourse.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={bourse.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                          >
                            {bourse.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  {link.dropdownType === 'sections' && showSections && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setShowSections(false)}
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto"
                    >
                      {sections.map((section, index) => (
                        <motion.div
                          key={section.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/sections/${section.id}`}
                            className="block px-4 py-2.5 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                          >
                            {section.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  {link.dropdownType === 'guide' && showGuide && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setShowGuide(false)}
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[70vh] overflow-y-auto"
                    >
                      {guide.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-2.5 text-gray-800 hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto text-white p-2 hover:bg-green-600 rounded-lg transition-colors duration-200"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                rotate: isOpen ? 90 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <div className="space-y-4">
              {links.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (link.dropdownType === 'bourses') {
                            setShowBourses(!showBourses);
                            setShowSections(false);
                            setShowGuide(false);
                          } else if (link.dropdownType === 'sections') {
                            setShowSections(!showSections);
                            setShowBourses(false);
                            setShowGuide(false);
                          } else if (link.dropdownType === 'guide') {
                            setShowGuide(!showGuide);
                            setShowSections(false);
                            setShowBourses(false);
                          }
                        }}
                        className="text-white hover:text-green-200 hover:underline transition-colors duration-200 w-full text-left flex items-center justify-between"
                      >
                        {link.label}
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: link.dropdownType === 'bourses' ? (showBourses ? 180 : 0) : (link.dropdownType === 'sections' ? (showSections ? 180 : 0) : (link.dropdownType === 'guide' ? (showGuide ? 180 : 0) : 0)) }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {link.dropdownType === 'bourses' && showBourses && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 space-y-2 overflow-hidden"
                          >
                            {bourses.map((bourse, index) => (
                              <motion.div
                                key={bourse.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={bourse.href}
                                  className="block text-white hover:text-green-200 py-1 transition-colors duration-200"
                                >
                                  {bourse.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        {link.dropdownType === 'sections' && showSections && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 space-y-2 overflow-y-auto max-h-[60vh] bg-green-700/95 rounded-lg"
                          >
                            {sections.map((section, index) => (
                              <motion.div
                                key={section.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={`/sections/${section.id}`}
                                  className="block text-white hover:text-green-200 py-2 px-2 transition-colors duration-200"
                                >
                                  {section.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        {link.dropdownType === 'guide' && showGuide && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 space-y-2 overflow-hidden"
                          >
                            {guide.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className="block text-white hover:text-green-200 py-1 transition-colors duration-200"
                                >
                                  {item.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-white hover:text-green-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
