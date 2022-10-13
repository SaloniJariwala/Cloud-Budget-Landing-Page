import styled from "styled-components";

export const FeatureWrapper = styled.div`
    background-color: #fafafa;
    height: 660px;
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
    .feature-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .feature-bg {
        width: 400px;
        height: 250px;
        border-radius: 8px;
    }
    .info {
        padding: 30px;
        width: 350px;
        height: 210px;
        background: #FFFFFF;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        position: relative;
        top: 160px;
        left: 25px;
    }
    .info-title {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #101010;
    }
    .info-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .info-text {
        margin-top: 20px;
        padding-bottom: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
        color: #101010;
    }
    .read-more {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
    }
`; 