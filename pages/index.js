import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import { Container,Row,Col } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Realizzazione Siti Web Alessandria</title>
        <meta name="description" content="Sono Alessandro Alessio, Web Designer e Developer e mi occupo di realizzare siti web ed Ecommerce ad Alessandria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="main-wrapper">
        <Container>
          <Row className="heroRow">
              <Col>
                <div className="heroOverlay">
                  <h2>Sono Alessandro.<br></br>
                  Realizzo Siti Web e Software<br></br>
                  per privati e aziende.<br></br>
                  Se vuoi <Link href="/contatti/"><a className="text-dark highlighted">contattami</a></Link>!</h2>
                </div>
              </Col>
          </Row>
        </Container>
        <section className="bg-light">
          <Container fluid>
            <Row>
              <Col md={3}>Cosa faccio</Col>
              <Col md={3}>1</Col>
              <Col md={3}>2</Col>
              <Col md={3}>3</Col>
            </Row>
          </Container>
        </section>
      </div>

      <style jsx>{`
        .main-wrapper{
          border: 1px solid red;
        }
        .heroOverlay{
          padding-top: 10em;
          padding-bottom: 10em;
          background: url('assets/img/page-home/home-me.webp') no-repeat top right;
        }
        .heroOverlay h2{
          font-size: 3em;
        }
      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
