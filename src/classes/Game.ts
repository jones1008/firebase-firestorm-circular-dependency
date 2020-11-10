import {Entity, field, rootCollection} from "firebase-firestorm";

@rootCollection({
    name: 'games'
})
export default class Game extends Entity {
    id: string;

    @field({name: 'countdown_time'})
    countdownTime: number = 60;
}