import { Component, h, Prop, Host, Element, Listen } from "@stencil/core";
import "@eraware/dnn-elements";
import { ItemClient, LocalizationClient, LocalizationViewModel } from "../../services/services";
import state, { localizationState } from "../../store/state";
import alertError from "../../services/alert-error";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  private service: ItemClient;
  private localizationService: LocalizationClient;
  private resx: LocalizationViewModel;

  constructor() {
    this.service = new ItemClient({ moduleId: this.moduleId });
    state.moduleId = this.moduleId;
    this.localizationService = new LocalizationClient({ moduleId: this.moduleId });
  }

  @Element() el: HTMLMyComponentElement;

  /** The Dnn module id, required in order to access web services. */
  @Prop() moduleId!: number;

  componentWillLoad() {
    return new Promise<void>((resolve, reject) => {
      this.localizationService.getLocalization()
        .then(l => {
          localizationState.viewModel = l;
          this.resx = localizationState.viewModel;
          resolve();
        })
        .catch(reason => {
          alertError(reason);
          reject();
        });
    })
  }

  componentDidLoad(): void {
    this.service.userCanEdit().then(canEdit => state.userCanEdit = canEdit);
  }

  @Listen("itemCreated")
  handleItemCreated() {
    state.searchQuery = "";
  }

  render() {
    return <Host>
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">DNN Ionic ToDo</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar placeholder={this.resx.uI.searchPlaceholder || "Search"} onIonChange={e => state.searchQuery = e.detail.value} ></ion-searchbar>
        </ion-toolbar>
        {state.userCanEdit &&
          <my-create />
        }
      </ion-header>
      <my-items-list />
    </Host>;
  }
}
