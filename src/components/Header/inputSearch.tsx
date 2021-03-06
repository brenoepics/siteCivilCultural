import { ChangeEvent, useState, useEffect } from 'react';

import { ModalPopup } from 'Components/ModalPopup'

import {
  SearchContainer,
  BoxIcon,
  IconSearch,
  Button,
  IconClear,
  Search,
  ButtonSearch,
  IconAudio,
  IconInfo,
  ButtonAudio
} from 'Components/Header/styles'


export function InputSearch() {
  const [text, setText] = useState('')
  const [hasText, setHasText] = useState(false)
  // const stateless = useState(false)

  function hasSearch(changeEvent: ChangeEvent & { target: { value: string; } }) {
    const changeText = changeEvent.target.value

    setHasText(changeText?.length > 0)
    setText(changeText)
  }


  return (
    <>
      {/* {<ModalPopup
        icon={<IconInfo/>}
        title='Aviso'
        content='Seu navegador não tem suporte para audio'
        footer={'ok'}
        stateless={stateless}
      /> } */}
      <SearchContainer>
        <Search placeholder='Pesquise aqui' onChange={hasSearch} value={text} />
        <BoxIcon
          width='2rem'
          height='2rem'
        >
          {hasText && (
            <Button
              title='Limpar pesquisa'
              onClick={_ => (setText(''), setHasText(false))}
              aria-hidden='true'
            >
              <IconClear />
            </Button>
          )
          }
        </BoxIcon>
        <BoxIcon>
          <ButtonAudio title='Fale para escrever na caixa de pesquisa e pressione enter' >
            <IconAudio />
          </ButtonAudio>
        </BoxIcon>
        <BoxIcon style={{padding: 0}} >
          <ButtonSearch  title='Click para pesquisar'  >
            <IconSearch />
          </ButtonSearch>
        </BoxIcon>
      </SearchContainer>
    </>
  )
}