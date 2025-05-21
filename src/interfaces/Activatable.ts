export default interface Activatable {
    setActive(): void;
    setInactive(): void;
    isActive(): boolean;
}