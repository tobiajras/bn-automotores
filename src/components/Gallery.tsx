'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <section className='py-16 md:py-24 lg:py-32 relative overflow-hidden'>
      <div className='flex justify-center w-full'>
        <div className='max-w-7xl w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex justify-center'>
          {/* Contenedor con imagen de fondo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='relative w-full max-w-[1000px] md:aspect-[5/4] rounded-2xl md:rounded-3xl overflow-hidden'
          >
            {/* Imagen de fondo - solo en desktop */}
            <div className='hidden md:block absolute inset-0'>
              <Image
                src='/assets/gallery/gallery-1000-1.webp'
                alt='Showroom de {company.name}'
                fill
                className='object-cover'
                priority
                sizes='(max-width: 768px) 0vw, (max-width: 1200px) 1000px, 1000px'
              />
              {/* Overlay oscuro para legibilidad */}
              <div className='absolute inset-0 bg-black/30'></div>
            </div>

            {/* Cartel sobre la imagen */}
            <div className='relative md:absolute inset-0 flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                className='bg-black md:bg-black/50 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-10 lg:p-12 w-full max-w-[90%] sm:max-w-md md:max-w-xl lg:max-w-2xl shadow-2xl flex flex-col items-center text-center'
              >
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white'>
                  Confianza y Experiencia
                </h2>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-8'>
                  Años de trayectoria en el mercado nos respaldan. Conocé
                  nuestra historia y descubrí por qué somos la mejor opción para
                  encontrar tu próximo vehículo.
                </p>
                <div className='flex flex-col md:flex-row gap-3 sm:gap-4 items-center'>
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div className='text-left'>
                      <p className='text-white font-semibold text-xs sm:text-sm md:text-base'>
                        Años de Experiencia
                      </p>
                      <p className='text-white/70 text-xs sm:text-sm'>
                        Trayectoria comprobada
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <svg
                        className='w-5 h-5 sm:w-6 sm:h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                        />
                      </svg>
                    </div>
                    <div className='text-left'>
                      <p className='text-white font-semibold text-xs sm:text-sm md:text-base'>
                        Confianza Garantizada
                      </p>
                      <p className='text-white/70 text-xs sm:text-sm'>
                        Transparencia total
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
