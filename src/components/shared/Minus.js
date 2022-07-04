import styled from "styled-components";

export default function Logo(){
    return(
        <Container>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9922 11.7188H8.00781C7.90039 11.7188 7.8125 11.8066 7.8125 11.9141V13.0859C7.8125 13.1934 7.90039 13.2812 8.00781 13.2812H16.9922C17.0996 13.2812 17.1875 13.1934 17.1875 13.0859V11.9141C17.1875 11.8066 17.0996 11.7188 16.9922 11.7188Z" fill="white"/>
            <path d="M12.5 1.5625C6.45996 1.5625 1.5625 6.45996 1.5625 12.5C1.5625 18.54 6.45996 23.4375 12.5 23.4375C18.54 23.4375 23.4375 18.54 23.4375 12.5C23.4375 6.45996 18.54 1.5625 12.5 1.5625ZM12.5 21.582C7.48535 21.582 3.41797 17.5146 3.41797 12.5C3.41797 7.48535 7.48535 3.41797 12.5 3.41797C17.5146 3.41797 21.582 7.48535 21.582 12.5C21.582 17.5146 17.5146 21.582 12.5 21.582Z" fill="white"/>
            </svg>

        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color: #fff;
    svg{
        width: 22px;
        height: 22px;
    }

`;