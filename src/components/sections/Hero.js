import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import {useForm, ValidationError} from '@formspree/react';

const propTypes = {
  ...SectionProps.types
};

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
        className="form-input wedding-input"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <br/>
      <button className="button button-primary button-wide-mobile wedding-submit-button" type="submit" disabled={state.submitting}>
        I am interested
      </button>
    </form>
  );
}

const defaultProps = {
  ...SectionProps.defaults
};


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
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

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
          <Image
            src={require('./../../assets/images/logo_eth_with_ring.png')}
            alt="Main Logo"
            width={200}
          />
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Get married on the Ethereum Blockchain for the life
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Generate a beautiful printable and scanable contract which it saved on the Blockchain.
              </p>
            </div>
          </div>

          <div className="reveal-from-bottom" data-reveal-delay="200">
            <ButtonGroup>
              <ContactForm/>
            </ButtonGroup>
          </div>

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
               data-reveal-delay="800">
            <Image
              className="has-shadow"
              src={require('./../../assets/images/contract.jpg')}
              alt="Hero"
              width={700}/>
          </div>
          <br/>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
