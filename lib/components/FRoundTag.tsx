import styled from "styled-components";
import { FLabel } from './FLabel'
import { theme } from '../styles/themes/light'

export const FRoundTag = styled(FLabel)`
  background-color: ${theme.colors.gray_extra_light};
  border-radius: 10px;
  text-transform: uppercase;
  border: 1px solid ${theme.colors.gray2};
  font-size: 10px;
  line-height: 16px;
  padding: 4px 10px;
`;
