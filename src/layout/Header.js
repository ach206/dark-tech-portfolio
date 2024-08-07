import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
	<Fragment>
		<div className="logo hover-masks-logo">
			<Link href="/founder">
				<a>
					<span className="mask-lnk">
						Meet the <strong>Founder</strong>
					</span>
					<span className="mask-lnk mask-lnk-hover">
						Camille <strong>Hall</strong>
					</span>
				</a>
			</Link>
		</div>
		{/* top menu */}
		<div className="top-menu hover-masks">
			<div className="top-menu-nav">
				<div className="menu-topmenu-container">
					<ul className="menu">
						<li className="menu-item menu-item-has-children">
							<Link href="/">
								<a>
									<span className="mask-lnk">Home</span>
									<span className="mask-lnk mask-lnk-hover">
										Home
									</span>
								</a>
							</Link>
						</li>
						<li className="menu-item menu-item-has-children">
							<Link href="/about">
								<a>
									<span className="mask-lnk">About</span>
									<span className="mask-lnk mask-lnk-hover">
										About
									</span>
								</a>
							</Link>
						</li>
						<li className="menu-item menu-item-has-children">
							<Link href="/portfolio">
								<a>
									<span className="mask-lnk">Portfolio</span>
									<span className="mask-lnk mask-lnk-hover">
										Portfolio
									</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Fragment>
);

const Header = () => {
	return (
		<Fragment>
			<MobileHeader />
			<DeskTopHeader />
		</Fragment>
	);
};
export default Header;

const DeskTopHeader = () => (
	<header className={`header desktopHeader`}>
		<div className="head-top">
			<Menu />
		</div>
	</header>
);

const MobileHeader = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<header className={`header mobileHeader ${toggle ? "active" : ""}`}>
			<div className="head-top">
				{/* menu button */}
				<a
					href="#"
					className="menu-btn"
					onClick={() => setToggle(!toggle)}
				>
					<span />
				</a>
				{/* logo */}
				<Menu />
			</div>
		</header>
	);
};
