const player = {
    x: 0,
    y: 0,
//Двигает игрока
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};