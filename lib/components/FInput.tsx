import styled from "styled-components";
import { theme } from '../styles/themes/light'
import { FLabel } from "./FLabel";
import { FC } from 'react'

const Input = styled.input<IEInput>`
  padding: 11px 20px;
  border: 1px solid ${theme.colors["gray-lighter"]};
  background-color: ${theme.colors.swan_white};
  border-radius: 10px;
  min-width: 150px;
  transition: all 0.15s ${theme.easings.default};

  ${props => (props.disabled ? `
    opacity: 0.65;
    pointer-events: none;
  `: ``)}

  &:focus {
    outline: solid ${theme.colors.primary};
  }
`

const Label = styled(FLabel)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;

  span {
    display: none;
  }

  ${props => (props.disabled ? `
    opacity: 0.65;
    cursor: inherit;
  `: ``)}
`

export const FInput: FC<IEInput> = (props) => {
  const { label, required, ...attributes } = props
  return (
    <Label {...attributes}>
      {`${label} ${required ? '*' : ''}`}
      <Input {...attributes} />
    </Label>
  )
}
