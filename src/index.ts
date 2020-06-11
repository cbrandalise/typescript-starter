class App {
    public anchorDiv: HTMLElement;
    constructor() {
        console.log("HELLO WORLD");
        this.anchorDiv = document.getElementById('app');
        console.log(this.anchorDiv);
    }
}

(function() {
    new App();
})();