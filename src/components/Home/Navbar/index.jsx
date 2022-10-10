import { NavWrapper } from "./styles";
import logo from "../../../assets/images/logo.png";
import { Button } from "./styles";
import NavLinks from "../NavLinks";

const navMenus = [
    {
        title: "overview",
        link: "/"
    },
    {
        title: "feature",
        link: "#feature"
    },
    {
        title: "technology",
        link: "#technology"
    },
    {
        title: "conatct",
        link: "#link"
    },
    {
        title: "sign up",
        link: '/signup'
    }
];

const Navbar = () => {
    return (
        <NavWrapper>
            <img src={logo} alt="logo" />
            <NavLinks navMenus={navMenus} />
            <Button variant="outline-light">LOGIN</Button>
        </NavWrapper>
    )
}

export default Navbar;