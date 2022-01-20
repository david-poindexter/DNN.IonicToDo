# my-items-list



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                        | Type     | Default |
| --------------- | ---------------- | -------------------------------------------------- | -------- | ------- |
| `pageSize`      | `page-size`      | Defines how many items to fetch per request.       | `number` | `100`   |
| `preloadPixels` | `preload-pixels` | Defines how many pixels under the fold to preload. | `number` | `1000`  |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- ion-list
- ion-item-sliding
- ion-item
- ion-label
- ion-checkbox
- ion-item-options
- ion-item-option
- ion-icon
- dnn-button

### Graph
```mermaid
graph TD;
  my-items-list --> ion-list
  my-items-list --> ion-item-sliding
  my-items-list --> ion-item
  my-items-list --> ion-label
  my-items-list --> ion-checkbox
  my-items-list --> ion-item-options
  my-items-list --> ion-item-option
  my-items-list --> ion-icon
  my-items-list --> dnn-button
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item-option --> ion-ripple-effect
  dnn-button --> dnn-modal
  dnn-button --> dnn-button
  my-component --> my-items-list
  style my-items-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
