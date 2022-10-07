import { FC } from "react";
import styled from "styled-components";
import { FImage } from './FImage'

export const CardImage = styled(FImage)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`

export const FCardImage: FC<IECardImage> = (props) => {
  const { className, src, alt } = props
  return (
    <div className={className}>
      <picture>
        <CardImage src={src} alt={alt} />
      </picture>
    </div>
  )
}
