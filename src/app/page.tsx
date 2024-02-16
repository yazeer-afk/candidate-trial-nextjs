import Button from "@/components/Button";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main>
            <section className={styles['hero-container']}>
                <h1>The ultimate atomix starter theme to help <br /> your business grow faster!</h1>
                <Button label="Contact us" />
            </section>
            <section>Column with image</section>
            <section>Carousal section</section>
            <section>Team section</section>
        </main>
    );
}
