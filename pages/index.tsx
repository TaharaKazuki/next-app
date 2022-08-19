import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap'

import { PageLayout } from '@/components/PageLayout'
import { BlogNavbar as Navbar } from 'components/Navbar'
import { AuthorInfo } from '@/components/AuthorInfo'
import { CardItem } from '@/components/CardItem'
import { CardListItem } from '@/components/CardListItem'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <AuthorInfo />
      <hr />
      <Row className="mb-5">
        <Col className="md-10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  )
}

export default Home
