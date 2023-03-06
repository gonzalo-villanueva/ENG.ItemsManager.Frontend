import styled from '@emotion/styled';

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding:0 2rem;
  gap:1rem;
  width:100%;
  background:#001529;

  & a{
    padding:1rem;
    gap:0.5rem;
    display: inline-flex;
    color:#919AA3;
    line-height:2rem;

    & *{
      display: flex;
      align-items: center;
      box-align: center;
      flex-align: center;
      align-items: center;
      cursor: pointer;
      vertical-align: middle;
    }

    & svg{
      width: 1.5rem;
      height: 1.5rem;
    }

    &.active{color:white;
      background:#1890FF;
      font-weight: bold;
    }
  }
`

export const LayoutBody = styled.div`
  margin:2rem;
  padding:2rem;
  gap:2rem;
  background: white;
  display:flex;

  
  & h1{
    font-size:1.5rem;
    margin:0;
    margin-bottom:1.5rem;
}

& h2{
  border-radius:0.25rem 0.25rem 0 0;
  padding-bottom:1rem;
  font-size:1.5rem;
  margin:0;
  gap:1rem;
  display:flex;
  font-weight:normal;

  & span{
      display:flex;
      flex-direction:column;
      heigth: 2rem;
      display: inline-flex;
      align-items: left;
      box-align: left;
      flex-align: center;
      align-items: left;
      vertical-align: middle;
  }
}
`