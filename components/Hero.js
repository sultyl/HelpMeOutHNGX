import styled from "styled-components"
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = styled.button`
    display: flex;
    width: 45%;
    font-size: 18px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--primary-main, #120B48);
    color: #FFFFFF;
    margin-top: 28px;
    padding: 22px var(--Outer-Radius, 24px);
    @media screen and (max-width: 700px) {
        font-size: 14px;
        width: 60%;
        padding: 22px var(--Outer-Radius, 24px);
    }
`;

export default function Hero() {
    return (
        <div className="flex lg:flex-row xsm:flex-col my-24 gap-3 items-center">
            <div className="flex flex-col w-full lg:gap-5">
                <h2 className="text-[#141414] text-lg lg:text-[64px] font-bold leading-[64px]">Show Them Don&apos;t Just Tell</h2>
                <p className="text-[##3D3D3D] text-sm lg:text-xl leading-[28px]">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                <Button>
                    Install HelpMeOut
                    <AiOutlineArrowRight />
                </Button>
            </div>
            <div>
                <img src="/hero_image.png" alt="" className="w-full"/>
            </div>
        </div>    
    )
  }