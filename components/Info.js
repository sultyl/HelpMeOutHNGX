import { BsFillRecordCircleFill, BsFillSendFill } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import styled from "styled-components";

const H2 = styled.h2`
    color: #1B233D;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const P = styled.p`
    color: var(--Grey, #616163);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 151.3%;
`;

export default function Info() {
    return (
        <div className="my-36">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-[#141414] font-bold lg:text-[40px] xsm:text-xl">How it works</h2>
            </div>
            <div className="mt-[64px] flex lg:flex-row xsm:flex-col items-center gap-14">
                    <div className="flex flex-col gap-6 text-center justify-center items-center">
                        <div className="bg-[#413C6D] rounded-full px-5 py-1 flex justify-center items-center w-8 mt-2">
                           <h2 className="text-white font-semibold text-2xl">1</h2>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                        <img src="/info_image.png" alt=""/>
                    </div>
                    <div className="flex flex-col gap-6 text-center justify-center items-center">
                        <div className="bg-[#413C6D] rounded-full px-5 py-1 flex justify-center items-center w-8 mt-2">
                           <h2 className="text-white font-semibold text-2xl">2</h2>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                        <img src="/info_image.png" alt=""/>
                    </div>
                    <div className="flex flex-col gap-6 text-center justify-center items-center">
                        <div className="bg-[#413C6D] rounded-full px-5 py-1 flex justify-center items-center w-8 mt-2">
                           <h2 className="text-white font-semibold text-2xl">3</h2>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                        <img src="/info_image.png" alt=""/>
                    </div>
            </div>
        </div>    
    )
  }