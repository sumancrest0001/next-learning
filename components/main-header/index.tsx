import Link from "next/link";
import logoImage from '@/assets/logo.png';
import Image from "next/image";
import classes from '@/components/main-header/main-header.module.css';
import MainHeaderBackground from "../main-header-background/main-header-background";
import NavLink from "@/atoms/nav-link/nav-link";

const MainHeader:React.FC = (): React.ReactElement => {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image className={classes.logoImage} alt={'app logo'} src={logoImage} priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <NavLink href={"/meals"}>Browse Meals</NavLink>
                    <NavLink href={"/community"}>Foodies Community</NavLink>
                </ul>
            </nav>
        </header>
        </>

    );
}

export default MainHeader;