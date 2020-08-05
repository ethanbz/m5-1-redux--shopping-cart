import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useSelector } from 'react-redux'
import { getItemArr } from '../reducers/cartReducer'

import CartItem from './CartItem'

const Cart = () => {
    const storeItems = useSelector(state => Object.values(state))

    return (
            <Wrapper>
                <Content>
                    <ItemContainer>
                        <h2>Your Cart</h2>
                        <p>{storeItems.length} items</p>
                        {storeItems.map(item => <CartItem key={item.id} item={item} />)}
                    </ItemContainer>
                    <PurchaseWrapper>
                        <h3>Total: ${ storeItems[0] ? storeItems.reduce(((a, b) => a + b.price*b.quantity), 0)/100 : 0}</h3>
                        <PurchaseButton>
                            Purchase
                        </PurchaseButton>
                    </PurchaseWrapper>
                </Content>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 315px;
    background-color: purple;
    position: fixed;
    right: 0;
    overflow-y:scroll;
    
    
`
const ItemContainer = styled.div`

`


const Content = styled.div`
    margin: 30px;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PurchaseWrapper = styled.div`
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 260px;
    margin-bottom: 80px;
`

const PurchaseButton = styled(Button)`
    height: 30px;
    width: 130px;
    line-height: 100%;
    margin-right: 20px;
`

export default Cart