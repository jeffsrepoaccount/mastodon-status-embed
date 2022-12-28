import { Component, Prop, State, h } from '@stencil/core'
import axios from 'axios'
import { format } from 'date-fns'

@Component({
  tag: 'mastodon-status',
  styleUrl: 'mastodon-status.css',
  shadow: true,
})
export class MastodonStatus {
  @Prop() statusId!: string
  @Prop() instance!: string

  @State() content: string
  @State() hasError: boolean = false
  posted: Date
  externalUrl: string
  replies: number
  reblogs: number
  favorites: number
  authorId: number
  displayName: string
  username: string
  authorAvatar: string

  componentDidLoad() {
    if(!this.statusId) {
      this.hasError = true
      throw new Error('status-id is a required property')
    }

    if(!this.instance) {
      this.hasError = true
      throw new Error('instance is a required property')
    }

    let endpoint = `https://${this.instance}/api/v1/statuses/${this.statusId}`

    return axios.get(endpoint)
      .then(response => {
        this.content = response.data.content
        this.posted = new Date(response.data.created_at)
        this.externalUrl = response.data.url
        this.replies = response.data.replies_count
        this.reblogs = response.data.reblogs_count
        this.favorites = response.data.favourites_count
        this.authorId = response.data.account.id
        this.displayName = response.data.account.display_name
        this.username = response.data.account.username
        this.authorAvatar = response.data.account.avatar
      }).catch(() => {
        this.hasError = true
      })
  }

  render() {
    if(!this.content || this.hasError) {
      return
    }

    let content = this.content

    return (
      <div class="wrapper">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <div class="header">
          <span class="avatar"><img src={this.authorAvatar} /></span>
          <span class="author">
            {this.displayName}<br/>
            @{this.username}@{this.instance}
          </span>
        </div>
        <div class="content" innerHTML={content}></div>

        <div class="footer">
          <span class="post-date">{format(this.posted, 'MMM d, yyyy, HH:mm')}</span>
          &#183;
          <i class="fa fa-reply fa-fw" aria-hidden="true"></i>
          {this.replies}
          &#183;
          <i class="fa fa-retweet fa-fw" aria-hidden="true"></i>
          {this.reblogs}
          &#183;
          <i class="fa fa-star fa-fw" aria-hidden="true"></i>
          {this.favorites}
          <span class="right">
            <a href={this.externalUrl} target="_blank">
              View on {this.instance}
              <i class="fa fa-arrow-up-right-from-square fa-fw"></i>
            </a>
          </span>
        </div>
      </div>
    )
  }
}
