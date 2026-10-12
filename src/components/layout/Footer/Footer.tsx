import { Container } from '@/components/ui/Container'
import { SITE } from '@/content/site'
import './Footer.css'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <span className="footer__brand">{SITE.name}</span>
        <span className="footer__meta">ИИ, процессы и разработка</span>
        <span className="footer__copy">© {COPYRIGHT_YEAR}</span>
      </Container>
    </footer>
  )
}
