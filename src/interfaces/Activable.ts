export default interface Activable {
    setActive(): void;
    setInactive(): void;
    isActive(): boolean;
}