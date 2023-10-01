import { initFirebase } from "@/Firebase/FirebaseApp";
import Center from "@/components/Center";
import styled from "styled-components";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDoc , doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";


const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Outer-Radius, 24px);
    color: #141414;
    font-weight: 500;
`;

const GoogleBtn = styled.button`
    display: flex;
    gap: 16px;
    padding: 9px 123px;
    justify-content: flex-end;
    align-items: center;
    border-radius: var(--Inner-Radius, 12px);
    border: 1px solid #141414;
    background: #FFF;
    @media screen and (max-width: 700px) {
        font-size: 14px;
        padding: 9px 50px;
    }
`;
const FacebookBtn = styled.button`
    display: flex;
    gap: 16px;
    padding: 9px 116px;
    justify-content: flex-end;
    align-items: center;
    border-radius: var(--Inner-Radius, 12px);
    border: 1px solid #141414;
    background: #FFF;
    @media screen and (max-width: 700px) {
        font-size: 14px;
        padding: 9px 44px;
    }
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 445px;
    @media screen and (max-width: 700px) {
        width: 345px;
    }
`;

const Input = styled.input`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: var(--Inner-Radius, 12px);
    border: 1px solid var(--primary-primary-100, #B6B3C6);
`;

const SignUp = styled.button`
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    align-self: stretch;
    border-radius: 8px;
    background: var(--primary-main, #120B48);
    margin-top: 16px;
`;

export default function Auth() {
    initFirebase();
    const Googleprovider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const db = getFirestore();

    if (loading) {
        return <div className="top-1/2 left-1/2 flex justify-center items-center">Loading...</div>
    }

    if (user) {
        router.push('/Dashboard')
        return <div className="top-1/2 left-1/2 flex justify-center items-center">Loading...</div>
    }

    const signInWithGoogle = async() => {
        setIsSigningIn(true);
        try {
            const result = await signInWithPopup(auth, Googleprovider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSigningIn(false);
        }
    };
    
    const signInWithFacebook = async() => {
        setIsSigningIn(true);
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSigningIn(false);
        }
    };

    const register = async (e) => {
        e.preventDefault();
        // Form validation
        if (!email || !email.includes('@')) {
          alert('Please enter a valid email.');
          return;
        }
        if (!password || password.length < 6) {
          alert('Please enter a password of at least 6 characters.');
          return;
        }
        if (!username) {
            alert('Please enter a username.');
            return;
          }
          const usernameDocRef = doc(db, 'usernames', username);
          const usernameDoc = await getDoc(usernameDocRef);
          if (usernameDoc.exists()) {
            alert('This username is already taken. Please choose another one.');
            return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
        
          // Save the username to Firestore
          await setDoc(doc(db, 'users', user.uid), {
            username: username,
          });
        } catch (error) {
          console.error(error);
          if (error.code === 'auth/email-already-in-use') {
            alert('This email is already in use. Please log in.');
          } else {
            alert('An error occurred. Please try again.');
          }
        }
      };
    
      const login = async (e) => {
        e.preventDefault();
        // Form validation
        if (!email || !email.includes('@')) {
          alert('Please enter a valid email.');
          return;
        }
        if (!password || password.length < 6) {
          alert('Please enter a password of at least 6 characters.');
          return;
        }
        try {
           await signInWithEmailAndPassword(auth, email, password);
         } catch (error) {
          console.error(error);
          if (error.code === 'auth/user-not-found') {
            alert('No account found with this email. Please register.');
          } else {
            alert('An error occurred. Please try again.');
          }
         }
      };

    return (
        <>
            <div className="h-14 border-b-2 mb-20"></div>
            <Center>
                <Link href='/' className="flex flex-row items-center gap-2">
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
                <div className="pt-9 pb-32 flex flex-col  justify-center items-center gap-8">
                    <div className="flex flex-col gap-2 text-center lg:w-1/3">
                        <h2 className="text-[#141414] font-bold lg:text-3xl xsm:text-xl">Log in or Sign up</h2>
                        <p className="text-[#434343] lg:text-xl xsm:text-sm">Join millions of others in sharing successful moves on <b className="font-medium">HelpMeOut.</b></p>
                    </div>
                    <ButtonBox>
                        <GoogleBtn onClick={isSigningIn ? null : signInWithGoogle} disabled={isSigningIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                            <path d="M11.9999 23.0001C14.9699 23.0001 17.4599 22.0151 19.2799 20.3351L15.7249 17.5751C14.7399 18.2351 13.4799 18.6251 11.9999 18.6251C9.13492 18.6251 6.70992 16.6901 5.84492 14.0901H2.16992V16.9401C3.97992 20.5351 7.69992 23.0001 11.9999 23.0001Z" fill="#34A853"/>
                            <path d="M5.845 14.0886C5.625 13.4286 5.5 12.7236 5.5 11.9986C5.5 11.2736 5.625 10.5686 5.845 9.90859V7.05859H2.17C1.4 8.59145 0.999321 10.2832 1 11.9986C1 13.7736 1.425 15.4536 2.17 16.9386L5.845 14.0886Z" fill="#FBBC05"/>
                            <path d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z" fill="#EA4335"/>
                            </svg>
                            Continue with Google
                        </GoogleBtn>
                        <FacebookBtn  onClick={isSigningIn ? null : signInWithFacebook} disabled={isSigningIn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_205_4761)">
                                <path d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z" fill="#1877F2"/>
                                <path d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_205_4761">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                            </svg>
                            Continue with Facebook
                        </FacebookBtn>
                    </ButtonBox>
                    <form className="flex flex-col gap-4" onSubmit={login}>
                        <InputBox>
                            <label htmlFor="username">Email</label>
                            <Input placeholder="Enter your Eamil" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="username">Password</label>
                            <Input placeholder="Enter your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                        </InputBox>
                        <SignUp type="submit">Login</SignUp>
                    </form>

                    <div className="flex items-center w-full xsm:px-5 lg:px-[420px]">
                        <hr className="flex flex-grow border border-[#B9C2C8]" />
                        <div className="px-3 pb-1 text-sm text-[#B9C2C8]">or</div>
                        <hr className="flex flex-grow border border-[#B9C2C8]" />
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={register}>
                        <InputBox>
                            <label htmlFor="username">Username</label>
                            <Input placeholder="Enter your Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="username">Email</label>
                            <Input placeholder="Enter your Eamil" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                        </InputBox>
                        <InputBox>
                            <label htmlFor="username">Password</label>
                            <Input placeholder="Enter your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                        </InputBox>
                        <SignUp type="submit">Sign Up</SignUp>
                    </form>
                </div>
            </Center>
        </>
    )
}