'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4 md:mb-6'
          >
            <span className='text-base md:text-lg text-white/90 font-medium'>
              Sobre Nosotros
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Tu socio de confianza para encontrar el vehículo perfecto
          </motion.p>
        </div>
      </section>

      {/* Sección de historia */}
      <section className='py-8 md:py-12'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-center justify-center'>
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='mx-auto relative max-w-md lg:max-w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10 group'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt={`Equipo de ${company.name}`}
                  fill
                  className='object-cover w-full h-full'
                />
              </div>
              {/* Elemento decorativo */}
              <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full -z-10 hidden lg:block'></div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='max-w-lg flex flex-col items-center lg:items-start justify-center text-center lg:text-left'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-color-title-light mb-6 relative'>
                {company.name}
                <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block'></div>
              </h2>
              <div className='space-y-5 text-color-text-light text-lg leading-relaxed'>
                <p>
                  En {company.name}, nos especializamos en hacer realidad el
                  sueño de cada cliente de encontrar su vehículo ideal. Con un
                  catálogo cuidadosamente seleccionado de vehículos usados y
                  0km, ofrecemos opciones para todos los gustos y presupuestos.
                </p>
                <p>
                  Nuestro compromiso va más allá de la venta: brindamos
                  asesoramiento personalizado, facilitamos procesos de
                  financiamiento accesibles y garantizamos la calidad de cada
                  unidad. Trabajamos con transparencia y dedicación para que tu
                  experiencia sea excepcional desde el primer contacto.
                </p>
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 pt-2'>
                  <span className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-lg font-medium'>
                    ✓ Vehículos Certificados
                  </span>
                  <span className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 text-lg font-medium'>
                    ✓ Financiación Flexible
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className='mt-8 md:mt-12 pb-16 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-5 md:mb-8'
          >
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-color-title-light mb-2 md:mb-3'>
              Valores que nos definen
            </h2>
            <p className='text-color-text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              Los pilares que sostienen nuestro compromiso con la calidad y la
              satisfacción del cliente. Cada valor refleja nuestra dedicación a
              brindar una experiencia excepcional en cada paso del proceso.
            </p>
          </motion.div>

          {/* Valores Grid */}
          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            {/* Valor 1 - Excelencia */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-white/10 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-xl h-full border border-white/20'>
                {/* Fondo decorativo */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16'></div>
                {/* Línea decorativa inferior */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

                <div className='relative p-8 lg:p-10'>
                  {/* Icono */}
                  <div className='w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-8'>
                    <svg
                      className='w-10 h-10 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                      />
                    </svg>
                  </div>

                  {/* Contenido */}
                  <h3 className='text-2xl font-bold text-color-title-light mb-4'>
                    Excelencia
                  </h3>
                  <p className='text-color-text-light leading-relaxed text-base lg:text-lg'>
                    Cada vehículo en nuestro catálogo pasa por un riguroso
                    proceso de selección y revisión. Nos aseguramos de que solo
                    ofrezcamos unidades en óptimas condiciones, con historial
                    verificado y garantía de calidad. La excelencia no es un
                    objetivo, es nuestro estándar.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Valor 2 - Confianza */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-white/10 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-xl h-full border border-white/20'>
                {/* Fondo decorativo */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16'></div>
                {/* Línea decorativa inferior */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

                <div className='relative p-8 lg:p-10'>
                  {/* Icono */}
                  <div className='w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-8'>
                    <svg
                      className='w-10 h-10 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>

                  {/* Contenido */}
                  <h3 className='text-2xl font-bold text-color-title-light mb-4'>
                    Confianza
                  </h3>
                  <p className='text-color-text-light leading-relaxed text-base lg:text-lg'>
                    La confianza se construye con acciones, no con palabras. Por
                    eso, cada transacción se realiza con total transparencia:
                    información clara sobre el estado del vehículo, procesos
                    documentales simples y un equipo siempre disponible para
                    resolver tus dudas. Tu tranquilidad es nuestra prioridad.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Valor 3 - Innovación */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='bg-white/10 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-xl h-full border border-white/20'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16'></div>
                {/* Línea decorativa inferior */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

                <div className='relative p-8 lg:p-10'>
                  {/* Icono */}
                  <div className='w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-8'>
                    <svg
                      className='w-10 h-10 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>

                  {/* Contenido */}
                  <h3 className='text-2xl font-bold text-color-title-light mb-4'>
                    Innovación
                  </h3>
                  <p className='text-color-text-light leading-relaxed text-base lg:text-lg'>
                    Estamos en constante evolución para ofrecerte las mejores
                    soluciones. Desde plataformas digitales que facilitan la
                    búsqueda hasta opciones de financiamiento adaptadas a tus
                    necesidades. Innovamos para que encuentres tu vehículo ideal
                    de la forma más simple y eficiente posible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
