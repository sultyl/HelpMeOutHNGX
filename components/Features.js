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
    width: 80%;
`;

export default function Features() {
    return (
        <div className="my-36">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-[#141414] font-bold lg:text-[40px] xsm:text-xl">Features</h2>
                <p className="text-[#616163] lg:text-xl xsm:text-sm">Key Highlights of Our Extension</p>
            </div>
            <div className="mt-[64px] flex lg:flex-row xsm:flex-col items-center gap-14">
                <div className="w-full ">
                    <div className="flex gap-6">
                        <div className="bg-[#413C6D] rounded-full p-2 flex justify-center items-center h-1/2 mt-2">
                           <BsFillRecordCircleFill className="text-white"/>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-[#413C6D] rounded-full p-2 flex justify-center items-center h-1/2 mt-2">
                           <BsFillSendFill className="text-white"/>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-[#413C6D] rounded-full p-2 flex justify-center items-center h-1/2 mt-2">
                           <RiRefreshFill className="text-white"/>
                        </div>
                        <div>
                            <H2>Simple Screen Recording</H2>
                            <P>Effortless screen recording for everyone. Record with ease, no tech expertise required.</P>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src="/video_features.png" alt=""/>
                </div>
            </div>
        </div>    
    )
  }