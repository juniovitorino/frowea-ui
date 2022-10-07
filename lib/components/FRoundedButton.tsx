import styled from 'styled-components'
import { theme } from '../styles/themes/light'
import { FButton } from './FButton'

export const FRoundedButton = styled(FButton) <IERoundButton>`
  color: ${props => props.disabled ? theme.colors.gray : theme.colors.primary};
  color: ${props => props.selected ? theme.colors.swan_white : theme.colors.primary};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background-color: ${theme.colors.swan_white};
  padding: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.gray2}
`
