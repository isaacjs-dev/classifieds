import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    border-bottom: 1px solid #CCC;

    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;

        a {
            text-decoration: none;
        }

        .logo {
            flex: 1;
            display: flex;
            align-items: center;
            height: 60px;
            transform: rotate(-10deg);
            margin-top:-50px;


            .letter-01,
            .letter-02,
            .letter-03 {
                font-size: 32px;
                font-weight: 800;
            }
            .letter-01 {
                color: #F00;
               
            }
            .letter-02 {
                color: #0F0;
                font-size: 24px;
                margin-left: -15px;
                margin-right: -15px;
            }
            .letter-03 {
                color: #00F;
                margin-top: -15px;
            }
        }

        nav {
            padding: 10px 0;

            ul, li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            ul {
                display: flex;
                align-items: center;
                height: 40px;
            }

            li {
                margin: 0 20px;

                a {
                    color: #000;
                    font-size: 14px;

                    &:hover {
                        color: #999;
                    }

                    &.button {
                        background-color: #FF8100;
                        border-radius: 4px;
                        color: #FFF;
                        padding: 5px 10px;
                    }

                    &.button:hover { background-color: #E57706}
                }
            }
        }
    }
`;