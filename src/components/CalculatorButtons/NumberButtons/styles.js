import styled from 'styled-components'
import Button from 'components/Button'

export const NumberButtonsStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-between;
`

export const ButtonStyled = styled(Button)`
  flex: 0 1 32%;
  margin: 0 0 0.2em;
`
