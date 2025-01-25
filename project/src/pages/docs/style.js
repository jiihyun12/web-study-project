import { styled } from 'styled-components'
import { flexCenter, h1Bold } from '../../styles/common'
import { fadaIn } from '../../keyframes/keyframes'

// 스타일드 컴포넌트 p, strong태그를 만들고
// p태그는 "스타일 컴포넌트 사용!" 내용과 폰트 사이즈 20px
// strong 태그는 "처음 접하는 스타일" 내용과 밑줄, 자간 20px


const S = {}

  S.StyledP = styled.p`
    font-size: 20px;
  `

  S.styleStrong = styled.strong`
    text-decoration: underline;
    letter-spacing: 20px;
  `

  S.Styled01 = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px #333;
  `
  S.Styled04 = styled.div`
    width: 100px;
    height: 100px;
    border: solid 1px gray;
    /* background-color: ${(props) => { return props.backgroundColor}}; */
    background-color: ${({backgroundColor}) => backgroundColor};
  `

  S.Span = styled.span`
    font-weight: 800;
  `

  S.Input = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  `

  S.Container = styled.div`
    width: 500px;
    height: 500px;
    border: solid 1px blue;
    ${flexCenter}
  `

  S.TextBox = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px #333;
    ${flexCenter}
  `

  S.Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: orange;
  `

  S.P = styled.p`
    font-size: 16px;
    animation: ${fadaIn} 3s forwards;
    /* @media screen and (min-width:0) and (max-width:1920px){ } */
  `

  S.H1 = styled.h1`
    /* props.theme */
    ${h1Bold}
  `
  S.FontAwesomeWrap = styled.div`
  /* 자기 자신 선택자 : & */
  & p {}
  & > div {}
  & .box {}
  .box {}
  
  & svg {
    font-size: 300px;
  }
  & path {
      color: purple;
    }
  `

export default S;