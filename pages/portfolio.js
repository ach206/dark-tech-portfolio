import { DefaultPageBanner } from "../src/components/PageBanner";
import FounderLayout from "../src/layout/FounderLayout";
import Image from "next/image";

const Portfolio = () => {
	const typingAnimation = [
		"<span class='typed-bread'><a href='/'>Home</a> / Portfolio</span>",
	];
	return (
		<FounderLayout>
			<DefaultPageBanner
				pageName={"Portfolio"}
				typingData={typingAnimation}
			/>
			<div className="section blog" id="next_section">
				<div className="content content-box">
					<div className="single-post-text">
						<div className="portfolio-info portfolio-cols">
							<div className="description-col">
								<Image
									src="/images/unshackle-logo-gray-zoom.png"
									alt=""
									width={100}
									height={100}
								/>
								<div className="title">
									<div className="title_green title_inner">
										Unshackle
									</div>
								</div>

								<div className="single-post-text">
									<p>
										Unshackle harnesses the power of AI to
										provide a safe, anonymous space for
										survivors to break free from abuse.
										Operating 24/7, our platform not only
										swiftly generates essential documents
										and tracks incidents for evidence but
										also offers immediate access to vital
										legal statutes and safety planning
										tools.
									</p>
								</div>
							</div>
							<div className="details-col">
								{/* title */}
								<div className="title">
									<div className="title_inner">Details</div>
								</div>
								{/* details */}
								<ul className="details-list">
									<li>
										<strong>Categories:</strong> Technology
									</li>
									<li>
										<strong>Established:</strong> 2024
									</li>
									<li>
										<strong>Stage:</strong> Pre-Seed
									</li>
									<li>
										<strong>Website:</strong>
										<a
											href="https://unshackleai.com/"
											target="_blank"
											rel="noreferrer"
										>
											unshackleai.com
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="clear" />
				</div>
			</div>
		</FounderLayout>
	);
};
export default Portfolio;
