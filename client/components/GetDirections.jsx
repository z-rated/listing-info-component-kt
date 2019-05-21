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
  padding-left: 2px;
  width: 23px;
`;

const DirA = styled.a`
  text-decoration: none;
  color: #101820;

  &:hover {
    color: #b70038;
  }
`;

const GetDirectionsContainer = styled.span`
  margin-top: 1px;
`;

const Website = ({ data }) => {
  if (data) {
    return (
      <Container>
        <span>
          <Icon src="./icons/directions-icon.jpg" />
        </span>
        <GetDirectionsContainer>
          <DirA href={`https://www.google.com/maps/place/${data.location.coords}`}>Get Directions</DirA>
        </GetDirectionsContainer>
      </Container>
    );
  }

  return '';
};

export default Website;
