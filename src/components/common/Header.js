import { Link, NavLink } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header({ type }) {
	const active = { color: '#000' };
	let logoURL = '';

	return (
		<header className={type}>
			<h1>
				<Link to='/'>
					<img src={process.env.PUBLIC_URL + logoURL} alt='logo' />
				</Link>
				<span>Lorem ipsum dolor sit.</span>
			</h1>

			<nav>
				<ul id='gnb'>
					<NavLink to='/department' activeStyle={active}>
						<li>DEPARTMENT</li>
					</NavLink>
					<NavLink to='/community' activeStyle={active}>
						<li>COMMUNITY</li>
					</NavLink>

					<NavLink to='/gallery' activeStyle={active}>
						<li>GALLERY</li>
					</NavLink>

					<NavLink to='/youtube' activeStyle={active}>
						<li>YOUTUBE</li>
					</NavLink>

					<NavLink to='/location' activeStyle={active}>
						<li>LOCATION</li>
					</NavLink>

					<NavLink to='/members' activeStyle={active}>
						<li>MEMBERS</li>
					</NavLink>
				</ul>

				<ul className='util'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
				</ul>
			</nav>
			<FontAwesomeIcon icon={faBars} />
			<div>Header</div>
		</header>
	);
}

export default Header;
