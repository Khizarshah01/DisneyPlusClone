import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png"/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-template-columns:repeat(5,minmax(0, 1fr));  
    grid-gap: 25px;
    `

const Wrap = styled.div`

    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
      
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    
    }
`