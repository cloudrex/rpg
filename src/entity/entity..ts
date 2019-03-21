export default abstract class Entity {
    abstract readonly initialHealth: number;

    protected health: number = this.initialHealth;

    public getHealth(): number {
        return this.health;
    }
}
