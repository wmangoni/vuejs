
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
        ],
		newElement: '',
		editFlag: false,
		index: 0
    },
	methods: {
		addElement: function() {
			console.log(this.newElement);
			var text = this.newElement.trim();
			if (this.editFlag) {
				this.itens[this.index].text = text;
				this.editFlag = false;
			} else {
				this.itens.push({text:text});
			}
			this.newElement = '';
		},
		editElement: function(e) {
			for(var i = 0; i < this.itens.length; i++){
				if(this.itens[i].text == e.text){
					this.index = i;
					break;
				}
			}
			this.editFlag = true;
			this.newElement = e.text;
		}
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
