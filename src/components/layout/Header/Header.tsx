import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { NAV_LINKS, SITE } from '@/content/site'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <Container className="header__inner">
        <a className="header__logo" href="#top">
          {SITE.name}
        </a>
        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="header__cta" href="#contact" variant="primary">
            Связаться
          </Button>
        </nav>
      </Container>
    </header>
  )
}
