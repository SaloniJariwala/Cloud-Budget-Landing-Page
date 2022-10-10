import { Navlink, NavLinkWrapper } from "./styles";

const NavLinks = ({ navMenus }) => {
    return (
        <NavLinkWrapper>
            <ul style={{ listStyle: 'none', display: 'flex' }}>
                {
                    navMenus.map((item) => (
                        <li>
                            <Navlink className="nav-link" href={item.link}>{item.title}</Navlink>
                        </li>
                    ))
                }
            </ul>
        </NavLinkWrapper>
    )
}

export default NavLinks;