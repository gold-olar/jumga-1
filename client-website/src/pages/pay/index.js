import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import { Row, Col } from "react-bootstrap";
import { Context as OrderContext } from "../../contexts/orderContext";

import { useHistory } from "react-router-dom";
// import { useRouter } from "../../util/router";

const PaymentPage = ({}) => {
  const history = useHistory();
  //   const router = useRouter();

  const {
    state: { order },
    fetchOrderDetails,
  } = useContext(OrderContext);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <Section className="p-3">
      <span className=" go-back-icon" onClick={() => history.goBack()}>
        <i className="fa fa-arrow-left"></i> Back
      </span>
      <h3 className="text-center mb-5"> Make payments </h3>
      <Row className="p-5">
        <Col>{/* 
            
                Payment page 
            */}</Col>
      </Row>
    </Section>
  );
};

export default PaymentPage;
