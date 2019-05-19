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

const PhoneA = styled.a`
  text-decoration: none;
  color: #101820;
`;

const PhoneContainer = styled.span`
  margin-top: 1px;
`;

const parseNumber = (number) => {
  const pre = number.slice(1, 4);
  const mid = number.slice(6, 9);
  const suf = number.slice(10);

  return (pre + mid + suf);
};

const PhoneNumber = ({ data }) => {
  if (data) {
    const hrefNumber = parseNumber(data.phone);

    return (
      <Container>
        <span>
          <Icon src="./icons/phone-icon.jpg" />
        </span>
        <PhoneContainer>
          <PhoneA href={`tel:${hrefNumber}`}>{data.phone}</PhoneA>
        </PhoneContainer>
      </Container>
    );
  }

  return '';
};

export default PhoneNumber;
