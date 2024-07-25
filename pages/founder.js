import { FounderPageBanner } from "../src/components/FounderPageBanner";
import FounderLayout from "../src/layout/FounderLayout";

const Founder = () => {
	const typingAnimation = [
		"<span class='typed-bread'><a href='/'>Home</a> / Meet the Founder</span>",
	];
	return (
		<FounderLayout>
			<FounderPageBanner
				pageName={"Meet Camille"}
				typingData={typingAnimation}
			/>
			<div className="section about">
				<div className="content">
					<div className="title">
						<div className="title_inner remove-m">
							Camille Hall
							<br />
							Founder & CTO
						</div>
					</div>
					<div className="socialmedia-box">
						<div className="socialmedia">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/camillehall.js"
							>
								<span className="icon fab fa-instagram" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.youtube.com/channel/UCYLHUs0waQDyZgSPi0tJ9BA"
							>
								<span className="icon fab fa-youtube" />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://linkedin.com/in/ach206"
							>
								<span className="icon fab fa-linkedin" />
							</a>
						</div>
					</div>
					<div className="about-items">
						<div className="about-col">
							<div className="about-item content-box">
								<div className="post">
									<div className="single-post-text">
										<p>
											{`Camille Hall is a dynamic technology leader whose passion for innovation drives her every endeavor. As the founder of Creative Ambition LLC, she is at the forefront of developing AI-powered solutions that tackle a variety of real-world challenges. Her approach merges a deep understanding of technological capabilities with a strong commitment to social impact, positioning Creative Ambition as an emerging leader in the tech landscape.`}
										</p>

										<p>
											{`With a sharp focus on harnessing AI to solve pressing challenges, Camille has established Creative Ambition LLC as a platform for innovation. Creative Ambition LLC, the parent company behind Unshackle (`}
											<a
												href="https://www.unshackleai.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												Unshackle AI
											</a>
											{`), serves as a testament to her commitment to leveraging technology for good, with Unshackle providing safety planning, legal documentation, and evidence collection for survivors of abuse.`}
										</p>

										<p>
											{`Camille's innovative work and
											visionary leadership have not gone
											unnoticed. She is also a
											sought-after public speaker, Camille
											captivates audiences at major events
											such as GitHub Universe `}
											(
											<a
												href="https://www.youtube.com/live/WSi_GxfCCA8?feature=share&t=3801"
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub Universe
											</a>
											), SXSW (
											<a
												href="https://schedule.sxsw.com/2024/events/PP142737"
												target="_blank"
												rel="noopener noreferrer"
											>
												SXSW 2024
											</a>
											), and the 200OK Web Dev Conference
											(
											<a
												href="https://youtu.be/nGNX3bwFIJQ?si=yPUnMpJh7_3eXHCG"
												target="_blank"
												rel="noopener noreferrer"
											>
												200OK Web Dev Conference
											</a>
											). Her powerful presence and genuine
											personality make her a role model
											for aspiring technologists and
											entrepreneurs.
										</p>

										<p>
											{`Beyond her business pursuits, Camille passionately advocates for the tech community, championing girls in tech and actively sharing her journey through social media. As she continues to shatter barriers and establish new standards, her unwavering dedication to growth and inspiration stands as a testament to the transformative power of aligning passion with purpose, driving significant and impactful innovations.`}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FounderLayout>
	);
};
export default Founder;
