import React from 'react';
import S from './style';

// span 아이디, input
// span 비밀번호, input
// input태그의 width, height는 props로 받아서 동적으로 지정하기

const Styled05 = () => {
  return (
    <div>
      <S.Span>아이디</S.Span><S.Input type="text" width={"100%"} height={"50px"} />
      <S.Span>비밀번호</S.Span><S.Input type="password" width={"200px"} height={"30px"} />
    </div>
  );
};

export default Styled05;