import { h } from '@stencil/core';
import axios from 'axios';
import { format } from 'date-fns';
export class MastodonStatus {
  constructor() {
    this.statusId = undefined;
    this.instance = undefined;
  }
  componentWillRender() {
    if (!this.statusId) {
      throw new Error('status-id is a required property');
    }
    if (!this.instance) {
      throw new Error('instance is a required property');
    }
    let endpoint = `https://${this.instance}/api/v1/statuses/${this.statusId}`;
    return axios.get(endpoint)
      .then(response => {
      this.content = response.data.content;
      this.posted = new Date(response.data.created_at);
      this.externalUrl = response.data.url;
      this.replies = response.data.replies_count;
      this.reblogs = response.data.reblogs_count;
      this.favorites = response.data.favourites_count;
      this.authorId = response.data.account.id;
      this.displayName = response.data.account.display_name;
      this.username = response.data.account.username;
      this.authorAvatar = response.data.account.avatar;
    });
  }
  render() {
    console.log('rendering', this.statusId, this.instance, this.content);
    if (!this.statusId || !this.instance || !this.content) {
      return;
    }
    let content = this.content;
    return (h("div", { class: "wrapper" }, h("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" }), h("div", { class: "header" }, h("span", { class: "avatar" }, h("img", { src: this.authorAvatar })), h("span", { class: "author" }, this.displayName, h("br", null), "@", this.username, "@", this.instance), h("span", { class: "post-date" })), h("div", { class: "content", innerHTML: content }), h("div", { class: "footer" }, h("span", null, format(this.posted, 'MMM d, yyyy, HH:mm')), "\u00B7", h("i", { class: "fa fa-reply fa-fw", "aria-hidden": "true" }), this.replies, "\u00B7", h("i", { class: "fa fa-retweet fa-fw", "aria-hidden": "true" }), this.reblogs, "\u00B7", h("i", { class: "fa fa-star fa-fw", "aria-hidden": "true" }), this.favorites, h("span", { class: "right" }, h("a", { href: this.externalUrl, target: "_blank" }, "View on ", this.instance, h("i", { class: "fa fa-arrow-up-right-from-square fa-fw" }))))));
  }
  static get is() { return "mastodon-status"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["mastodon-status.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["mastodon-status.css"]
    };
  }
  static get properties() {
    return {
      "statusId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "status-id",
        "reflect": false
      },
      "instance": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "instance",
        "reflect": false
      }
    };
  }
}
