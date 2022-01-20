import { Component, Host, h, ComponentInterface } from '@stencil/core';
// import { localizationState } from '../../store/state';
import { alertController } from '@ionic/core';

@Component({
  tag: 'my-create',
  styleUrl: 'my-create.scss',
  shadow: true,
})
export class MyCreate implements ComponentInterface {

  // private modal!: HTMLDnnModalElement;
  // private editForm!: HTMLMyEditElement;

  private async createNewToDo($event: UIEvent) {
    $event.stopPropagation();

    const alert: HTMLIonAlertElement = await alertController.create({
      message: 'Test message.',
      buttons: ['Ok']
    });

    return await alert.present();
  }

  // private async openModal() {
  //   const modal: HTMLIonModalElement = await modalController.create({
  //     component: 'app-modal'
  //   });

  //   await modal.present();
  // }

  render() {
    // const resx = localizationState.viewModel.uI;
    return (
      <Host>
        {/* <ion-button>{resx.addItem}</ion-button> */}
        <ion-fab 
          vertical="top"
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
