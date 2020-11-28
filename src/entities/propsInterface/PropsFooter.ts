export interface PropsFooter {
    completedCounter: number | undefined;
    allToDoCounter: number | undefined;
    onCompleted: () => void;
    onAll: () => void;
    onActive: () => void;
    onClearAllCompleted: () => void;
}
