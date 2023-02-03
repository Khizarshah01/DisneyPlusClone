import React from 'react'
import styled from 'styled-components'


function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            
            <Wrap>
                <img src ="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTc1OTI5OTYzNzg0MDYw/disney-plus-animated-movies-feature.webp" />
            </Wrap>
            <Wrap>
                <img src ="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTc1OTI5OTYzNzg0MDYw/disney-plus-animated-movies-feature.webp" />
            </Wrap>
            <Wrap>
                <img src ="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTc1OTI5OTYzNzg0MDYw/disney-plus-animated-movies-feature.webp" />
            </Wrap>
            <Wrap>
                <img src ="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1240/MTkwNTc1OTI5OTYzNzg0MDYw/disney-plus-animated-movies-feature.webp" />
            </Wrap>           
        </Content>
    </Container>

  )
}

export default Movies

const Container = styled.div`

`

const  Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`

    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
 
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
      }
  
      `
    
