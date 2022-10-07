import styled from "styled-components";
import { FLabel } from "./FLabel";
import { theme } from '../styles/themes/light'

const Radio = styled.input<IERadio>.attrs({ type: 'radio' })`
  position: absolute;
  z-index: -1;
  cursor: pointer;
  opacity: 0;
`

const Label = styled(FLabel)`
  > span {
    width: 18px;
    height: 18px;
    display: flex;
    margin-right: 8px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ${theme.easings.default};
  }

  ${props => (
    props.disabled ? `
      pointer-events: none;
      opacity: 60%;
    ` : ``
  )}

  input:checked ~ span { 
    background-color: ${theme.colors.primary};
    &:after {
      width: 65%;
      height: 65%;
      content: ' ';
      display: block;
      color: ${theme.colors.swan_white};
      opacity: 1;
      background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 14 14' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.7758 0.890789L12.6682 0.830864L12.6067 0.937593L6.47738 11.5751L1.24888 6.43461L1.16112 6.34833L1.07349 6.43474L0.537236 6.96349L0.446839 7.05262L0.537361 7.14163L6.58611 13.0891L6.70137 13.2025L6.78206 13.0624L13.4833 1.4299L13.5466 1.31999L13.4358 1.25829L12.7758 0.890789Z' stroke='white' stroke-width='0.25'/%3E%3C/svg%3E");
    }
  }
`

export const FInputRadio = (props: IERadio) => {
  const { label, disabled, ...attributes } = props;
  return (
    <Label disabled={disabled}>
      <Radio {...attributes} />
      <span></span>
      {label}
    </Label>
  )
}
