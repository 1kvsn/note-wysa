import React from 'react';
import KeepIcon from './../assets/images/keep.png';

function Header() {
	return (
		<section className="header">
			<div className="app-name">
				<img src={KeepIcon} alt="keep note" />
				<p>Keep Notes</p>
			</div>
		</section>
	)
}

export default Header;