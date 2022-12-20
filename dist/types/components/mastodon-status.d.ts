export declare class MastodonStatus {
  statusId: string;
  instance: string;
  content: string;
  posted: Date;
  externalUrl: string;
  replies: number;
  reblogs: number;
  favorites: number;
  authorId: number;
  displayName: string;
  username: string;
  authorAvatar: string;
  componentWillRender(): Promise<void>;
  render(): any;
}
