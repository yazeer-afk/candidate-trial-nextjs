import Image from "next/image";
import Button from "@/components/Button";
import "./page.scss";
import TeamMember from "@/components/TeamMember";

export default function Home() {
    return (
        <main>
            <section className="hero-container">
                <h1>
                    The ultimate atomix starter theme to help <br /> your
                    business grow faster!
                </h1>
                <Button label="Contact us" />
            </section>

            <section className="container column-container">
                <h2>Three column with image</h2>
                <div className="content">
                    <div className="slot column-slot">
                        <h3>
                            Lorem ipsum dolor sit amet conse tetur sadipiscing
                            elite dolore.
                        </h3>
                        <Image
                            src="/images/column-img.png"
                            alt="column image"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="slot">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam.
                            <br />
                            <br />
                            Et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr. Et justo duo dolores et
                            ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur.
                        </p>
                    </div>
                    <div className="slot">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consetetur</li>
                            <li>Sadipscing elitr, sed diam nonumy</li>
                            <li>Eirmod tempor invidunt ut labore et dolore</li>
                            <li>magna aliquyam erat, sed diam voluptua</li>
                        </ul>
                        <br />
                        <p>
                            Et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr. Et justo duo dolores et
                            ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2>Carousal section</h2>
                <div className="content"></div>
            </section>
            <section className="container team-container">
                <h2>Team section</h2>
                <div className="content">
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                </div>
            </section>
        </main>
    );
}
