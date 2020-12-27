import * as Action from '../Actions/ProductActions';

const INITIAL_STATE = {
    count: 0,
    addedItems: [],
    items: [],
    total: 0
};

export default function productReducer(state = INITIAL_STATE, action) {
    const { items, id } = action
    switch (action.type) {
        case Action.GET_PRODUCTS: {
            return {
                ...state,
                items
            }
        }
        case Action.ADD_TO_CART: {
            let addedItem = state.items.find(item => item.itemId === action.id)
            //Checking if it already exists
            let item_exist = state.addedItems.find(item => id === item.itemId)
            if (item_exist) {
                addedItem.addedQuantity += 1

                return {
                    ...state,
                    total: state.total + addedItem.price,
                    count: state.count += 1
                }
            }
            else {
                addedItem.addedQuantity = 1;
                // console.log(addedItem);
                //calculating the total
                let newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal,
                    count: state.count += 1
                };
            }

        }
        case Action.REMOVE_FROM_CART: {
            let itemToRemove = state.addedItems.find(item => action.id === item.itemId)
            let new_items = state.addedItems.filter(item => action.id !== item.itemId)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                count: 0
            }
        }
        case Action.ADD_QUANTITY: {
            let addedItem = state.items.find(item => item.itemId === action.id)
            addedItem.addedQuantity += 1
            // console.log(addedItem, "addedITem");
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal,
                count: state.count += 1
            }
        }
        case Action.SUBTRACT_QUANTITY: {
            let addedItem = state.items.find(item => item.itemId === action.id)
            //if the quantity == 0 then it should be removed
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.itemId !== action.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal,
                    count: state.count -= 1
                }
            }
            else {
                addedItem.addedQuantity -= 1
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    total: newTotal,
                    count: state.count -= 1
                }
            }
        }
        default:
            return state;
    }
}
