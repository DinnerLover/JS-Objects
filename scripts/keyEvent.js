import {cat} from "./scripts/cat.js"
export const checkKeyDown = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'z') {
            cat.sleep();
        } else if (e.key === 'n') {
            cat.default();
        } else if (e.key === 'w') {
            cat.moveUp();
        } else if (e.key === 'a') {
            cat.moveLeft();
        } else if (e.key === 's') {
            cat.moveDown();
        } else if (e.key === 'd') {
            cat.moveRight();
        }
    })
}