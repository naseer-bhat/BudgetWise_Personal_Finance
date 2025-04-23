export default class User {
    constructor(id, name, email, profileImage = null) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.profileImage = profileImage;
      this.createdAt = new Date();
    }
  }