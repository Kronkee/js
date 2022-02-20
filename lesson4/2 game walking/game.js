let game = {
    // Запускает игру
    run() {
        while (true) {
            // Получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if (nextPoint.x < 0 || nextPoint.y < 0) {
                continue;
            } else {
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
            }
        }
    },
            init()
            {
                console.log('Ваше положение на поле в виде о.');
                renderer.render();
                console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
            }
};

game.init();