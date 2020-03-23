export class ProductsListView {
  constructor (selector) {
    this.el = document.querySelector(selector)
    this.products = []
    if (!this.el) { throw Error('Cant find element with selector ' + selector) }
  }

  loadProducts (products) {
    this.products = products
  }

  addToCart (product) {
    console.log(product)
  }

  render () {
    this.el.innerHTML = ''

    this.products.forEach((product) => {
      const div = this.renderProduct(product)
      this.el.append(div)
    })

    if (this.products.length == 0) {
      this.el.innerHTML = `<div class="list-group-item text-muted text-center"> 
              No products found 
          </div>`
    }
  }

  renderProduct (product) {
    const div = document.createElement('div')
    div.classList.add('list-group-item')
    div.innerHTML = ` <span>${product.name}<span>
                     <input type="button" value="Do koszyka!"
                      class="js-add-to-cart float-right btn btn-success">`
    div.querySelector('.js-add-to-cart')
      .addEventListener('click', (event) => {
        this.addToCart(product)
      })
    return div
  }
}

export const DEFAULT_TITLE = 'Products'