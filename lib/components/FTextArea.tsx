import styled from "styled-components";
import { theme } from '../styles/themes/light'
import { FLabel } from "./FLabel";

const TextArea = styled.textarea<IETextArea>`
  padding: 11px 20px;
  border: 1px solid ${theme.colors["gray-lighter"]};
  background-color: ${theme.colors.swan_white};
  border-radius: 10px;
  transition: all 0.15s ${theme.easings.default};
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;

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

export const FTextArea = (props: IETextArea) => {
  const { label, required, ...attributes } = props
  return (
    <Label {...attributes}>
      {`${label} ${required ? '*' : ''}`}
      <TextArea {...attributes} />
    </Label>
  )
}
