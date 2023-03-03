import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const VerticalNav = styled.nav`
	width: 100px;
	height: 100vh;
	position: fixed;
	background-color: #181818;
`;
export const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: 30px;
`;
export const NavListItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
`;
export const ContactNavListItem = styled.li`
	list-style: none;
	padding: 0;
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const Cantact = styled.a`

`;
export const Logo = styled(NavLink)`
	color: #909096;
	text-align: center;
	width: 100%;
	display: block;
	font-size: 1.6rem;
	line-height: 5rem;
	border-bottom: 1px solid #282828;
	-webkit-transition: color 0.3s, background-color 0.3s;
	-o-transition: color 0.3s, background-color 0.3s;
	transition: color 0.3s, background-color 0.3s;
	text-decoration: none;
	&.active {
		color: #08fdd8;
		-webkit-transition: color 0.3s;
		-o-transition: color 0.3s;
		transition: color 0.3s;
		text-decoration: none;
	}
	&:hover {
		color: #08fdd8;
		-webkit-transition: color 0.3s;
		-o-transition: color 0.3s;
		transition: color 0.3s;
		text-decoration: no;
		/* &::after{
        display: none;
 content: 'men';
    } */
	}
	&:active {
		color: #08fdd8;
		-webkit-transition: color 0.3s;
		-o-transition: color 0.3s;
		transition: color 0.3s;
		text-decoration: no;
	}
`;
