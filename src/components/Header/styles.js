import styled from 'styled-components'
import { MEDIAQUERIES } from 'styles'

export const HeaderStyled = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'UniSansHeavy';
  color: ${({ theme }) => theme.textColor};
`
