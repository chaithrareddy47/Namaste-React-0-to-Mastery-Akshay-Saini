const Header = () => {
	return (
		<div className='header-component'>
			<div className='nav-logo'>
				<img
					src={'logo.png'}
					alt=''
				/>
			</div>
			<div className='nav-links'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Cart</li>
					<li>User</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;