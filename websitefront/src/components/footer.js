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
    const { details1, details2, details3 } = props;
    return (

        <footer className="bg-light">
            {/* <Container style={first}> */}
            <div className="container-fluid" style={first}>
                <Container className=''>
                    {details1}
                </Container>
                <Container className=''>
                    {details2}
                </Container>
                <Container className=''>
                {details3}
            </Container>
            </div>

           
            {/* </Container> */}

        </footer>


    )
}

export default footer
