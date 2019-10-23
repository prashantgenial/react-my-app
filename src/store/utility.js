export const UtilityObject = (oldObj,changedProps) => {
    return {
        ...oldObj,
        ...changedProps
    }
}