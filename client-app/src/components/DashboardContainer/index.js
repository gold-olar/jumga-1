import React from "react";
import { Col } from "react-bootstrap";

const DashboardContainer = ({
  notifications,
  children,
  mediaQuery,
  signout,
  user,
  setShowActionModal,
}) => {
  return (
    <>
      <Col
        className="mt-3 p-2"
        md={{
          span: mediaQuery === "isDesktop" ? 10 : 12,
          offset: mediaQuery === "isDesktop" ? 2 : 0,
        }}
      >
        {children}
      </Col>
    </>
  );
};

export default DashboardContainer;
