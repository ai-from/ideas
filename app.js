const vm = new Vue({
    el: '#app',
    data: () => ({
        columnCount: 4,
        itemsInColumns: [
            {from: 0, to: 2},
            {from: 3, to: 5},
            {from: 6, to: 7},
            {from: 8, to: 8}
        ],
        items: [
            {
                title: 'Мастер-классы',
                description: '153 тура-впечатления',
                src: 'img/1.png',
                imgAlt: 'alt text 1',
                imgTitle: 'title text 1'
            },
            {
                title: 'Вино и сыры',
                description: '153 тура-впечатления',
                src: 'img/2.png',
                imgAlt: 'alt text 2',
                imgTitle: 'title text 2'
            },
            {
                title: 'Модно в этом сезоне',
                description: '153 тура-впечатления',
                src: 'img/3.png',
                imgAlt: 'alt text 3',
                imgTitle: 'title text 3'
            },
            {
                title: 'Путешествие во времени',
                description: '153 тура-впечатления',
                src: 'img/4.png',
                imgAlt: 'alt text 4',
                imgTitle: 'title text 4'
            },
            {
                title: 'В гости в деревню',
                description: '153 тура-впечатления',
                src: 'img/5.png',
                imgAlt: 'alt text 5',
                imgTitle: 'title text 5'
            },
            {
                title: 'Охотники за скидками',
                description: '153 тура-впечатления',
                src: 'img/6.png',
                imgAlt: 'alt text 6',
                imgTitle: 'title text 6'
            },
            {
                title: 'Наедине с природой',
                description: '153 тура-впечатления',
                src: 'img/7.png',
                imgAlt: 'alt text 7',
                imgTitle: 'title text 7'
            },
            {
                title: 'Фермерские продукты',
                description: '153 тура-впечатления',
                src: 'img/8.png',
                imgAlt: 'alt text 8',
                imgTitle: 'title text 8'
            },
            {
                title: 'Пробуем на вкус',
                description: '153 тура-впечатления',
                src: 'img/9.png',
                imgAlt: 'alt text 9',
                imgTitle: 'title text 9'
            }
        ]
    }),
    mounted() {
        window.addEventListener('resize', e => {
            if (e.target.outerWidth > 1630) {
                this.columnCount = 4
                this.itemsInColumns = [
                    {from: 0, to: 2},
                    {from: 3, to: 5},
                    {from: 6, to: 7},
                    {from: 8, to: 8}
                ]
            }
            if (e.target.outerWidth < 1630) {
                this.columnCount = 3
                this.itemsInColumns = [
                    {from: 0, to: 2},
                    {from: 3, to: 5},
                    {from: 6, to: 8}
                ]
            }
            if (e.target.outerWidth < 1130) {
                this.columnCount = 2
                this.itemsInColumns = [
                    {from: 0, to: 4},
                    {from: 5, to: 8}
                ]
            }
            if (e.target.outerWidth < 850) {
                this.columnCount = 1
                this.itemsInColumns = [
                    {from: 0, to: 8}
                ]
            }
        })
    }
})