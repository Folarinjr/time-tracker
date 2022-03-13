import styled from 'styled-components'

export const SideBarMain = styled.div`
background-color: #0e1e38;
color: #fff;
font-size: 1.5rem;
width: 45%

overflow: hidden;

display: flex;
flex-direction: column;
border-radius: 9px;
`;

export const SideBarHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #34397B;
    padding: 2rem 3rem 5rem 2rem;
    width: 100%;
    border-radius: 9px;
`;

export const SideBarHeaderImage = styled.div`
    position: relative;

    width: 70%;
    aspect-ratio: 1/1;

    img {
        position: absolute;
        top: 0;
        left: 0;

        width: 70%;
        height: auto;

        border: 5px solid #fff;
        border-radius: 50%;
    }
`;


export const SideBarHeaderText = styled.div`
    h1{
        margin: 0;
        margin-bottom: 5rem;
        font-size: 6rem;
    }
    span{
        font-size: 3rem;
    }
`;

export const SideBarText = styled.div`
display: flex;
flex-direction: column;
gap: 2px;

background-color: transparent;
padding: 2rem 3rem 3rem 2rem;

${({timeOfTheDay}) =>
    timeOfTheDay === 'daily' ? 'span:first-child{color: white;}': 
    timeOfTheDay === 'weekly' ? 'span:nth-child(2){color: white;}':
    timeOfTheDay === 'monthly' ? 'span:last-child{color: white;}': ''
}

span{
    font-size: 3rem;
    color: gray;
    transition: color 800ms ease;

    &:hover {
        color: #fff;
        cursor: pointer;
    }
}
`;
