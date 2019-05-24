import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  letter-spacing: .013em;
  display: flex;
  justify-content: flex-start;
  color: #101820;
`;

const Icon = styled.img`
  padding-right: 24px;
  padding-left: 3px;
  width: 20px;
`;

const WebsiteA = styled.a`
  text-decoration: none;
  color: #101820;

  &:hover {
    color: #b70038;
  }
`;

const WebsiteContainer = styled.span`
  margin-top: 1px;
`;

const Website = ({ data }) => {
  if (data) {
    return (
      <Container>
        <span>
          <Icon src="./icons/website-icon.jpg" />
        </span>
        <WebsiteContainer>
          <WebsiteA onClick={() => window.location.assign(`${data.website}`)} data-website>{data.website}</WebsiteA>
        </WebsiteContainer>
      </Container>
    );
  }

  return '';
};

export default Website;
