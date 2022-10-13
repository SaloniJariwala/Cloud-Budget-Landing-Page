import styled from "styled-components";

export const VideoWrapper = styled.div`
    padding: 95px 0;
    height: 500px;
    .container {
        margin: 0 auto;
    }
    .section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .title {
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        color: #000000;
    }
    .left-text {
        margin-top: 50px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        text-align: justify;
        color: #000000;
    }
    .learn-more {
        color: #ED4C5C;
        height: 20px;
        text-decoration: none;
    }
    .video {
        background-image: url('images/Video_bg.png');
        width: 445px;
        height: 311px;
    }
    .play-button {
        position: relative;
        top: 123px;
        right: 32px;
        cursor: pointer;
    }
`;