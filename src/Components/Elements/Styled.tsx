import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    border:1px solid #C4C4C4;
    border-radius:0.25rem;
    margin-bottom:1rem;
    page-break-inside: avoid;

    & ul{
        list-style-type: none;
        margin: 1rem 0;
        padding: 0;
        display:flex;
        flex-direction:column;
        gap:0.5rem;
    }

    & .content{
        padding:0 1rem;
        white-space: pre-line;
    }

    & .fullcontent{
        flex-direction:column;
        min-height:5rem;
        display: flex;
        gap:1rem;
        padding:2rem;
        justify-content:center;
        align-items: center;
        box-align: center;
        flex-align: center;
        align-items: center;
        vertical-align: middle;
    }

    & h3{
        border-radius:0.25rem 0.25rem 0 0;
        padding:1rem;
        font-size:1rem;
        background:#e5e8ec;
        margin:0;
        display:flex;

        & span{
            font-weight: normal;
            display:flex;
            flex-direction:column;
            heigth: 2rem;
            flex:1;
            display: inline-flex;
            align-items: left;
            box-align: left;
            flex-align: center;
            align-items: left;
            vertical-align: middle;
        }
    }

    & h4{
        font-size:0.75rem;
        margin:0;
        margin-bottom:0.5rem;
    }

    & hr{
        border-style: solid;
        border-color:#C4C4C4;
        border-bottom:0;
        margin:0;
    }
`