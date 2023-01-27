import BlogModel from "../types/BlogModel";

export default class ApiHelper {
  static url = "http://localhost:8888/";

  static async getBlogs(): Promise<Array<BlogModel>> {
    return await fetch(this.url + "list_blogs", {
      method: "GET",
    }).then(async (data) => {
      const response = await data.json();
      const blogs: Array<BlogModel> = [];
      response.forEach((element: any) => {
        blogs.push(
          new BlogModel(
            element.id,
            element.title,
            element.content,
            new Date(element.date_created)
          )
        );
      });

      return blogs;
    });
  }

  static async createBlog(title: string, content: string): Promise<boolean> {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date_created", new Date().toISOString());
    return await fetch(this.url + "create_blog", {
      method: "POST",
      body: formData,
    })
      .then(async (data) => {
        return true;
      })
      .catch((e) => {
        return false;
      });
  }

  static async updateBlog(
    id: string,
    title: string,
    content: string,
    dateCreated: Date
  ): Promise<boolean> {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date_created", dateCreated.toISOString());
    return await fetch(this.url + "update_blog", {
      method: "POST",
      body: formData,
    })
      .then(async (data) => {
        return true;
      })
      .catch((e) => {
        return false;
      });
  }

  static async deleteBlog(id: string): Promise<boolean> {
    const formData = new FormData();
    formData.append("id", id);
    return await fetch(this.url + "delete_blog", {
      method: "POST",
      body: formData,
    })
      .then(async (data) => {
        return true;
      })
      .catch((e) => {
        return false;
      });
  }
}
