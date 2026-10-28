"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      /*
        PROJECTS
      */

      gsap.from(".projects-heading", {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 75%",
        },

        y: 60,
        opacity: 0,

        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".projects-sidebar", {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
        },

        x: -40,
        opacity: 0,

        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils
        .toArray(".project-item")
        .forEach((item, index) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
            },

            y: 55,
            opacity: 0,

            duration: 0.75,
            delay: index * 0.04,

            ease: "power3.out",
          });
        });


      /*
        ABOUT
      */

      gsap.from(".about-top", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 82%",
        },

        opacity: 0,
        y: 30,

        duration: 0.8,
        ease: "power3.out",
      });


      /*
        ABOUT BIG TITLE
      */

      gsap.from(".about-title h2", {
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 72%",
        },

        y: 100,
        opacity: 0,

        duration: 1.1,

        ease: "power4.out",
      });


      /*
        ABOUT TEXT
      */

      gsap.from(".about-copy", {
        scrollTrigger: {
          trigger: ".about-main",
          start: "top 65%",
        },

        y: 45,
        opacity: 0,

        duration: 0.9,
        delay: 0.15,

        ease: "power3.out",
      });


      /*
        LOCATION
      */

      gsap.from(".about-location", {
        scrollTrigger: {
          trigger: ".about-location",
          start: "top 90%",
        },

        x: 35,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",
      });


      /*
        SKILLS
      */

      const skills =
        gsap.utils.toArray(".skill-item");

      gsap.from(skills, {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },

        y: 35,
        opacity: 0,

        duration: 0.6,

        stagger: 0.07,

        ease: "power3.out",
      });


      /*
        CONTACT LABEL
      */

      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },

        opacity: 0,
        x: -30,

        duration: 0.8,

        ease: "power3.out",
      });


      /*
        CONTACT TITLE
      */

      gsap.from(".contact-main h2", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 65%",
        },

        y: 120,
        opacity: 0,

        duration: 1.2,

        ease: "power4.out",
      });


      /*
        CONTACT SMALL
      */

      gsap.from(".contact-small", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 65%",
        },

        y: 30,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",
      });


      /*
        CONTACT BOTTOM
      */

      gsap.from(".contact-bottom", {
        scrollTrigger: {
          trigger: ".contact-bottom",
          start: "top 90%",
        },

        y: 40,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out",
      });


      /*
        FOOTER
      */

      gsap.from(".footer-top", {
        scrollTrigger: {
          trigger: ".portfolio-footer",
          start: "top 95%",
        },

        y: 25,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",
      });

    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}