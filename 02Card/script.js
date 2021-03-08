console.log('Test')

const App = {
    data() {
        return{
            heading: 'Japan Trip',
            subHeading: 'Nature in japan',
            myImg: 'japan.jpeg',
            URL: 'https://web.learncodeonline.in'
        }
    }
}
Vue.createApp(App).mount('.vapp');