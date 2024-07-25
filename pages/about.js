import { DefaultPageBanner } from "../src/components/PageBanner";
import FounderLayout from "../src/layout/FounderLayout";
import Image from "next/image";

const About = () => {
	const typingAnimation = [
		"<span class='typed-bread'><a href='/'>Home</a> / About</span>",
	];
	return (
		<FounderLayout>
			<DefaultPageBanner
				pageName={"About"}
				typingData={typingAnimation}
			/>

			<div className="section about">
				<div className="content">
					<div className="title">
						<div className="title_inner">
							The Creative Ambition Story
						</div>
					</div>

					<div className="about-items">
						<div className="about-col">
							<div className="about-item content-box">
								<div className="post">
									<div className="image">
										<Image
											src="/images/camillionaire_philosophers-stone-white-bkg.png"
											width={"100%"}
											height={"100%"}
											className=""
											alt="Creative Ambition Logo"
										/>
									</div>
									<div className="desc">
										<div className="single-post-text">
											<p>
												{`Creative Ambition is a dynamic,
												early-stage company at the
												forefront of AI-powered SaaS
												innovation. Founded with a
												vision to transform industries,
												we're rapidly expanding our
												portfolio of cutting-edge
												solutions.`}
											</p>
											<p>
												{`Our unwavering focus on crafting
												intelligent software that
												empowers users and delivers
												exceptional value has
												established Creative Ambition as
												a rising star in the AI SaaS
												market. `}
											</p>
											<p>
												{`With a deep-rooted commitment to
												innovation and problem-solving,
												we're building a strong
												foundation for future growth.
												Our agile approach allows us to
												adapt to evolving market trends
												and deliver solutions that truly
												make a difference.`}
											</p>
										</div>
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
export default About;
