'use client';

import { navigation } from '@/app/constants/constants';
import { company } from '@/app/constants/constants';

import Image from 'next/image';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

import Link from 'next/link';
import LocationIcon from './icons/LocationIcon';
import WhatsappFillIcon from './icons/WhatsappFillIcon';
import EmailFillIcon from './icons/EmailFillIcon';
import OnlymotorsLogo from './icons/OnlymotorsLogo';

const Footer = () => {
  return (
    <div className='relative'>
      <footer
        id='contactoSection'
        className='bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white relative'
      >
        <div className='relative z-10'>
          {/* Sección principal */}
          <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
              {/* Columna 1 - Logo y descripción */}
              <div className='lg:col-span-2'>
                <div className='mb-6'>
                  {company.favicon ? (
                    <div className='w-48 sm:w-52 md:w-56 h-14 md:h-16'>
                      <Image
                        className='w-full h-full object-contain object-left'
                        src='/assets/company/logo.webp'
                        alt={`${company.name} logo`}
                        width={288}
                        height={72}
                      />
                    </div>
                  ) : (
                    <div className='w-48 sm:w-52 md:w-56 h-14 md:h-16'>
                      <Image
                        className='w-full h-full object-contain object-left'
                        src='/assets/company/logo.webp'
                        alt={`${company.name} logo`}
                        width={288}
                        height={72}
                      />
                    </div>
                  )}
                </div>

                <p className='text-color-text-light text-sm lg:text-base mb-6 max-w-sm leading-relaxed'>
                  {company.footer}
                </p>

                {/* Redes sociales */}
                <div className='flex gap-4'>
                  {company.instagram && (
                    <a
                      href={`https://www.instagram.com/${company.instagram}/`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110'
                    >
                      <InstagramIcon className='w-5 h-5 text-white' />
                    </a>
                  )}
                  {company.facebook && (
                    <a
                      href={`${company.facebook}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110'
                    >
                      <FacebookIcon className='w-5 h-5 text-white' />
                    </a>
                  )}
                  {company.whatsapp && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110'
                    >
                      <WhatsappFillIcon className='w-5 h-5 text-white' />
                    </a>
                  )}
                </div>
              </div>

              {/* Columna 2 - Navegación */}
              <div>
                <h4 className='text-white font-semibold text-lg mb-6 relative'>
                  Navegación
                  <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-color-primary to-color-secondary-dark'></div>
                </h4>
                <ul className='space-y-3'>
                  {navigation.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={`${link.url}`}
                        className='text-color-text-light hover:text-color-title-light transition-colors duration-300 text-sm lg:text-base relative group'
                      >
                        <span className='relative'>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna 3 - Contacto */}
              <div>
                <h4 className='text-white font-semibold text-lg mb-6 relative'>
                  Contacto
                  <div className='absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-color-primary to-color-secondary-dark'></div>
                </h4>

                <div className='flex flex-col gap-3'>
                  {/* Dirección */}
                  {(company.adress || company.city) && (
                    <div className='flex items-center gap-3'>
                      <div className='p-2.5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <LocationIcon className='w-5 h-5 text-white' />
                      </div>
                      <Link
                        href={company.googlemapsLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-color-text-light text-sm lg:text-base hover:text-color-title-light transition-colors duration-300'
                      >
                        <span>{company.adress && `${company.adress}, `}</span>
                        <span>{company.city && `${company.city}`}</span>
                      </Link>
                    </div>
                  )}

                  {/* WhatsApp */}
                  {company.whatsapp && (
                    <div className='flex flex-col gap-3'>
                      {company.whatsapp.map((whatsappNumber, idx) => (
                        <a
                          key={idx}
                          href={`https://api.whatsapp.com/send?phone=549${whatsappNumber}&text=Hola! Quería hacer una consulta`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-3 text-color-text-light hover:text-color-title-light transition-colors duration-300 text-sm lg:text-base group'
                        >
                          <div className='p-2.5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0'>
                            <WhatsappFillIcon className='w-5 h-5 text-white' />
                          </div>
                          <span className=''>{whatsappNumber}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Instagram */}
                  {company.instagram && (
                    <div className='flex items-center gap-3'>
                      <div className='p-2.5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <InstagramIcon className='w-5 h-5 text-white' />
                      </div>
                      <a
                        href={`https://www.instagram.com/${company.instagram}/`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-color-text-light hover:text-color-title-light transition-colors duration-300 text-sm lg:text-base'
                      >
                        @{company.instagram}
                      </a>
                    </div>
                  )}

                  {/* Email */}
                  {company.email && (
                    <div className='flex items-center gap-3'>
                      <div className='p-2.5 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <EmailFillIcon className='w-5 h-5 text-white' />
                      </div>
                      <a
                        href={`mailto:${company.email}`}
                        className='text-color-text-light hover:text-color-title-light transition-colors duration-300 text-sm lg:text-base'
                      >
                        {company.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sección inferior */}
          <div className='border-t border-white/10'>
            <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-8 pb-12'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='text-color-text-light text-sm lg:text-base'>
                  <span>
                    © {new Date().getFullYear()} {company.name}. Todos los
                    derechos reservados.
                  </span>
                </div>

                <div className='flex items-center gap-1.5'>
                  <span
                    className={`${
                      company.darkmode
                        ? 'text-color-text-light'
                        : 'text-color-text'
                    }`}
                  >
                    Desarrollado por:
                  </span>
                  <a
                    href='https://www.onlymotors.com.ar/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <OnlymotorsLogo
                      className='w-24 md:w-28 hover:opacity-80 transition-opacity duration-300'
                      gradientStart='#ffffff'
                      gradientEnd='#A1A1A1'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
