'use client';

import { company } from '@/app/constants/constants';
import ClockIcon from '@/components/icons/ClockIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactoPage = () => {
  return (
    <>
      <Header />
      <div className=''>
        {/* Hero Section con imagen de fondo */}
        <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
          {/* Imagen de fondo con overlay */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/assets/contacto/contacto-banner.webp'
              alt={`Contacto de ${company.name}`}
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
                Contacto
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
            >
              Contactate con nosotros para obtener más información
            </motion.p>
          </div>
        </section>

        {/* Información de contacto principal */}
        <section className='mt-8 mb-16 md:mt-12 md:mb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='space-y-8 lg:space-y-12'>
              {/* Redes sociales - Grid horizontal en desktop, columna en mobile */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* WhatsApp */}
                <motion.a
                  href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className='group flex flex-col items-center justify-center text-center p-6 md:p-8 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                >
                  <div className='w-16 h-16 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden mb-4'>
                    <span className='relative z-10'>
                      <WhatsappFillIcon className='w-8 h-8 text-white' />
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                  </div>
                  <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors mb-2'>
                    WhatsApp
                  </h3>
                  <p className='text-color-text-light mb-2'>
                    {company.whatsapp[0]}
                  </p>
                  <p className='text-sm text-color-primary font-medium'>
                    Mensaje directo →
                  </p>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href={`https://www.instagram.com/${company.instagram}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='group flex flex-col items-center justify-center text-center p-6 md:p-8 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                >
                  <div className='w-16 h-16 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden mb-4'>
                    <span className='relative z-10'>
                      <InstagramIcon className='w-8 h-8 text-white' />
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                  </div>
                  <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors mb-2'>
                    Instagram
                  </h3>
                  <p className='text-color-text-light mb-2'>
                    @{company.instagram}
                  </p>
                  <p className='text-sm text-color-primary font-medium'>
                    Seguinos →
                  </p>
                </motion.a>

                {/* Ubicación */}
                <motion.a
                  href={company.googlemapsLink || ''}
                  target='_blank'
                  rel='noopener noreferrer'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='group flex flex-col items-center justify-center text-center p-6 md:p-8 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                >
                  <div className='w-16 h-16 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden mb-4'>
                    <span className='relative z-10'>
                      <LocationIcon className='w-8 h-8 text-white' />
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                  </div>
                  <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors mb-2'>
                    Ubicación
                  </h3>
                  <p className='text-color-text-light mb-2 leading-tight'>
                    {company.adress}, {company.city}
                  </p>
                  <p className='text-sm text-color-primary font-medium'>
                    Ver en Google Maps →
                  </p>
                </motion.a>
              </div>

              {/* Horarios */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className='bg-color-bg-secondary rounded-2xl shadow-lg p-8 border border-neutral-500'>
                  <div className='flex items-center mb-6'>
                    <div className='w-12 h-12 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center'>
                      <ClockIcon className='w-6 h-6 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold text-color-title-light ml-4'>
                      Horarios de atención
                    </h3>
                  </div>

                  <div className='relative flex flex-col gap-2 sm:gap-3'>
                    {company.openDays.map((day, index) => (
                      <div key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className='flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-color-bg-secondary-dark/80 to-color-bg-secondary/80 rounded-xl sm:rounded-2xl border border-neutral-800'
                        >
                          <div className='flex items-center space-x-2 sm:space-x-4'>
                            <div className='w-2 h-2 sm:w-3 sm:h-3 bg-color-primary rounded-full shadow-sm'></div>
                            <span className='font-bold text-color-title-light text-sm sm:text-base lg:text-lg'>
                              {day}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Mapa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className='bg-color-bg-secondary rounded-2xl shadow-lg overflow-hidden border border-neutral-500'>
                  <div className='relative'>
                    <iframe
                      className='w-full h-64 md:h-80 lg:h-96'
                      src={`${company.googlemaps}`}
                      width='100%'
                      height='256'
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactoPage;
