import { Button } from "react-bootstrap";
import styled from "styled-components";

export const BannerWrapper = styled.div`
    height: 782px;
    background-image: url('/images/bg.jpg');
    background-size: contain;
    .container{
        margin: 0 auto;
    }
    .hero-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 85px;
    }
    .title {
        width: 578px;
        height: 86px;
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 86px;
        display: inline-block;
        align-items: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .title-text {
        padding: 0 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
        text-align: center;
        color: #FFFFFF;
    }
`;

export const HeroButton = styled(Button)`
    height: 50px;
    width: 160px;
    background-color: white;
    color: #ED4C5C;
    border-radius: 6px;
    margin-top: 39px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    &:hover {
        background-color: white;
        columns: #ED4C5C;
    }
`;