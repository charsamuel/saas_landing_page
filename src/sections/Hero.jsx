import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Incredibly Easy
            </h1>
            <p className="text-yellow-300">
            We created CHERA AI Video Editor to be intuitive, quick to master, and impressively powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Get Started</Button>
            </LinkScroll>
          </div>

          <div className="absolute top-100   pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="w-[78vw] max-lg:h-auto rounded-s-md"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
