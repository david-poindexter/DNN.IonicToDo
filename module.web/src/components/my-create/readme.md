# my-create



<!-- Auto Generated Below -->


## Events

| Event         | Description                        | Type               |
| ------------- | ---------------------------------- | ------------------ |
| `itemCreated` | Fires up when an item got created. | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- ion-fab
- ion-fab-button
- ion-icon

### Graph
```mermaid
graph TD;
  my-create --> ion-fab
  my-create --> ion-fab-button
  my-create --> ion-icon
  ion-fab-button --> ion-icon
  ion-fab-button --> ion-ripple-effect
  my-component --> my-create
  style my-create fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
