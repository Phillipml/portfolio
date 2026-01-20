import Image from 'next/image'
import ErrorImage from '../ui/ErrorImage'
import LoadingSpinner from '../ui/LoadingSpinner'
import Container from './Container'
import Link from 'next/link'
import { useGetUserQuery } from '@/services/api'
import ThemeButton from './ThemeButton'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'

function Header() {
  const { data, error, isLoading } = useGetUserQuery()
  const { isDarkTheme } = useTheme()

  if (isLoading)
    return (
      <>
        <LoadingSpinner />
      </>
    )
  if (error)
    return (
      <ErrorImage className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10" />
    )
  const socialLinks = [
    {
      href: data?.whatsapp,
      icon: FaWhatsapp,
      title: 'WhatsApp'
    },
    {
      href: data?.linkedin,
      icon: FaLinkedin,
      title: 'LinkedIn'
    },
    {
      href: data?.github,
      icon: FaGithub,
      title: 'GitHub'
    }
  ]
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-2 ${isDarkTheme ? 'bg-primary' : 'bg-secondary'} border-b-2 border-tertiary`}
    >
      <Container>
        <div className="w-full max-w-5xl m-auto grid grid-cols-3 items-center gap-2 lg:gap-4">
          <Link
            href="/"
            className="relative w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center"
          >
            {data?.avatar_url ? (
              <Image
                src={data.avatar_url}
                alt="imagem perfil"
                fill
                className="relative z-10 rounded-full ring-4 ring-transparent animate-fade-in object-cover"
              />
            ) : (
              <ErrorImage />
            )}
          </Link>
          <div className="flex justify-center">
            <ul className="flex gap-2 lg:gap-4">
              {socialLinks.map(({ href, icon: Icon, title }) => (
                <li key={title}>
                  <Link
                    href={href || '#'}
                    className={`bg-tertiary  ${isDarkTheme ? 'text-primary' : 'text-secondary'} w-10 h-10 lg:w-12 lg:h-12 rounded-full hover:bg-secondary hover:text-tertiary transition-colors duration-300 flex items-center justify-center`}
                    target="_blank"
                    title={title}
                  >
                    <Icon size={16} className="lg:w-5 lg:h-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <ThemeButton />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Header
