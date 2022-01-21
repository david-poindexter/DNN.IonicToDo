import { Component, Host, h, ComponentInterface, Event, EventEmitter } from '@stencil/core';
// import { localizationState } from '../../store/state';
import { alertController } from '@ionic/core';
import { CreateItemDTO, ItemClient } from '../../services/services';
import state from '../../store/state';

@Component({
  tag: 'my-create',
  styleUrl: 'my-create.scss',
  shadow: true,
})
export class MyCreate implements ComponentInterface {

  // private modal!: HTMLDnnModalElement;
  // private editForm!: HTMLMyEditElement;

  private itemClient!: ItemClient;

  constructor() {
    this.itemClient = new ItemClient({
      moduleId: state.moduleId,
    });
  }

  /** Fires up when an item got created. */
  @Event() itemCreated: EventEmitter

  private async createNewToDo($event: UIEvent) {
    $event.stopPropagation();

    const alert: HTMLIonAlertElement = await alertController.create({
      message: 'Add ToDo',
      inputs: [
        {
          name: 'todoName',
          placeholder: 'Task name...',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked.', data);
          }
        },
        {
          text: 'Add',
          handler: data => {
            console.log('Add clicked.');
            const createItemDTO = new CreateItemDTO({
              name: data.name,
              description: data.name,
            });
            this.itemClient.createItem(createItemDTO)
              .then(() => {
                this.itemCreated.emit();
              },
                reason => console.log(reason))
              .catch(reason => console.log(reason));
          }
        }
      ]
    });

    return await alert.present();
  }

  render() {
    // const resx = localizationState.viewModel.uI;
    return (
      <Host>
        {/* <ion-button>{resx.addItem}</ion-button> */}
        <ion-fab 
          vertical="bottom"
          horizontal="end"
          slot="fixed"
          onClick={($event: UIEvent) => this.createNewToDo($event)}>
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        {/* <dnn-modal
          ref={e => this.modal = e}
          showCloseButton={false}
          backdropDismiss={false}
        >
          <my-edit ref={e => this.editForm = e} />
        </dnn-modal> */}
      </Host>
    );
  }
}
