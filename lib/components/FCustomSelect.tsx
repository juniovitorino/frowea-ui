import styled from "styled-components";
import { theme } from '../styles/themes/light'
import { useState } from 'react';
import { FLabel } from './FLabel';
import * as hash from 'object-hash'

const SelectLabel = styled.div`
  padding: 11px 36px 11px 20px;
  border: 1px solid ${theme.colors["gray-lighter"]};
  background-color: ${theme.colors.swan_white};
  border-radius: 10px;
  min-width: 150px;
  transition: all 0.15s ${theme.easings.default};
  color: ${theme.colors.primary};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  &::-ms-expand {
    display: none;
  }
`

const SelectContainer = styled.div<{ disabled: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  select:opened;

  > label {
    margin-bottom: 5px;
  }

  ${props => (props.disabled ? `
    opacity: 0.65;
    pointer-events: none;
  `: ``)}
`;

const SelectArrow = styled.span<{ open: Boolean }>`
  display: block;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 7' fill='%237b7b7b' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.90375L0.52875 0.375L6 5.31375L11.4713 0.375L12 0.90375L6 6.375L0 0.90375Z' /%3E%3C/svg%3E");
  width: 12px;
  height: 6px;
  position: absolute;
  right: 12px;
  pointer-events: none;

  ${props => (
    props.open ? `transform: rotate(180deg); ` : ``
  )}
`;

const OptionsList = styled.div<{ open: Boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${theme.colors["gray-lighter"]};
  border-radius: 10px;
  margin-top: 8px;
  gap: 20px;
  width: 100%;
  background-color: ${theme.colors.swan_white};
  position: absolute;
  z-index: 99;
  top: 100%;

  ${props => props.open ? `display: flex` : `display: none`}
`

const OptionItem = styled.span<{ open: boolean }>`
  cursor: pointer;
  display: block;
  color: ${theme.colors.primary}
`

// TODO: Add the blueish version.
export const FCustomSelect = (props: any) => {
  const { options, label, required, disabled } = props
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [currentLabel, setCurrentLabel] = useState<string>(label);

  const onSelect = (e: any) => {
    if (e.target.getAttribute('value')) setCurrentLabel(e.target.getAttribute('label'))
    setIsOpen(!isOpen)
  }

  return (
    <SelectContainer disabled={disabled} onClick={(e) => onSelect(e)}>
      {label &&
        <FLabel>{`${label} ${required ? '*' : ''}`}</FLabel>
      }
      <SelectLabel>
        {!currentLabel ? options[0].label : currentLabel}
        <SelectArrow open={isOpen} />
      </SelectLabel>
      <OptionsList open={isOpen}>
        {options.map((option: any) => <OptionItem key={`option-${hash(option.value + option.label)}`} {...option}>{option.label}</OptionItem>)}
      </OptionsList>
    </SelectContainer>
  )
}
