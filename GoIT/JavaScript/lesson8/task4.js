function Article(){
    this.created = new Date();

    Article.counter++;
    Article.lastDate = this.created;

    Article.showStats = function(){
        console.log('Всего: ' + Article.counter + ', Последняя: ' + Article.lastDate);
    }
}
Article.counter = 0;
Article.lastDate = null;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats();