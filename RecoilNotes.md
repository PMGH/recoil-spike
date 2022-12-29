# Getting Started

Recoil docs: https://recoiljs.org/docs/introduction/getting-started
Recoil sideguide (vscode extension) tutorial: https://app.sideguide.dev/recoil/tutorial/

### Atoms
Definition: A unit of state (key/value pair)

```typescript
const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});
```
> Note: atoms require a unique key, two atoms cannot share a key

The `useRecoilState` hook is used to read and write atoms from a component (similar to React's `useState`). This allows atom state to be shared among components.

### Selectors
Definition: derived state (pure function applied to the state to create a new piece of state)

```typescript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

Selectors can be read using `useRecoilValue()`, which takes an atom or selector as an argument and returns the corresponding value
