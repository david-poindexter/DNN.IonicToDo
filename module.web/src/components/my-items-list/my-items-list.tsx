import { Debounce } from '@eraware/dnn-elements';
import { Component, Host, h, State, Prop, Element } from '@stencil/core';
import { ItemClient, UIInfo } from '../../services/services';
import state, { localizationState } from '../../store/state';
import '@ionic/core';

@Component({
  tag: 'my-items-list',
  styleUrl: 'my-items-list.scss',
  shadow: true,
})
export class MyItemsList {
  /** Defines how many items to fetch per request. */
  @Prop() pageSize = 100;

  /** Defines how many pixels under the fold to preload. */
  @Prop() preloadPixels = 1000;

  @State() loading = true;

  @Element() el: HTMLMyItemsListElement;

  private itemClient!: ItemClient;
  private abortController: AbortController;
  private resx: UIInfo;

  constructor() {
    this.itemClient = new ItemClient({
      moduleId: state.moduleId,
    });
    this.resx = localizationState.viewModel.uI;
  }

  connectedCallback() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  componentDidLoad() {
    this.preload();
  }

  componentDidUpdate() {
    this.preload();
  }

  private preload() {
    if (this.el.getBoundingClientRect().bottom - window.innerHeight < this.preloadPixels) {
      if (!state.allLoaded) {
        this.loadMore()
          .then(() => {
            if (!state.allLoaded) {
              this.preload();
            }
          })
          .catch(() => { });
      }
    }
  }

  private scrollHandler = () => {
    this.handleScroll();
  }

  @Debounce()
  private handleScroll() {
    if (this.el.getBoundingClientRect().bottom - window.innerHeight < this.preloadPixels) {
      this.loadMore();
    }
  }

  private loadMore() {
    return new Promise<void>((resolve, reject) => {
      if (state.items.length == 0 || state.items.length < state.availableItems) {
        this.loading = true;
        this.abortController?.abort();
        this.abortController = new AbortController();
        this.itemClient.getItemsPage(
          state.searchQuery,
          state.lastFetchedPage + 1,
          this.pageSize,
          false,
          this.abortController.signal)
          .then(results => {
            state.items = [...state.items, ...results.items];
            state.availableItems = results.resultCount;
            state.lastFetchedPage = results.page;
            state.totalPages = results.pageCount;
            this.loading = false;
            if (state.items.length === results.resultCount) {
              state.allLoaded = true;
            }
            resolve();
          }, rejectReason => {
            if (rejectReason instanceof DOMException && rejectReason.code === rejectReason.ABORT_ERR) {
              reject(() => { });
              return;
            }
            alert(rejectReason);
            reject(rejectReason);
          })
          .catch(rejectReason => {
            alert(rejectReason);
            reject(rejectReason);
          });
      }
    });
  }

  private edit(e: any) {
    console.log('Edit clicked', e);
  }

  private delete(e: any) {
    console.log('Delete clicked', e);
  }

  render() {
    return (
      <Host>
        <ion-list>
        {state.items.map(item =>
          <div class="item">
            <ion-item-sliding>
              <ion-item>
                <ion-label>{item.name}</ion-label>
                <ion-checkbox slot="start" checked={false}></ion-checkbox>
              </ion-item>
              <ion-item-options>
                <ion-item-option onClick={e => this.edit(e)}>
                  <ion-icon slot="start" name="create-outline"></ion-icon>
                  Edit
                </ion-item-option>
                <ion-item-option color="danger" onClick={e => this.delete(e)}>
                  <ion-icon slot="start" name="close-circle-outline"></ion-icon>
                  Delete
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
            {/* <my-item-details item={item} /> */}
          </div>
        )}
        </ion-list>
        {this.loading &&
          <div class="loading"></div>
        }
        <div class="footer">
          <p>{this.resx.shownItems.replace("{0}", state.items.length.toString()).replace("{1}", state.availableItems.toString())}</p>
          {!this.loading && state.items.length < state.availableItems &&
            <dnn-button type="primary" reversed
              onClick={() => this.loadMore()}
            >
              {this.resx.loadMore || "Load More"}
            </dnn-button>
          }
        </div>
      </Host>
    );
  }
}
