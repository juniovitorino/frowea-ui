import styled from "styled-components"
import { theme } from '../styles/themes/light'

export const FLabel = styled.label<IELabel>`
  color: ${theme.colors.primary};
  font-family: ${theme.typeface};
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
`
