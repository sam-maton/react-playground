# React Playground

### Side Effect Rules

0. When a component renders, it should do so without running into any side effects
1. If a side effect is triggered by an event, put that side effect in an event handler
2. If a side effect is synchronizing your component with some outside system, put that side effect inside useEffect
3. If a side effect is synchronizing your component with some outside system and that side effect needs to run _before_ the browser paints the screen, put that side effect inside useLayoutEffect
4. If a side effect is subscribing to an external store, use the useSyncExternalStore hook
