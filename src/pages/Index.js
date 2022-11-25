import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
	<Main
		description={
			"Michael D'Angelo's personal website. New York based Stanford ICME graduate, " +
			"co-founder and CTO of Arthena, and YC Alumni."
		}
	>
		<article className="post" id="index">
			<header>
				<div className="title">
					<h2 data-testid="heading">
						<Link to="/">About this site</Link>
					</h2>
					<p>
						A beautiful, responsive, statically-generated, react application written with modern
						Javascript.
					</p>
				</div>
			</header>
			<p>
				{" "}
				환영합니다. <Link to="/about">about me</Link>에서 저에 대한 더 많은 정보를 볼 수 있습니다.
				또는 <Link to="/resume">resume</Link>를 통해 제 이력서를 확인 할 수 있습니다.{" "}
				<Link to="/projects">projects</Link>, <Link to="/stats">site statistics</Link> 그리고{" "}
				<Link to="/contact">contact</Link>를 통해 연락해주세요.
			</p>
			{/* <p>
				{" "}
				Source available <a href="https://github.com/mldangelo/personal-site">here</a>.
			</p> */}
		</article>
	</Main>
);

export default Index;
