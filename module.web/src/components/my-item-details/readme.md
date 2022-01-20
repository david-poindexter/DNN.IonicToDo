# my-item-details



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description         | Type             | Default     |
| ------------------- | --------- | ------------------- | ---------------- | ----------- |
| `item` _(required)_ | --        | The item to display | `IItemViewModel` | `undefined` |


## Dependencies

### Depends on

- dnn-button
- dnn-modal
- [my-edit](../my-edit)

### Graph
```mermaid
graph TD;
  my-item-details --> dnn-button
  my-item-details --> dnn-modal
  my-item-details --> my-edit
  dnn-button --> dnn-modal
  dnn-button --> dnn-button
  my-edit --> dnn-button
  style my-item-details fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
