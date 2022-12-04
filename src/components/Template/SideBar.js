import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
	<section id="sidebar">
		<section id="intro">
			<Link to="/" className="logo">
				<img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
			</Link>
			<header>
				<h2>Park SangHyun</h2>
				<p>
					<a href="mailto:tkdgus8903@gmail.com">tkdgus8903@gmail.com</a>
				</p>
			</header>
		</section>

		<section className="blurb">
			<h2>About</h2>
			<p>
				안녕하세요 마라토너 개발자 박상현입니다.{" "}
				<a href="https://www.hanbat.ac.kr/">국립 한밭대학교</a> 학부 졸업, 동료가 믿고 의지할수 있는
				프론트엔드 개발자가 되기 위해 노력중 입니다.
			</p>
			<ul className="actions">
				<li>
					{!window.location.pathname.includes("/resume") ? (
						<Link to="/resume" className="button">
							Learn More
						</Link>
					) : (
						<Link to="/about" className="button">
							About Me
						</Link>
					)}
				</li>
				{/* <Link to="/data/ParkSangHyun" className="button">
					Resume Download
				</Link> */}
				<div className="button">
					<a href={`${PUBLIC_URL}/park.html`}>Resume</a>
				</div>
			</ul>
		</section>

		<section id="footer">
			<ContactIcons />
			<p className="copyright">
				&copy; 박상현 <Link to="/">parkmaker.github.io/</Link>.
			</p>
		</section>
	</section>
);

export default SideBar;
