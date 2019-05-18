import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  letter-spacing: .013em;
  display: flex;
  justify-content: flex-start;
  color: #101820;
  min-width: 380px;

  &:hover {
    color: #b70038;
  }
`;

const Icon = styled.img`
  padding-right: 24px;
  padding-left: 3px;
  width: 20px;
`;

const AddressText = styled.span`
  margin-top: 1px;
`;

const Address = ({ data }) => {
  if (data) {
    return (
      <Container>
        <span>
          <Icon src="./icons/location-icon.jpg" />
        </span>
        <AddressText>
          {data.location.address}
        </AddressText>
      </Container>
    );
  }

  return '';
};


export default Address;

// href={`http://www.google.com/maps/place/${data.location.coords}`}
