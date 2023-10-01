import * as React from 'react';
import Center from "@/components/Center";
import Link from '@mui/material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from '@/components/Footer';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      flexShrink: '0',
      borderRadius: 'var(--Outer-Radius, 24px)',
      background: '#F2F4F7',
      padding: '56px 113px 113px 162px',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '598px',
      maxHeight: '876px',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    },
};

export default function GuestPage() {
    const [language, setLanguage] = React.useState('');
    const [videoURL, setVideoURL] = React.useState('');

    React.useEffect(() => {
        // Listen for the custom event to receive the video URL
        const handleVideoRecorded = (event) => {
            const url = event.detail;
            setVideoURL(url);
        };

        window.addEventListener('videoRecorded', handleVideoRecorded);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('videoRecorded', handleVideoRecorded);
        };
    }, []);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Center>
                <div className="flex flex-wrap justify-between items-center py-6 mb-12">
                    <Link href='/' className="flex flex-row items-center gap-2 no-underline text-[#100A42]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_592_2938)">
                        <path d="M31.1401 16.8421C30.5804 14.9122 29.5621 13.1464 28.1721 11.6953C26.7821 10.2442 25.0617 9.15092 23.1577 8.50876C21.2766 7.96121 19.2993 7.82666 17.3614 8.11432C15.4234 8.40199 13.5705 9.10507 11.9296 10.1754C11.7946 10.3107 11.6252 10.4067 11.4398 10.4531C11.2544 10.4994 11.0598 10.4944 10.877 10.4386C10.5084 10.3192 10.1763 10.1079 9.91205 9.82455C9.71967 9.47744 9.65746 9.07308 9.73661 8.68419C9.78687 8.49754 9.87514 8.32327 9.9959 8.17233C10.1167 8.02138 10.2673 7.89701 10.4384 7.807C15.0875 5.0877 19.6489 4.38595 24.0349 5.78946C26.1942 6.50768 28.1656 7.69964 29.8047 9.27811C31.4439 10.8566 32.7094 12.7816 33.5085 14.9123H39.3857C38.184 10.1719 35.2871 6.0361 31.2427 3.28683C27.1983 0.537565 22.2868 -0.634627 17.4368 -0.00811872C12.5868 0.618389 8.13434 3.00017 4.92135 6.68692C1.70837 10.3737 -0.0425069 15.1098 -0.000228394 20C-0.000228394 20.7895 0.0874909 21.4912 0.0874909 22.2807H7.54363C7.82839 22.2645 8.11069 22.3414 8.34801 22.4996C8.58532 22.6578 8.76481 22.8888 8.85942 23.1579C9.43235 25.0811 10.4553 26.8402 11.8434 28.2894C13.2316 29.7385 14.945 30.8361 16.8419 31.4912C18.723 32.0388 20.7002 32.1733 22.6382 31.8856C24.5761 31.598 26.429 30.8949 28.0699 29.8245C28.205 29.6892 28.3743 29.5933 28.5597 29.5469C28.7452 29.5005 28.9398 29.5055 29.1226 29.5614C29.4911 29.6808 29.8232 29.8921 30.0875 30.1754C30.2799 30.5225 30.3421 30.9269 30.2629 31.3158C30.2127 31.5024 30.1244 31.6767 30.0036 31.8276C29.8829 31.9786 29.7323 32.103 29.5612 32.193C26.917 33.9722 23.8008 34.9192 20.6138 34.9123C19.0386 34.9004 17.4732 34.6641 15.9647 34.2105C13.7963 33.5094 11.8162 32.3235 10.1747 30.7428C8.53315 29.162 7.27338 27.2281 6.491 25.0877H0.701526C1.96964 29.7501 4.88277 33.7958 8.90243 36.477C12.9221 39.1582 17.7765 40.2935 22.5683 39.6731C27.3601 39.0527 31.7653 36.7186 34.9696 33.1022C38.174 29.4858 39.9608 24.8316 39.9998 20C40.0161 19.2679 39.9868 18.5355 39.9121 17.807H32.5436C32.2445 17.7872 31.9563 17.6872 31.7093 17.5174C31.4623 17.3476 31.2657 17.1143 31.1401 16.8421Z" fill="#100A42"/>
                        <path d="M20.0841 28.7495C21.811 28.7329 23.4944 28.2056 24.9222 27.2341C26.3501 26.2626 27.4585 24.8903 28.1078 23.2901C28.7572 21.6898 28.9185 19.9332 28.5715 18.2414C28.2244 16.5497 27.3845 14.9985 26.1575 13.7832C24.9305 12.5679 23.3713 11.7428 21.6763 11.412C19.9813 11.0811 18.2263 11.2592 16.6324 11.9239C15.0384 12.5886 13.6768 13.71 12.719 15.1471C11.7612 16.5841 11.2501 18.2725 11.25 19.9995C11.2499 21.1557 11.479 22.3004 11.924 23.3675C12.369 24.4346 13.021 25.403 13.8425 26.2166C14.6639 27.0302 15.6385 27.673 16.7098 28.1077C17.7811 28.5425 18.928 28.7606 20.0841 28.7495Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_592_2938">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <b className="text-base">HelpMeOut</b>
                    </Link>
                    <div className="text-base font-medium flex flex-row gap-9">
                        <Link href='/#Features' className='no-underline text-[#100A42]'>Features</Link>
                        <Link href='/#Info' className='no-underline text-[#100A42]'>How it Works</Link>
                    </div>
                    <Link href='/auth/Auth' className='no-underline text-[#100A42]'>
                        <b>Get started</b>
                    </Link>
                </div>
                <div className='flex lg:flex-row xsm:flex-col justify-center gap-10 items-center '>
                    <div className='w-full'>
                        <h2 className='font-bold text-[#141414] xsm:text-4xl lg:text-5xl mb-10'>Your video is ready!</h2>
                        <div className='flex flex-col gap-16 items-start'>
                            <div className="flex flex-col items-start gap-2">
                                <h6 className='text-[#727272] text-base'>screen_record</h6>
                                <div className='flex gap-6 justify-center items-center'>
                                    <h2 className='text-[#413C6D] text-2xl font-semibold'>Video</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                    <path d="M15.167 2.66675H12.5003C5.83366 2.66675 3.16699 5.33341 3.16699 12.0001V20.0001C3.16699 26.6667 5.83366 29.3334 12.5003 29.3334H20.5003C27.167 29.3334 29.8337 26.6667 29.8337 20.0001V17.3334" stroke="#120B48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21.8865 4.02676L11.3798 14.5334C10.9798 14.9334 10.5798 15.7201 10.4998 16.2934L9.92651 20.3068C9.71317 21.7601 10.7398 22.7734 12.1932 22.5734L16.2065 22.0001C16.7665 21.9201 17.5532 21.5201 17.9665 21.1201L28.4732 10.6134C30.2865 8.80009 31.1398 6.69343 28.4732 4.02676C25.8065 1.36009 23.6998 2.21343 21.8865 4.02676Z" stroke="#120B48" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20.3799 5.53345C21.2732 8.72011 23.7666 11.2134 26.9666 12.1201" stroke="#120B48" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full'>   
                                <div className="relative">
                                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="enter email of reciever" required />
                                    <button onClick={openModal} type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-gray-300 hover:bg-blue-800font-medium rounded-lg text-sm px-4 py-2">Send</button>
                                </div>
                            </div>
                            <Modal
                              isOpen={modalIsOpen}
                              onRequestClose={closeModal}
                              style={customStyles}
                              contentLabel="Example Modal"
                            >
                                <button onClick={closeModal} className='flex justify-end'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M19.9997 37.4166C10.3925 37.4166 2.58301 29.6071 2.58301 19.9999C2.58301 10.3927 10.3925 2.58325 19.9997 2.58325C29.6069 2.58325 37.4163 10.3927 37.4163 19.9999C37.4163 29.6071 29.6069 37.4166 19.9997 37.4166ZM19.9997 4.08325C11.2235 4.08325 4.08301 11.2238 4.08301 19.9999C4.08301 28.7761 11.2235 35.9166 19.9997 35.9166C28.7758 35.9166 35.9163 28.7761 35.9163 19.9999C35.9163 11.2238 28.7758 4.08325 19.9997 4.08325Z" fill="#292D32" stroke="#120B48"/>
                                    <path d="M15.8127 25.2465L15.8066 25.2526L15.8007 25.2589C15.6772 25.3913 15.485 25.4668 15.2829 25.4668C15.0917 25.4668 14.9045 25.3978 14.7532 25.2465C14.4651 24.9585 14.4651 24.4751 14.7532 24.187L24.1865 14.7537C24.4746 14.4656 24.958 14.4656 25.2461 14.7537C25.5341 15.0417 25.5341 15.5251 25.2461 15.8132L15.8127 25.2465Z" fill="#292D32" stroke="#120B48"/>
                                    <path d="M24.7163 25.4668C24.5251 25.4668 24.3378 25.3978 24.1865 25.2465L14.7532 15.8132C14.4651 15.5251 14.4651 15.0417 14.7532 14.7537C15.0412 14.4656 15.5247 14.4656 15.8127 14.7537L25.2461 24.187C25.5341 24.4751 25.5341 24.9585 25.2461 25.2465C25.0948 25.3978 24.9075 25.4668 24.7163 25.4668Z" fill="#292D32" stroke="#120B48"/>
                                    </svg>
                                </button>
                                <div className='inline-flex h-48 flex-col items-center gap-10 shrink-0'>
                                    <img src="https://s3-alpha-sig.figma.com/img/9e88/a83e/41f1d929caad1fc02b4611e745464502?Expires=1696809600&Signature=BOoQU~cI2DwRwPUE-IPb0ESC25L2iS6ApqR7kVQcooS-HJBLxTkDw3CHptcmflAxWIK5xwQXVf759yVzTVLFX6cXqO3-Gq27mRncX~2iuow5bU0PnGDNeYiUUYmYloMDIHC-nIaSscxHmZvQS3qquBcO3ZZJfAAhv8yCbjzqI225IJVF1DSdthOzjWVP4E34am47VellD-3N4zvJ0rQhv3oYQ1j75JeLcWOPt8TrlaHYS67f1IxoXpN0XZpsy-bzWMePDwFTx-xHtnVu29MqTjiJ7Qy1FzEvwKPLSC0nqNxJ407JhLF5E9V3K3zrTfOkIYqgonJvGh6qvzoxp0h93A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Your GIF" />
                                </div>
                                <div className='text-center flex flex-col gap-16'>
                                    <h5 className='lg:text-2xl xsm:base font-normal text-[#08051E]'>Your video link has been sent to <b className='font-medium text-[#120B48]'>user.email</b></h5>
                                    <h5 className='text-[#141414] lg:text-lg xsm:text-sm font-normal'>Would you need to view this video later? Save to your account now!</h5>
                                </div>
                                <form action="/auth/Auth" className='flex justify-center'>
                                    <button type='submit' className='flex flex-col justify-center items-center gap-3 px-8 py-4 text-[#F9F9FF] text-center text-base rounded-lg mt-6' style={{background: 'var(--primary-main, #120B48)'}}>Save Video</button>
                                </form>
                                <div className="text-center">
                                    <h4 className='max-w-[653px] text-[#7E7E7E] lg:text-base xsm:text-xs font-semibold mt-10'>Don’t have an account? <Link href='/auth/Auth' className='text-[#120B48] underline'>Create account</Link></h4>
                                </div>
                            </Modal>
                            <form className='w-full flex flex-col items-start gap-4'>
                                <label htmlFor="copy" className='text-xl text-[#141414] font-semibold'>Video url</label>   
                                <div className="relative w-full">
                                    <input
                                     type="search" 
                                     id="default-search" 
                                     className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                                     placeholder="https://www.helpmeout/Untitled_Video_20232509" 
                                     required
                                     value={videoURL} 
                                     readOnly
                                    />
                                    <button type="submit" class="text-[#120B48] flex gap-2 items-center absolute right-2.5 bottom-1.5 bg-gray-50 border border-[#120B48] hover:bg-blue-800font-medium rounded-lg text-sm px-4 py-2"><ContentCopyIcon/>Copy URL</button>
                                </div>
                            </form>
                            <div className='max-w-lg mb-16'>
                                <h2 className='font-semibold text-base mb-4'>Share your video</h2>
                                <div className='flex gap-4'>
                                    <button type="submit" class="text-[#120B48] flex gap-2 items-center  border border-[#120B48] hover:bg-blue-800font-medium rounded-lg text-sm lg:px-4 xsm:px-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_611_1603)">
                                        <path d="M24 11.9993C24 5.37187 18.6274 -0.000705719 12 -0.000705719C5.37258 -0.000705719 0 5.37187 0 11.9993C0 17.9888 4.38823 22.9533 10.125 23.8535V15.468H7.07813V11.9993H10.125V9.35554C10.125 6.34805 11.9165 4.68679 14.6576 4.68679C15.9705 4.68679 17.3438 4.92117 17.3438 4.92117V7.87429H15.8306C14.3399 7.87429 13.875 8.7993 13.875 9.74829V11.9993H17.2031L16.6711 15.468H13.875V23.8535C19.6118 22.9533 24 17.9888 24 11.9993Z" fill="#1877F2"/>
                                        <path d="M16.6711 15.4688L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_611_1603">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        Facebook
                                    </button>
                                    <button type="submit" class="text-[#120B48] flex gap-2 items-center  border border-[#120B48] hover:bg-blue-800font-medium rounded-lg text-sm lg:px-4 xsm:px-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0859 3.87197C15.2061 1.98972 12.7059 0.952615 10.042 0.95166C4.55283 0.95166 0.08547 5.41855 0.08356 10.9092C0.082605 12.6644 0.54147 14.3776 1.41288 15.8874L0 21.0481L5.27909 19.6634C6.7335 20.457 8.37128 20.8748 10.0377 20.8753H10.042C15.5302 20.8753 19.9981 16.4079 20 10.9173C20.0009 8.25627 18.9662 5.7547 17.0859 3.87244V3.87197ZM10.042 19.1935H10.0387C8.55367 19.1931 7.09689 18.7939 5.82583 18.0399L5.52357 17.8604L2.39078 18.6822L3.22686 15.6277L3.03013 15.3144C2.20169 13.9966 1.76383 12.4734 1.76479 10.9097C1.7667 6.3463 5.47963 2.63337 10.0454 2.63337C12.2561 2.63432 14.3342 3.49619 15.8969 5.06091C17.4598 6.62516 18.3197 8.7051 18.3188 10.9163C18.3168 15.4802 14.6039 19.1931 10.042 19.1931V19.1935ZM14.5819 12.9948C14.3332 12.8702 13.1099 12.2685 12.8816 12.1855C12.6534 12.1024 12.4877 12.0609 12.322 12.3101C12.1563 12.5594 11.6793 13.1199 11.5342 13.2856C11.389 13.4518 11.2438 13.4723 10.9951 13.3477C10.7463 13.223 9.94461 12.9604 8.99395 12.1129C8.25433 11.453 7.75483 10.6384 7.60972 10.3892C7.46456 10.1399 7.59444 10.0053 7.71856 9.8816C7.83028 9.76988 7.96733 9.59083 8.09194 9.44566C8.21661 9.30049 8.25767 9.19644 8.34072 9.03071C8.42383 8.86455 8.38228 8.71944 8.32022 8.59477C8.25811 8.47016 7.76061 7.24538 7.55289 6.74738C7.35089 6.26227 7.14561 6.32816 6.99328 6.32004C6.84811 6.31288 6.68244 6.31145 6.51628 6.31145C6.35011 6.31145 6.08078 6.37352 5.85256 6.62277C5.62433 6.87199 4.98162 7.4741 4.98162 8.69838C4.98162 9.92266 5.87311 11.1064 5.99772 11.2725C6.12233 11.4387 7.75244 13.9517 10.2483 15.0299C10.8418 15.2863 11.3054 15.4395 11.6669 15.5542C12.2628 15.7437 12.8052 15.717 13.234 15.653C13.712 15.5814 14.7061 15.0509 14.9133 14.4698C15.1206 13.8887 15.1206 13.3902 15.0585 13.2865C14.9964 13.1829 14.8303 13.1204 14.5815 12.9958L14.5819 12.9948Z" fill="#25D366"/>
                                        </svg>
                                        WhatsApp
                                    </button>
                                    <button type="submit" class="text-[#120B48] flex gap-2 items-center  border border-[#120B48] hover:bg-blue-800font-medium rounded-lg text-sm lg:px-4 xsm:px-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="url(#paint0_linear_611_1613)"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51633 9.89096C7.4291 8.6137 9.37614 7.78815 10.3574 7.38317C13.13 6.23052 13.7064 6.02803 14.0802 6.01245C14.1581 6.01245 14.345 6.02803 14.4696 6.12149C14.5631 6.19937 14.5942 6.3084 14.6098 6.38628C14.6254 6.46416 14.6409 6.6355 14.6254 6.77569C14.4696 8.3489 13.831 12.1963 13.4883 13.9564C13.3481 14.704 13.0677 14.9533 12.8029 14.9844C12.2266 15.0311 11.7749 14.595 11.2141 14.2368C10.3419 13.6604 9.84343 13.3022 8.98673 12.7414C8.00542 12.0872 8.64405 11.729 9.2048 11.1526C9.34499 10.9969 11.9151 8.676 11.9618 8.45793C11.9618 8.42678 11.9774 8.33332 11.9151 8.2866C11.8528 8.23987 11.7749 8.25544 11.7126 8.27102C11.6191 8.28659 10.2173 9.22117 7.4914 11.0592C7.08642 11.3396 6.72816 11.4642 6.40106 11.4642C6.04281 11.4642 5.35745 11.2617 4.84343 11.0903C4.22038 10.8878 3.72193 10.7788 3.76866 10.4361C3.79982 10.2648 4.04904 10.0779 4.51633 9.89096Z" fill="white"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_611_1613" x1="0" y1="9.99276" x2="19.9855" y2="9.99276" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#2AABEE"/>
                                            <stop offset="1" stop-color="#229ED9"/>
                                            </linearGradient>
                                        </defs>
                                        </svg>
                                        Telegram
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-start gap-20 lg:border-l border-[#9D9D9D] lg:pl-16 '>
                        <div className="flex justify-center items-center w-full h-[473px] rounded-md border border-primary-primary-400 bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>

                        </div>
                        <div className='flex flex-col w-full justify-center items-start gap-10'>
                            <div className='flex flex-col items-start gap-4'>
                                <h3 className='text-2xl'>Transcript</h3>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={language}
                                        label="Language"
                                        onChange={handleChange}
                                        >
                                        <MenuItem value={10}>English</MenuItem>
                                        <MenuItem value={20}>Spanish</MenuItem>
                                        <MenuItem value={30}>Arabic</MenuItem>
                                        <MenuItem value={40}>French</MenuItem>
                                        <MenuItem value={50}>German</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className='flex flex-col items-start gap-4'>
                                <div className='flex flex-row gap-6'>
                                    <h6 className='text-base text-[#141414]'>Time</h6>
                                    <h5 className='text-base'>transcripted notes</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Center>

            <div className='flex flex-col justify-center items-center gap-2 my-16 py-12' style={{background: 'rgba(231, 231, 237, 0.20)'}}>
                <div className="flex flex-col max-w-[747px] justify-center items-center gap-10">
                    <h4 className='max-w-[656px] text-[#141414] lg:text-2xl xsm:text-sm font-semibold text-center'>To ensure the availability and privacy of your video, we recommend saving it to your account.</h4>
                    <form action="/auth/Auth">
                    <button type='submit' className='flex flex-col justify-center items-center gap-3 px-8 py-4 text-[#F9F9FF] text-center text-base rounded-lg' style={{background: 'var(--primary-main, #120B48)'}}>Save Video</button>
                    </form>
                    <h4 className='max-w-[653px] text-[#7E7E7E] lg:text-2xl xsm:text-sm font-semibold'>Don’t have an account? <Link href='/auth/Auth' className='text-[#120B48] underline'>Create account</Link></h4>
                </div>
            </div>

            <Footer />
        </>
    )
}