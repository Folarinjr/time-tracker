import styled from 'styled-components';

export const StyleContent = styled.div`
    background-color: ${({title})=>
        title === 'Work' ? 'hsl(15, 100%, 70%)': 
        title === 'Play' ? 'hsl(195, 74%, 62%)':
        title === 'Study' ? 'hsl(348, 100%, 68%)':
        title === 'Exercise' ? 'hsl(145, 58%, 55%)':
        title === 'Social' ? 'hsl(264, 64%, 52%)':
        title === 'Self Care' ? 'hsl(43, 84%, 65%)': ''};

    border-radius: 1.5rem;
    overflow: hidden;
    min-height: 25rem;
    position: relative;
    cursor: pointer;  
    color: white;
`;
export const StyleContentHeader = styled.img`
    position: absolute;
    top: -.6rem;
    right: 0;

    z-index: 0;
`;

export const StyleContentTitle = styled.div`
    background-color: hsl(235, 46%, 20%);
    width: 100%;
    border-radius: 1.5rem;
    transition: all .4s;
    
    position: absolute;
    top: 5rem;
    bottom: 0;

    z-index: 3;

    div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 2rem 1rem 2rem;
        
        h2 {
          font-size: 1.5rem;
          font-weight: 500;
        }
        img {
          cursor: pointer;
        }
      }

    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem 2rem 1rem 2rem;
        flex-direction: column;
      }

    &:hover{
      background-color: #34397B;
    }

   
`;

export const StyledCardCurrent = styled.h3`
  font-size: 4rem;
  font-weight: 300;
  padding-bottom: 1rem;
  margin-top: 1.2rem;
`;

export const StyledCardPrevious = styled.span`
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.7;
`;




    //veryDarkBlue: "hsl(226, 43%, 10%)",
    //darkBlue: "hsl(235, 46%, 20%)",
    //desaturatedBlue: "#34397B",
    //paleBlue: "hsl(236, 100%, 87%)",