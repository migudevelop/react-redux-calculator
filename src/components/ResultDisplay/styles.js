import styled from 'styled-components'

export const ResultDisplayStyled = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0.5rem 0;
`

export const InputStyled = styled.input`
  height: 2.5em;
  font-size: 1.5rem;
  border-radius: 0.5em;
  text-align: right;
  background: ${({ theme }) => theme.displayBgColor};
  color: ${({ theme }) => theme.displayTextColor};
  padding: 0 0.2em;
`
