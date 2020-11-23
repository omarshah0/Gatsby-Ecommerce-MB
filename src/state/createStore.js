import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `ADD_TO_CART`) {
    let found = false
    state.cart.forEach(item => {
      if (item.contentful_id === action.payload.contentful_id) {
        found = true
      }
    })
    if (found) {
      return Object.assign({}, state, {
        cart: state.cart,
      })
    } else {
      const updatedCart = [action.payload, ...state.cart]
      localStorage.setItem("root", JSON.stringify({ cart: updatedCart }))
      return Object.assign({}, state, {
        cart: updatedCart,
      })
    }
  }

  if (action.type === `REMOVE_FROM_CART`) {
    const updatedCart = state.cart.filter(
      item => item.contentful_id !== action.payload
    )
    localStorage.setItem("root", JSON.stringify({ cart: updatedCart }))
    return Object.assign({}, state, {
      cart: updatedCart,
    })
  }

  return state
}

let initialState = { cart: [] }
const windowGlobal = typeof window !== "undefined" && window

if (windowGlobal.localStorage) {
  if (localStorage.getItem("root")) {
    const root = JSON.parse(localStorage.getItem("root"))
    initialState = root
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
