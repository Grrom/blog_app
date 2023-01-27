export default class BlogModel {
  id: string;
  title: string;
  content: string;
  dateCreated: Date;

  constructor(id: string, title: string, content: string, dateCreated: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.dateCreated = dateCreated;
  }
}
