import {Navbar, Container, Nav} from "react-bootstrap"

const NavigatinBar = () => {
	return (
		<Navbar variant="light">
			<Container>
				<Navbar.Brand>Toko-Play</Navbar.Brand>
				<Nav>
					<Nav.Link href='/videos'>Videos</Nav.Link>
					<Nav.Link href="/products">Products</Nav.Link>
					<Nav.Link href="/">Home</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
  )
}

export default NavigatinBar