import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

	const [user, setUser] = useState('Login');

	const handleLogin = () => {
		setUser(user === 'Login' ? 'Logout' : 'Login');
	};

	// styles
	const commonLinkStyles = {
		color: '#492D13',
		borderBottom: '2px solid transparent',
		transition: 'color 0.3s, border-bottom 0.3s',
		textDecoration: 'none',
	};

	const activeStyles = {
		color: '#F29C52',
		borderBottom: '2px solid #F29C52',
	};

	return (
		<div className='header-container'>
			<div className='nav-logo'>
				<img
					src='https://i.pinimg.com/564x/da/8a/9f/da8a9f985210a4f3d7ef8e27e05d978b.jpg'
					alt=''
					className='nav-logo'
				/>
			</div>

			<div className='nav-links'>
				<ul className='nav-items'>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) => ({
								...commonLinkStyles,
								...(isActive ? activeStyles : {}),
							})}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/about'
							style={({ isActive }) => ({
								...commonLinkStyles,
								...(isActive ? activeStyles : {}),
							})}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/contact'
							style={({ isActive }) => ({
								...commonLinkStyles,
								...(isActive ? activeStyles : {}),
							})}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/Blog'
							style={({ isActive }) => ({
								...commonLinkStyles,
								...(isActive ? activeStyles : {}),
							})}>
							Blog
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='nav-cart'>
				<i className='fa-solid fa-cart-shopping'></i>
				<i className='fa-solid fa-user'></i>
				<button
					onClick={handleLogin}
					className='log-btn'>
					{user}{' '}
					{user === 'Login' ? (
						<span>
							<i className='fa-solid fa-circle'></i>
						</span>
					) : (
						'  '
					)}
				</button>
			</div>
		</div>
	);
};

export default Header;
