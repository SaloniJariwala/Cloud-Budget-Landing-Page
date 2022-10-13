import styled from "styled-components";

export const ContactWrapper = styled.div`
    height: 500px;
    padding-top: 100px;
    .container {
        margin: 0 auto;
    }
    .title {
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;
        color: #000000;
    }
    .content {
        margin-top: 60px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        text-align: justify;
        color: #000000;
    }
`;

export const FormWrapper = styled.div`
    margin-left: 100px;
    width: 550px;
    .input {
        box-sizing: border-box;
        border: 1px solid #333333;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(19, 39, 67, 0.5);
        border-radius: 6px;
        height: 60px;
        width: 100%;
        margin-bottom: 1.5rem;
    }
    .first-row {
        display: flex;
        justify-content: space-between;
    }
`;

export const Button = styled.button`
    margin-top: 1rem;
    box-sizing: border-box;
    width: 160px;
    height: 50px;
    background: #ED4C5C;
    border: 1.5px solid #ED4C5C;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #FFFFFF;
`;