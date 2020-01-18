import React from "react";
import styled from "styled-components";
import { dimensions } from "../../utils/styles/style";

const StyledLayout = styled.div`
  width: ${dimensions.siteWidth};
  margin: 0 auto;
`;

const Layout = ({children}) => {
  return <StyledLayout>{children}</StyledLayout>;
};

Layout.defaultProps = {};

export default Layout;
