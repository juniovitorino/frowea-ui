import styled from 'styled-components'
import { theme } from '../styles/themes/light'
import { FButton } from './FButton'

export const FRoundButton = styled(FButton) <IERoundButton>`
  color: ${props => props.disabled ? theme.colors.gray : theme.colors.primary};
  color: ${props => props.selected ? theme.colors.swan_white : theme.colors.primary};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  padding: 10px;
  border-radius: 50%;

  ${props => (
    !props.background ?
      `
        background: none;
        color: ${theme.colors.swan_white};
        padding: 0;

        &:hover {
          opacity: .75;
          background: none;
        }
    ` : ``
  )}
`

