import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export const LoupeIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  position: absolute;
  margin-left: 435px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 432px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 33px;
  margin-left: 411px;
  padding-left: 64px;
  border: 1px solid ${({ theme }) => theme.colors.search.searchBorder};
  background: ${({ theme }) => theme.colors.search.searchBackground};
`;
