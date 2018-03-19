class Blog {
  _id: string;
  title: string;
  description: string;
  date: Date;
  status?: string;
  isPublished: boolean;
  constructor() {
    this.title = '';
    this.description = '';
    this.date = new Date();
    this.status = '';
    this.isPublished = false;
  }
}
export default Blog;