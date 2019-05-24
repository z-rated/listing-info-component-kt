import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  letter-spacing: .013em;
  display: flex;
  justify-content: flex-start;
  color: #101820;

  &:hover {
    color: #b70038;
  }
`;

const Icon = styled.img`
  padding-right: 24px;
  padding-left: 3px;
  width: 19px;
`;

const AddressText = styled.span`
  margin-top: 3px;
`;

const Address = ({ data, toggleModal, modalIsOpen }) => {
  if (data) {
    return (
      <Container>
        <span>
          <Icon src="./icons/location-icon.jpg" />
        </span>
        <AddressText onClick={() => { toggleModal(!modalIsOpen); }} data-address-text>
          {data.location.address}
        </AddressText>
      </Container>
    );
  }

  return '';
};


export default Address;

// href={`http://www.google.com/maps/place/${data.location.coords}`}
