import styled from 'styled-components';

export const StyledHomePage = styled.div`
    
`

export const Banner = styled.section`
    background-color:#3d9240;
    height:50vh;
    display:flex;
    margin-top: 60px;
    background-image: linear-gradient(to bottom, #3d9240, #0a290d);
`

export const ImgBanner = styled.img`
    width:40%;
    object-fit:contain;
`

export const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    width:60%;
    align-items:flex-start;
    padding:1%;
    margin: 2%;
    justify-content:center;

`

export const TextTitle = styled.h1`
    font-size:2.5rem;
    margin:0;
    color:#fff;
    
    @media(min-width:768px){
        font-size:5rem;
    }
`

export const TextSubtitle = styled.h2`
    font-size:1.2rem;
    color:#dadab1;
    margin:5% 0;

     @media(min-width:768px){
        font-size:2rem;
    }
`

export const Container = styled.div`
    width:90%;
    margin: 0 5%;
    height:100%;
    display:flex;
    flex-direction:row;

  @media(min-width:768px){
    width:70%;
    margin: 0 15%;
  }
`

export const ProductTitle = styled.h2`
    margin-top:50px;
    margin-bottom:15px; 
`

export const ShopButton = Link => {
    return  styled(Link)`
            color:#176d1a;
            background-color:#dadab1;
            max-width:150px;
            padding:5px 30px;
            text-align:center;
            font-size:18px;
            outline:solid 2px #dadab1;
            border:solid 2px #3d9240;
            `;
}

export const ShopContainer = styled.section`
    display:flex;
    flex-direction:column;
    margin: 60px 10% 0 5%;
    @media(min-width:768px){
        width:70%;
        margin: 0 15%;
        display:flex;
        left: 0;
    }
`

export const ProductList = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;

    @media(min-width:768px){
        width:100%;
    }
`