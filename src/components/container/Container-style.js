import styled from "styled-components";

export const ContainerStyle = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: grid;
grid-template-columns: 30% 60%;
grid-gap: 5%;

width: 50%;
`;


//.container{
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    transform: translate(-50%, -50%);
//  
//    display: grid;
//    grid-template-columns: repeat(2, 1fr);
//    grid-gap: 2.5rem;
//}