import Link from "next/link";
import Image from "next/image";
import { Container,Row,Col,Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <Container class="header-wrapper mt-5 mb-5">
            <Row className="align-content-center">
                <Col md={1}>
                    <Image 
                        src="/assets/img/header/logo_50x50.webp"
                        alt="Realizzazione Siti Web"
                        width={50}
                        height={50}
                        />
                </Col>
                <Col md={8} className="d-none d-md-inline-block">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/servizi/" className="text-dark ls-1 text-uppercase">Servizi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio/" className="text-dark ls-1 text-uppercase">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/blog/" className="text-dark ls-1 text-uppercase">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contatti/" className="text-dark ls-1 text-uppercase">Contatti</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col md={3}>
                    <Link href="/preventivo/">
                        <a className="btn btn-dark border-3 rounded-pill text-uppercase pl-4 pr-4">Preventivo gratuito</a>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
} 