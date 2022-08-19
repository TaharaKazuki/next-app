import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { BlogNavbar as Navbar } from 'components/Navbar'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const PageLayout: FC<Props> = ({ className, children }) => {
  return (
    <Container>
      <Navbar />
      <div className={`page-wrapper ${className}`}>{children}</div>
      <footer className="page-footer">
        <div>
          <a href="#">github</a>
          {' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  )
}
