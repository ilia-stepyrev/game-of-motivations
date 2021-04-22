// TODO: I didn't find any good material ui approach to share styles between components, so for now,
// created mixins here

export const Mixins: {[mixin: string]: {[rule: string]: string}} = {
    unselectable: {
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
    }
}