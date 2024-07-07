// Solution for the 587136ba2eefcb92a9000027 problem in CodeWars: Snakes and Ladders (5 kyu)

export class SnakesLadders {

    private players: Player[] = [new Player(1), new Player(2)]
    private currentPlayer: 1 | 2 = 1
    private readonly jumps: Jump[] = [
        {
            value: 2,
            jumpValue: 38
        },
        {
            value: 7,
            jumpValue: 14
        },
        {
            value: 8,
            jumpValue: 31
        },
        {
            value: 15,
            jumpValue: 26
        },
        {
            value: 16,
            jumpValue: 6
        },
        {
            value: 21,
            jumpValue: 42
        },
        {
            value: 28,
            jumpValue: 84
        },
        {
            value: 36,
            jumpValue: 44
        },
        {
            value: 46,
            jumpValue: 25
        },
        {
            value: 49,
            jumpValue: 11
        },
        {
            value: 51,
            jumpValue: 67
        },
        {
            value: 62,
            jumpValue: 19
        },
        {
            value: 64,
            jumpValue: 60
        },
        {
            value: 71,
            jumpValue: 91
        },
        {
            value: 74,
            jumpValue: 53
        },
        {
            value: 78,
            jumpValue: 98
        },
        {
            value: 87,
            jumpValue: 94
        },
        {
            value: 89,
            jumpValue: 68
        },
        {
            value: 92,
            jumpValue: 88
        },
        {
            value: 95,
            jumpValue: 75
        },
        {
            value: 99,
            jumpValue: 80
        }
    ]
    private gameOver: boolean = false

    play(die1: number, die2: number): string {

        if(this.gameOver){
            return 'Game over!'
        }

        const player = this.players.find(player => player.id === this.currentPlayer)

        if(!player){
            throw new Error('Player not found')
        }

        player.position = this.move(player.position + die1 + die2)
        console.log(player)

        if(die1 !== die2){
            this.switchPlayer()
        }

        if(player.position === 100){
            this.gameOver = true
            return `Player ${player.id} Wins!`
        }

        return `Player ${player.id} is on square ${player.position}`
    }

    private move(position: number): number {
        const jump = this.jumps.find(jump => jump.value === position)
        const value = jump ? jump.jumpValue : position

        return value > 100 ? this.move(100 - (value - 100)) : value
    }

    private switchPlayer(){
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1
    }

}

export interface Jump {
    value: number
    jumpValue: number
}

export class Player {
    id: 1 | 2
    position: number

    constructor(id: 1 | 2){
        this.id = id
        this.position = 0
    }
}
