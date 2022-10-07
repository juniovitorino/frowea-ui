import styled from "styled-components";
import { theme } from '../styles/themes/light'

export const FListItem = styled.div<IEListView>`
  display: grid;
  width: 100%;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.colors.gray_extra_light};
  padding: 15px 20px;
  border-radius: 10px;
  grid-template-columns: repeat(${props => props.columns}, auto) 1fr;
`
