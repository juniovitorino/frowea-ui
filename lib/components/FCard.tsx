import styled from 'styled-components';
import { FC } from 'react'

const Card = styled.article`
  overflow: hidden;
  min-width: 240px;
  border-radius: 0.75em;
`

export const FCard: FC<IECard> = ({ children }) => {
  return (
    <Card>
      {children}
    </Card>
  )
}

