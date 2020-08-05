import React from 'react'
import styled from 'styled-components'
import { setQuantity, removeItem } from '../reducers/cartReducer'
import { useDispatch } from 'react-redux'


const CartItem = ({ item }) => {
    const dispatch = useDispatch()
console.log(item)
    return (
        <ItemWrapper>
            <NameWrapper>
            <h3>{item.title}</h3> <Button onClick={() => dispatch(removeItem(item.id))}>X</Button>
            </NameWrapper>
            <Quantity>
                <span>Quantity: </span>
                <Input value={item.quantity} onChange={(ev) => dispatch(setQuantity(item, ev.target.value))}></Input>
            </Quantity>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
    border: 2px dashed gray;
    height: 100px;
    margin-bottom: 10px;
`

const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    height: 60px;
`
const Button = styled.button`
    background: none;
    color: white;
    border: none;
    font-size: 20px;
    height: 30px;
    line-height: 100%;
`

const Quantity = styled.div`
    background-color: darkred;
    height: 40px;
    padding: 10px;
    margin-top: -4px;
    
`

const Input = styled.input`
    width: 20px;
`

export default CartItem