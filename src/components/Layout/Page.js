"use client";

import styled from "styled-components";
import Nav from "../Nav/Nav1";

//Container with added padding for appropriate nav height and side margins
const PaddContainer = styled.div`
  max-width: 100vw;
  margin: ${({ theme }) => theme.constant.navHeight} 2rem 2rem 2rem;

  ${({ theme }) => theme.sizes.md} {
    margin: ${({ theme }) => theme.constant.navHeight} 3rem 3rem 3rem;
  }
`;
function Page({ darkNav = false, children, addPadd = false }) {
  return (
    <>
      <Nav dark={darkNav} />
      {addPadd ? <PaddContainer>{children}</PaddContainer> : children}
    </>
  );
}

export default Page;
