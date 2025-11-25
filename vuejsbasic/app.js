const app=Vue.createApp({
  data() {
    return {
      books: [
        {
          name: "You Know Javascript",
          author: "Leo",
          age: 21,
          isFav: true,
        },
        {
          name: "You Know PHP",
          author: "Light",
          age: 27,
          isFav: false,
        },
      ],
      isshow: true,
    };
  },

  methods: {
    toggleShow() {
      this.isshow = !this.isshow;
    },
  },
});

  methods: {
    increaseage(){
      this.age++
      },
      
      favtogglehandler(book){
        book.isFav = !book.isFav
      }

    //   ChangeAuthor() {
    //     this.author= 'aung aung'
    // },
    // mouseoverhandler() {
    //   console.log("mouse over")
    // },

    // mouseleavehandler(){
    //   console.log("mouse leave")
    // },

    // doubleclickhandler(){
    //   console.log("double click")
    // }


  }



app.mount('#app')