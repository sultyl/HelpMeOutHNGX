import Center from "@/components/Center";
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/Firebase/FirebaseApp";

export default function Dashboard () {
    const [open, setOpen] = React.useState(true);
    const auth = getAuth(app);
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const db = getFirestore(app);

    React.useEffect(() => {
        return auth.onAuthStateChanged(async (user) => {
          if (user) {
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            setUser(userDoc.data());
          } else {
            setUser(null);
            router.push('/auth'); // redirect to login page
          }
        });
      }, [auth, db]);

    if (loading) {
        return <div>loading..</div>
    }

    if (!user) {
        router.push('auth/Auth');
        <div>Please sign in to continue</div>
    }

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="h-14 border-b-2 mb-20"></div>
            <Center>
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_592_2938)">
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
                    </div>
                    <List
                        sx={{ padding: '2px', maxWidth: 200, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        >
                        <ListItemButton onClick={handleClick} sx={{padding: 0}}>
                            <ListItemIcon  sx={{ml: 0}}>
                            <Stack direction="row" spacing={2}>
                            <Avatar alt={user ? user.displayName : ''} src={user ? user.photoURL : ''} />
                            </Stack>
                            </ListItemIcon>
                            <ListItemText primary={user ? user.username : ''} sx={{'& .MuiTypography-root': { fontSize: '15px' }}}/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemIcon>
                                <LogoutIcon />
                                </ListItemIcon>
                                <button onClick={() => auth.signOut()}>
                                    <ListItemText primary="Logout" />
                                </button>
                            </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </div>
                <div className="flex justify-between lg:items-center xsm:gap-3 lg:flex-row xsm:flex-col border mt-10">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#141414] font-bold lg:text-3xl xsm:text-xl">Hello, {user ? user.displayName : ''}</h2>
                        <p className="text-[#434343] lg:text-lg xsm:text-sm">Here are your recorded videos</p>
                    </div>                    
                    <form className="lg:max-w-sm w-full">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <button type="submit" class="absolute bottom-2.5 hover:bg-blue-800 font-medium rounded-lg text-sm px-1 py-2">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </button>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a particular video" required />
                        </div>
                    </form>
                </div>
            </Center>
            <div className="h-14 border-b mb-20"></div>
            <Center>
                <h2>Recent files</h2>
                <ImageList sx={{ width: '100%' }} cols={3}>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                </ImageList>
                <h2>Files from last week</h2>
                <ImageList sx={{ width: '100%', height: 450 }} cols={3}>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                    <Link href='/VideoDisplay'>
                        <ImageListItem sx={{border: '1px solid gray', borderRadius: '12px'}}>
                        <img
                            src='/info_image.png'
                            alt=''
                            loading="lazy"
                        />
                        <div className="flex justify-between">
                            <div>
                                <h2>How to Create Facebook Ad Listing</h2>
                                <p>SEPTEMBER 23, 2023</p>
                            </div>
                            <div>
                                <LinkIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                        </ImageListItem>
                    </Link>
                </ImageList>
            </Center>
        </>
    )
}