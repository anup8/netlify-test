import { Switch } from "@chakra-ui/react"
import styles from '../styles/NavbarFooter.module.css'
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { userinfo } from '../Constants/userinfo'

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, position: sticky ? 'fixed' : 'static' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline', marginBottom: !drawerVisible ? '0' : '0px' ,alignItems:'center'}}>
                <Link href='/'><a>
                    <div style={{display:'flex', flexDirection:'row', height:'100%'}}>
                    <img src = "/logo.svg" style={{width:'40px'}}/>
                    <h2 className={styles.logo}> </h2>
                    </div>
                    </a></Link>
                {!drawerVisible
                    ? <div style={{ display: 'flex' }}>
                        {/* <Navlinks /> */}
                    </div>
                    : null
                }
                <Switch id="dark-mode" colorScheme="purple" size={!drawerVisible ? 'lg' : 'md'} isChecked={currentTheme.name === 'dark' ? true : false} onChange={() => toggleTheme()} />
            </div>
            {/* {drawerVisible
                ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks />
                    </div>
                </>
                : null
            } */}
        </div>
    )
}

export default Navbar
