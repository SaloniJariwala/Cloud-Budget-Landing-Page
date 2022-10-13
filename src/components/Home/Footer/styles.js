import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 480px;
    background: #FAFAFA;
    padding-top: 85px;
    .container {
        margin: 0 auto;
    }
    .title {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #101010;
    }
    .content {
        /* margin-top: 30px; */
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #101010;
    }
    .logo-bar {
        margin-top: 20px;
        width: 60px;
        display: flex;
        justify-content: space-between;
    }
    .svg {
        cursor: pointer;
    }
`;