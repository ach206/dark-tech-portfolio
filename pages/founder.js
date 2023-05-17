import { FounderPageBanner } from "../src/components/FounderPageBanner";
import FounderLayout from "../src/layout/FounderLayout";


const Founder = () => {
    const typingAnimation = [
        "<span class='typed-bread'><a href='#'>Home</a> / Meet The Founder</span>",
    ];
    return (
        <FounderLayout>
            <FounderPageBanner pageName={"Meet Camille"} typingData={typingAnimation} />
            <div className="section about">
                <div className="content">
                    <div className="title"><div className="title_inner">Camille Hall
                        <br />CEO | Founder | Software Engineer</div></div>
                    <div className="about-items">
                        <div className="about-col">
                            <div className="about-item content-box">
                                <div className="post">
                                    <div className="single-post-text">
                                        <p>Camille Hall is a powerhouse in the tech industry, and she&lsquo;s just getting started. As the founder and CEO of Creative Ambition LLC, a company focused on the intersection of technology, science, and human design, Camille is at the forefront of innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span class="typed-bread photographer">Photographer: Katrina <a href="https://dynamicphotography.myportfolio.com/dynamicphotography">@dynamicphotographystudio</a></span>
        </FounderLayout>
    );
};
export default Founder;
