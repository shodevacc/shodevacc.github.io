"use client";

import styled from "styled-components";

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.cinnabar};
  font-size: 3.2rem;
  text-align: center;
  margin: 4rem 0;
`;
const Item = styled.li`
  a {
    font-size: 16px;
    background: transparent;
    border: ${({ theme }) => theme.colors.cinnabar} 2.5px solid;
    color: ${({ theme }) => theme.colors.cinnabar};
    padding: 0.5rem 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.cinnabar};
      color: #fff;
    }
  }
  p {
    text-align: justify;
  }
`;

function PublicationList({ publications }) {
  return (
    <>
      <Title>Publications</Title>
      <ul>
        {publications.map((pub) => (
          <Item key={pub.slug}>
            <h2>{pub.title}</h2>
            <p>{pub.abstract}</p>
            <a target="_blank" rel="noopener noreferrer" href={pub.link}>
              View
            </a>
          </Item>
        ))}
      </ul>
    </>
  );
}

export default PublicationList;
