export declare class MastodonStatus {
  statusId: string;
  instance: string;
  content: string;
  hasError: boolean;
  posted: Date;
  externalUrl: string;
  replies: number;
  reblogs: number;
  favorites: number;
  authorId: number;
  displayName: string;
  username: string;
  authorAvatar: string;
  componentDidLoad(): Promise<void>;
  render(): any;
}
