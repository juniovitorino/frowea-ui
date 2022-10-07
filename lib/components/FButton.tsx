import styled from 'styled-components'
import { theme } from '../styles/themes/light'

export const FButton = styled.button<IEButton>`
  display: flex;
  padding: 14px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: ${props => props.disabled ? theme.colors.gray : theme.colors.secondary};
  background-color: ${props => props.disabled ? theme.colors.gray_extra_light : theme.colors.thertiary};
  transition: 0.15s ${theme.easings.default};

  /* Disabled */
  ${props => (
    !props.disabled ?
      `
        &:hover {
          background-color: ${theme.colors.secondary};
          border-color: ${theme.colors.secondary};
          color: ${theme.colors.swan_white};
        }`
      :
      `pointer-events: none;`
  )}

  /* If selected  */
  ${props => (
    props.selected ?
      `
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.swan_white};
        pointer-events: none;
        `
      : ``
  )}

  ${props => (
    !props.background ?
      `
        background: none;
        color: ${theme.colors.swan_white} !important;

        &:hover {
          opacity: .75;
        }
    ` : ``
  )}
`

FButton.defaultProps = { background: true }
