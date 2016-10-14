Vue.component('list-itens', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
})

var app = new Vue({
    el: '#jumbotron',
    data: {
        title: 'Hello Vue!',
        text: 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
        link: 'Learn more',
        itens: [
          {text: 'Maça'},
          {text: 'Banana'},
          {text: 'Uva'},
          {text: 'Morango'}
        ]
    }
})

var loop = new Vue({
  el: '#loop',
  data: {
    cols: [
        { title: 'Meu titulo 1', text: '1 Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.', link: 'Detalhes' },
        { title: 'Meu titulo 2', text: '2 Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.', link: 'Detalhes' },
        { title: 'Meu titulo 3', text: '3 Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.', link: 'Detalhes' }
    ]
  },
  methods: {
    add_msg: function (x) {
      //console.log(x.link);
      alert(x.title);
    }
  }
})
