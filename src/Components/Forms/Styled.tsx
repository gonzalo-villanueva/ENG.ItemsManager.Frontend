import styled from '@emotion/styled';

export const FormFieldWrapper = styled.div`
  margin-bottom:1rem;
`

export const FormRadioWrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:1rem;

  & label.MuiFormLabel-root{
    margin-right:1rem;
    display: inline-flex;
    align-items: center;
    box-align: center;
    flex-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
  }
`
export const FormButtonsWrapper = styled.div`
  display:flex;
  flex-direction:row;

  & span{
    margin-bottom:1rem;
    color:#999;
    display: inline-flex;
    margin-left:0.75rem;
    align-items: center;
  }
`
