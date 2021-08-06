import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {useForm, ValidationError} from '@formspree/react';

const propTypes = {
  ...SectionProps.types
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvjalbb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="email">
        Email Address
      </label>
      <input
        className="form-input"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label className="form-label" htmlFor="email">
        Message
      </label>
      <textarea
        className="form-input"
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <br/>
      <button className="button button-primary button-wide-mobile" type="submit" disabled={state.submitting}>
        Request a demo
      </button>
    </form>
  );
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
                className,
                topOuterDivider,
                bottomOuterDivider,
                topDivider,
                bottomDivider,
                hasBgColor,
                invertColor,
                ...props
              }) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Wedding on the Ethereum Blockchain for the life.
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Generate a beautiful printable contract which it saved on the Blockchain.
              </p>

            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
               data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={require('./../../assets/images/form.jpeg')}
              alt="Hero"
              width={400}
              height={300}/>
          </div>
          <br />
          <div  className="reveal-from-bottom" data-reveal-delay="1000">
            <ButtonGroup>
              <ContactForm/>
            </ButtonGroup>

          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
