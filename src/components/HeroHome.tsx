'use client';

import { company } from '@/app/constants/constants';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-color-bg-secondary-dark relative min-h-[400px] md:min-h-[480px] lg:min-h-[600px] xl:min-h-[680px]'
    >
      {/* Fondo con carousel */}
      <div className='absolute inset-0 w-full min-h-full'>
        <HeroCarousel />
        {/* Overlay gradiente mejorado */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 z-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 z-10'></div>
      </div>

      {/* Contenido principal */}
      <div className='flex justify-center w-full z-10'>
        <section className='py-10 md:py-16 lg:py-24 xl:py-36 relative w-full flex flex-col justify-center max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 z-20 min-h-[400px] md:min-h-[480px] lg:min-h-[600px] xl:min-h-[680px]'>
          {/* Layout con grid para mejor organización */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full'>
            {/* Columna izquierda - Contenido principal */}
            <div className='lg:col-span-7 flex flex-col '>
              {/* Badge superior */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit'
              >
                <span className='text-sm md:text-base text-white font-medium'>
                  {company.city}
                </span>
              </motion.div>

              {/* Títulos principales */}
              <div className='mb-2'>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight lg:text-nowrap'
                >
                  <span className='bg-gradient-to-r from-white via-white to-neutral-200 bg-clip-text text-transparent'>
                    {company.name}
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90'
                >
                  Concesionaria Multimarca
                </motion.h2>
              </div>

              {/* Tags de características */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex flex-wrap items-center gap-3 md:gap-4 mb-5'
              >
                <span className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm md:text-base'>
                  ✓ Usados
                </span>
                <span className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm md:text-base'>
                  ✓ 0km
                </span>
                <span className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm md:text-base'>
                  ✓ Financiación
                </span>
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-2'
              >
                Encontrá el auto que buscás. Vehículos seleccionados con los
                mejores precios y garantía de calidad.
              </motion.p>

              {/* Botones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2'
              >
                <Link
                  href='/catalogo'
                  className='group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30'
                >
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    Ver Catálogo
                    <svg
                      className='w-5 h-5 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </Link>

                <Link
                  href='/contacto'
                  className='group relative px-8 py-4 bg-transparent backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20'
                >
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    Contactanos
                    <svg
                      className='w-5 h-5 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroHome;
