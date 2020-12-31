import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import Button from "react-bootstrap/Button";

function HeroSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="text-center"
        />
        <Button
          variant={props.buttonColor}
          size="lg"
          onClick={props.buttonOnClick}
        >
          {props.buttonText}
        </Button>
      </Container>
    </Section>
  );
}

export default HeroSection2;