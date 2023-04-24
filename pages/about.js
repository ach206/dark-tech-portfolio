import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Image from "next/image";

const About = () => {
    const typingAnimation = [
        "<span class='typed-bread'><a href='#'>Home</a> / About</span>",
    ];
    return (
        <Layout>
            <DefaultPageBanner pageName={"About"} typingData={typingAnimation} />

            <div className="section about">
                <div className="content">

                    <div className="title"><div className="title_inner">The Creative Ambition Story</div></div>

                    <div className="about-items">

                        <div className="about-col">
                            <div className="about-item content-box">
                                <div className="post">
                                    <div className="image">

                                        <Image src="/images/camillionaire_philosophers-stone-white-bkg.png" width={'100%'} height={'100%'} className="" alt="Creative Ambition Logo" />
                                    </div>
                                    <div className="desc">
                                        <div className="single-post-text">
                                            <p>
                                                Dare to imagine a world where technology seamlessly intertwines with consciousness, mindfulness, and relentless innovation. Enter the realm of Creative Ambition, where AI-driven SaaS products are crafted with passion, purpose, and a human touch.
                                            </p>
                                            <p>
                                                Our story unfolds in 2018 when Camille Hall, a tenacious software engineer and then single parent, forged a path through the challenges of life and coding to launch her consultancy side business. Through dedication and passion, Creative Ambition has undergone a metamorphosis, organically growing into a dynamic enterprise that specializes in crafting innovative AI software solutions.
                                            </p>
                                            <p>At our core, we embody the values of consciousness, mindfulness, and pushing the boundaries of innovation. Our unique approach to AI-powered SaaS products showcases the harmony between human emotion and groundbreaking technology.

</p>
                                            <p>
                                                We are committed to giving back and educating others about AI technology. We actively engage in speaking events, produce informative social media videos, and participate in community outreach programs to make AI accessible and comprehensible for all.
                                            </p><p>
                                                As a team, we cherish our values of personal growth, open communication, and collaboration. We believe in cultivating an environment that fosters creativity and empowers our clients to push the limits of what&lsquo;s possible.

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};
export default About;
