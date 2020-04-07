import {
  ProductsListView,
  DEFAULT_TITLE
} from './ProductsListView.js'
import {
  CartView
} from './CartView.js'

const cartView = new CartView('#cartView')
cartView.render()

const productsView = new ProductsListView('#productsList')

productsView.addToCart = (product) => {
  cartView.addProduct(product)
  cartView.render()
}

fetch('https://lkristinevich7.github.io/shopping_card/dane.json')
  .then(resp => resp.json())
  .then(products => {
    productsView.loadProducts(products)
    productsView.render()
  })