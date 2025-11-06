'use client';

import { preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    if (activeAnswer !== id) {
      setActiveAnswer(id);
    }
  };

  return (
    <section
      id='preguntasSection'
      className='py-16 md:py-24 lg:py-32 bg-color-bg-secondary-dark relative overflow-hidden'
    >
      <div className='flex justify-center w-full'>
        <div className='max-w-6xl w-full flex flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          {/* Título y subtítulo */}
          <div className='text-center mb-12 md:mb-16 lg:mb-20'>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4'
            >
              <span className='bg-gradient-to-r from-white via-white to-neutral-200 bg-clip-text text-transparent'>
                Preguntas Frecuentes
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className='text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed'
            >
              Resolvemos todas tus dudas sobre nuestros servicios y procesos de
              compra
            </motion.p>
          </div>

          {/* Grid de preguntas */}
          <div className='space-y-4 md:space-y-6'>
            {preguntas.map((pregunta, index) => (
              <motion.div
                key={pregunta.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  onClick={() => toggleAnswer(pregunta.id)}
                  className={`relative rounded-xl md:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden
                    ${
                      activeAnswer === pregunta.id
                        ? 'bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  {/* Contenido principal */}
                  <div className='p-5 md:p-6 lg:p-8'>
                    <div className='flex items-start justify-between gap-4'>
                      <h4
                        className={`flex-1 text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300
                         ${
                           activeAnswer === pregunta.id
                             ? 'text-white'
                             : 'text-white/90'
                         }`}
                      >
                        {pregunta.question}
                      </h4>

                      {/* Botón de toggle */}
                      <div className='flex-shrink-0'>
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300
                          ${
                            activeAnswer === pregunta.id
                              ? 'bg-white text-black rotate-180'
                              : 'bg-white/10 text-white'
                          }`}
                        >
                          <motion.svg
                            animate={{
                              rotate: activeAnswer === pregunta.id ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: 'easeInOut',
                            }}
                            className='w-5 h-5 md:w-6 md:h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 9l-7 7-7-7'
                            />
                          </motion.svg>
                        </div>
                      </div>
                    </div>

                    {/* Contenido expandible */}
                    <AnimatePresence>
                      {activeAnswer === pregunta.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                          }}
                          className='overflow-hidden'
                        >
                          <div className='mt-6 pt-6 border-t border-white/20'>
                            <p className='text-base md:text-lg leading-relaxed text-white/80'>
                              {pregunta.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
