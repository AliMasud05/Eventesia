
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
  <div className="flex justify-center">
      <div className={styles.ab_container}>
        <h1 className="text-3xl text-center my-3">Know Something About Us</h1>
        <div className={styles.imgContainer}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1674197235155-fd390a937c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
            fill={true}
            alt="Picture of the author"    
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className={`${styles.textContainer} sm:flex`}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
              esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
              officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
              Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
  </div>
  );
};

export default About;
