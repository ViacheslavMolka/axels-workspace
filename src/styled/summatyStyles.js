import styled from 'styled-components'; 

export const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
padding-top: 15px;
& a {
    color: #6e6e6e;
}
`

export const Cards = styled.div`
display: flex;
position: relative;
flex-direction: row;
width: 100%;
border: 0;
background-color: #f2f4ff;
min-width: 0;
word-wrap: break-word;
&:not(:first-child) {
    margin-top: 1rem;
}
&:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -8px;
    background-color: #e3e1eb;
}
& span.card-title {
    font-size: 12px;
    margin-bottom: 0;
    color: #6e6e6e;
}
& img { 
    width: 3rem; 
    height: 3rem;
}
& div.card-body {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 7px;
    font-size: 10px;
    font-weight: 500;
} 
`

export const WrapperListItems = styled.div`
display: flex;
justify-content: space-between;
position: relative;
&:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -8px;
    background-color: #e3e1eb;
}
& div.list-group {
    margin-top: 1rem;
    position: relative;
}
& div.list-group div.list-group-item{
    background-color: #f2f4ff;
    border: 0;
    padding: 0.3rem 0 0 0;
    font-size: 12px;
    color: #6e6e6e;
}
`

export const BottomWrapper = styled.div`
display: flex;
height: 300px;
flex-direction: column;
justify-content: space-between;
align-items: center;
& div.total-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-weight: 700;
    font-size: 12px;
    color: #250029;
}
& div.footer-text {
    font-size: 10px;
    color: #6e6e6e;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
}
`
