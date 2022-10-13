import styled from "styled-components";

export const Navlink = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 0 13px;
    text-transform: uppercase;
`;

export const NavLinkWrapper = styled.div`
    .nav-link {
        display: inline-block;
        position: relative;
        color: #fff;
    }
    .nav-link:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    .nav-link:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;