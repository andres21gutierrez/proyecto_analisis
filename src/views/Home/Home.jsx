import styled from "styled-components";

export default function Home (){
    return(
    <BgTransform>
        <div> HOME</div>
    </BgTransform>
    )
}

const BgTransform = styled.div`
    div{
        background: linear-gradient(to right,#4299e1 ,#8b0000 );
        width: 100vw;
        height: 100vh;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`