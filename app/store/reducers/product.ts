import { AnyAction } from 'redux'
import { ProductState } from '../types'
import { ProductActionType } from '../actions/types'

const initialState: ProductState = {
  products: [],
  product: null,
  error: null,
  loading: true,
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ProductActionType.CREATE_PRODUCT: {
      const { product } = action.payload.data
      return { ...state, products: [...state.products, product], loading: false }
    }
    case ProductActionType.GET_PRODUCTS: {
      const { products } = action.payload.data
      return { ...state, products, loading: false }
    }
    case ProductActionType.GET_PRODUCT: {
      const { product } = action.payload.data
      return { ...state, product, error: null, loading: false }
    }
    case ProductActionType.CREATE_PRODUCT_ERROR: {
      return { ...state, error: action.payload, loading: false }
    }
    case ProductActionType.GET_PRODUCTS_ERROR: {
      return { ...state, products: [], error: action.payload, loading: false }
    }
    default: {
      return state
    }
  }
}
