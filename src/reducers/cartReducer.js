import { useSelector } from 'react-redux'

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD-ITEM':{
            let quantity = state[action.item.id] ? state[action.item.id].quantity : 0
            return {
              ...state,
              [action.item.id]: {
                ...action.item,
                quantity: quantity += 1,
              }
            }
          }
        case 'SET-QUANTITY':
            return {
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: action.change
                }
            }
        case 'REMOVE-ITEM':
            const newState = { ...state }
            delete newState[`${action.id}`]
            return newState
    }
    return state
}

export const addItem = item => {
    return {
        type: 'ADD-ITEM',
        item
    }
}

export const setQuantity = (item, change ) => {
    return {
        type: 'SET-QUANTITY',
        item, change
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE-ITEM',
        id
    }
}

export const getItemArr = state => Object.values(state)

export default cartReducer