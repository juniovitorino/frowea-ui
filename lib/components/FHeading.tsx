import styled, { css } from 'styled-components'
import { theme } from '../styles/themes/light'

const FHeadingBase = css`
  font-family: "Graphik", sans-serif;
  color: ${theme.colors.black_and_gray_base}
`

export const FH1 = styled.h1`
  ${FHeadingBase};
`

export const FH2 = styled.h2`
  ${FHeadingBase};
`

export const FH3 = styled.h3`
  ${FHeadingBase};
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0px;
  font-weight: 100;
`

export const FH4 = styled.h4`
  ${FHeadingBase};
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0px;
  font-weight: 500;
`
export const FH5 = styled.h1`
  ${FHeadingBase};
`
export const FH6 = styled.h1`
  ${FHeadingBase};
`
