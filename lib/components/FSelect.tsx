import styled from "styled-components";
import { theme } from '../styles/themes/light'
import { FLabel } from './FLabel';

const Select = styled.select`
  padding: 11px 36px 11px 20px;
  border: 1px solid ${theme.colors["gray-lighter"]};
  background-color: ${theme.colors.swan_white};
  background-image: url("data:image/svg+xml,%3Csvg width='12px' height='7px' viewBox='0 0 12 7' fill='%237b7b7b' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.90375L0.52875 0.375L6 5.31375L11.4713 0.375L12 0.90375L6 6.375L0 0.90375Z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center right 10px;
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
  margin-top: 3px;

  &::-ms-expand {
    display: none;
  }
`

const SelectContainer = styled.div<{ disabled: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  select:opened;

  ${props => (props.disabled ? `
    opacity: 0.65;
    pointer-events: none;
  `: ``)}
`;

export const FSelect = (props: any) => {
  const { label, required, disabled, children } = props
  return (
    <SelectContainer disabled={disabled}>
      <FLabel>{`${label} ${required ? '*' : ''}`}</FLabel>
      <Select>
        {children}
      </Select>
    </SelectContainer >
  )
}
