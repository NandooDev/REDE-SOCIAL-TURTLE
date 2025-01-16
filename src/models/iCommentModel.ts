export interface ICommentModel {
  id?: string;
  content: string;
  id_post: string;
  id_user: string;
  created_at?: Date;
}
