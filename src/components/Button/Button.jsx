import React from 'react';
import { FooterStyle, ButtonStyle } from '../Button/Button.styled';

export const Button = ({ onClick }) => {
  return (
    <FooterStyle>
      <ButtonStyle type="button" onClick={onClick}>
        Load more
      </ButtonStyle>
    </FooterStyle>
  );
};
