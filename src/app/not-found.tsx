import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-tertiary mb-4">404</h1>
        <h2 className="text-2xl text-primary mb-6">Página não encontrada</h2>
        <p className="text-lg text-secondary mb-8 max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="bg-tertiary text-primary px-6 py-3 rounded-lg hover:bg-secondary hover:text-tertiary transition-colors duration-300"
        >
          Voltar ao início
        </Link>
      </div>
    </Container>
  )
}
