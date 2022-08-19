import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export const BlogNavbar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a>Tahara Kazuki</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link
            as={() => (
              <Link href="/">
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            )}
          ></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
