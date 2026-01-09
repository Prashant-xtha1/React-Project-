# React State & Props

- Props => Data passed by a parent component to child
- State = > Data created or stored in a component
- States are maintained by component using hook

## Hook

- Special functions in a react application that gives us the feature of react
- Hook function starts with `use` keyword
- Hooks can only be called inside the component

### State vs Effecthook

- State hook
  - to create a data inside the component we need to use state hook
  - if any state of a component gets updated/set/changed the component will remount/rerender

  ```jsx
    import {use state} from "react";
    function Todo() {
      const [data, setData] = useState<DataType>(<defaultValue>)

      return(<>jsx</>)
    }
  ```
- Effect Hook
  - also known as sideEffect hook
  - this hook is reloaded/called/mounted on any state update/change depending on usages