import styled from "styled-components";

export const TechWrapper = styled.div`
    height: 500px;
    .container {
        margin: 0 auto;
    }
    .title {
        padding: 63px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        text-align: center;
        color: #000000;
    }
    .tech-bar {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .number {
        font-size: 100px;
        font-weight: 700;
        line-height: 120px;
        text-align: center;
        color: rgba(16, 16, 16, 0.08);
    }
    .logo {
        position: relative;
        bottom: 60px;
    }
    .logo-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 185px ;
    }
    .title-text {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 50px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #101010;
    }
    .content {
        font-size: 12px;
    }
`;