import React from 'react'
import { Container } from 'react-bootstrap'
// import './footer.css';
// import '.style.css'

const footer = (props) => {
    const first = {
        color: "red",
        backgroundColor: "gray",
        display: "flex",
        justifyItems: "center"
    }
    // const { details1, details2, details3 } = props;
    return (

        <footer className="bg-light">
            {/* <Container style={first}> */}
            <div className="container-fluid" style={first}>
                <Container className=''>
                hello
                </Container>
                <Container className=''>
                   world
                </Container>
                <Container className=''>
              welcome
            </Container>
            </div>

           
            {/* </Container> */}

        </footer>


    )
}

export default footer
