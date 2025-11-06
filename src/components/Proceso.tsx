'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { company } from '@/app/constants/constants';

const beneficios = [
  {
    titulo: 'Mejor precio garantizado',
    descripcion:
      'Con nuestro modelo de negocios y trayectoria en el mercado nos ahorramos costos operativos para garantizarte un precio acorde.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
      </svg>
    ),
  },
  {
    titulo: 'Revisión vehicular',
    descripcion:
      'Todos los vehículos pasan por una exhaustiva inspección para garantizar un óptimo funcionamiento de los vehículos.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
      </svg>
    ),
  },
  {
    titulo: 'Documentación ágil',
    descripcion:
      'Te ofrecemos operaciones rápidas para que puedas disfrutar de tu nuevo vehículo sin preocupaciones extra.',
    icono: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-full h-full'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' />
      </svg>
    ),
  },
];

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 bg-color-bg-secondary-dark'>
      <div className='flex justify-center w-full'>
        <div className='max-w-7xl w-full flex flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          {/* Layout alternado - zigzag */}
          <div className='space-y-8 md:space-y-12 lg:space-y-16'>
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Lado izquierdo - Icono y número */}
                <div className='flex-shrink-0 w-full md:w-auto flex justify-center'>
                  <div className='relative'>
                    {/* Número grande de fondo */}
                    <div className='absolute -top-12 -left-12 md:-top-16 md:-left-16 lg:-top-20 text-8xl md:text-9xl font-black text-white/30 select-none'>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {/* Contenedor del icono */}
                    <div className='relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300'>
                      <div className='w-12 h-12 md:w-16 md:h-16 text-black'>
                        {b.icono}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Línea divisoria vertical (solo desktop) */}
                <div className='hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent'></div>

                {/* Lado derecho - Contenido */}
                <div
                  className={`flex-1 text-center ${
                    i % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white'>
                    {b.titulo}
                  </h3>
                  <p
                    className={`text-base md:text-lg leading-relaxed text-white/80 max-w-2xl ${
                      i % 2 !== 0 ? 'md:ml-auto' : ''
                    }`}
                  >
                    {b.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
