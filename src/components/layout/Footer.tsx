import { useTheme } from '@/hooks/useTheme'
import Container from './Container'

export default function Footer() {
  const { isDarkTheme } = useTheme()
  return (
    <div
      className={`w-full h-auto ${isDarkTheme ? 'bg-primary' : 'bg-secondary'} border-t-2 border-tertiary`}
    >
      <Container className="flex justify-center items-center p-2">
        <p className={`${!isDarkTheme ? 'text-primary' : ''}`}>
          Phillip Menezes • Desenvolvedor Front-End
        </p>
      </Container>
    </div>
  )
}
