"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Flickity, { FlickityOptions } from "react-flickity-component";

import TeamMember from "@/components/TeamMember";

import "flickity/css/flickity.css";
import "./page.scss";
import CarousalItem from "@/components/CarousalItem";

export default function Home() {
    const options: FlickityOptions = {
        wrapAround: true,
        initialIndex: 1,
        arrowShape: {
            x0: 0,
            x1: 30,
            y1: 50,
            x2: 40,
            y2: 50,
            x3: 10,
        }
    };

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
                            src="/images/column-img-small.png"
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

            <section className="carousal-container">
                <h2>Carousal section</h2>
                <div className="content">
                    <Flickity
                        className="custom-carousal"
                        options={options}
                        reloadOnUpdate
                        static
                    >
                        <CarousalItem />
                        <CarousalItem />
                        <CarousalItem />
                    </Flickity>
                </div>
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
