import { FC } from 'react'
import styled from 'styled-components';
import { theme } from '../styles/themes/light'

export const CardFooter = styled.div`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.base};
`

export const FCardFooter: FC<IECardFooter> = (props) => {
  const { className, children } = props
  return (
    <CardFooter className={className}>
      {children}
    </CardFooter>
  )
}
