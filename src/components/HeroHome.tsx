'use client';

import { company } from '@/app/constants/constants';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';

const HeroHome = () => {
  return (
    <section
      id='inicioSection'
      className='flex justify-center overflow-hidden bg-color-bg-secondary-dark relative'
    >
      {/* Fondo con carousel */}
      <div className='absolute inset-0 w-full h-full'>
        <HeroCarousel />
        {/* Overlay gradiente mejorado */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 z-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 z-10'></div>
      </div>

      {/* Fondo adicional para la sección */}

      {/* Contenido principal */}
      <div className={`max-w-[1920px] w-full flex flex-col items-center z-10`}>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[400px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <div className='text-center'>
              {/* Título principal */}
              <div className=''>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'
                >
                  <span className='bg-gradient-to-r from-white  to-neutral-300 bg-clip-text text-transparent'>
                    Concesionaria
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'
                >
                  <span className='bg-gradient-to-r from-white  to-neutral-300 bg-clip-text text-transparent'>
                    Autos y Motos
                  </span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='flex items-center justify-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-semibold md:mt-1'
                >
                  <span className='text-color-text-light'>Usados</span>
                  <span className='text-color-title-light'>•</span>
                  <span className='text-color-text-light'>0km</span>
                </motion.div>
              </div>

              {/* Botones */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex items-center justify-center gap-4 sm:gap-6 mt-2 md:mt-4'
              >
                <Link
                  href='/catalogo'
                  className='group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/25 rounded-xl'
                >
                  <span className='relative z-10'>Ver Catálogo</span>
                  <div className='absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </Link>

                <Link
                  href='/contacto'
                  className='group relative px-6 md:px-8 py-3 md:py-4 bg-black/5 backdrop-blur-sm border-2 border-white text-white font-semibold md:text-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white/25 hover:text-black rounded-xl'
                >
                  <span className='relative z-10'>Contactanos</span>
                </Link>
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-lg sm:text-xl md:text-2xl text-color-text-light max-w-3xl mx-auto leading-relaxed mt-3 md:mt-5 px-3'
              >
                En {company.name} encontrás el auto que buscas. Vehículos
                seleccionados con los mejores precios. ¡Te esperamos!
              </motion.p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
