export class CartView {
  constructor (selector) {
    this.el = document.querySelector(selector)
    this.listEl = this.el.querySelector('.cartView_list')
    this.totalAmountEl = this.el.querySelector('.cart-total-amount')
    this.items = []
  }

  updateTotal () {
    const total = this.items.reduce((total, item) => total + item.subtotal, 0)
    this.totalAmountEl.innerHTML = total.toFixed(2)
  }

  addProduct (product) {
    let item = this.items.find(item => {
      return product.id === item.product.id
    })

    if (item) {
      item.amount += 1
      item.subtotal = product.price * item.amount
    } else {
      const amount = 1
      const subtotal = product.price * amount

      item = {
        product,
        amount,
        subtotal
      }

      this.items.push(item)
    }
    this.updateTotal()
  }

  render () {
    this.listEl.innerHTML = ''
    this.items
      .forEach(item => {
        const itemView = new CartItemView(item)
        itemView.appendTo(this.listEl)
      })
  }
}

export class CartItemView {
  constructor (item) {
    this.item = item

    this.el = document.createElement('div')
    this.el.classList.add('list-group-item')
  }

  render () {
    const { product, amount, subtotal } = this.item

    this.el.innerHTML = ` 
          <h4>${product.name} </h4>
          <span class="float-right"> 
          ${product.price} x ${amount} = 
          <strong> ${subtotal.toFixed(2)} </strong> </span>`
  }

  appendTo (parentEl) {
    this.render()
    parentEl.append(this.el)
  }
}
