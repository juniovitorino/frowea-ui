import styled from "styled-components"
import { theme } from '../styles/themes/light'

export const FMenuItem = styled.button<IEButton>`
  font-family: "Graphik", sans-serif;
  font-weight: 100;
  line-height: 18px;
  font-size: 16px;
  color: ${theme.colors.primary};
  transition: all 0.35s ${theme.easings.default};

  &:hover {
    opacity: 0.75;
  }
  
  ${props => (
    props.selected ?
      `border-bottom: 2px solid ${theme.colors.primary};
        font-weight: 400;
        padding-bottom: 20px;`
      : ``
  )}
`
